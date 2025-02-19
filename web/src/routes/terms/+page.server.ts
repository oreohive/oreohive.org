// src/routes/terms/+page.server.ts

import fs from 'fs';
import path from 'path';

/*

function for loading the terms data by reading the static/docs folder.
returns an object containing an array of term objects,
each with a folder name and an array of markdown and html file names

*/

export async function load() {
        // get absolute path to the static/docs folder
        const terms_dir = path.join(process.cwd(), 'static', 'terms');

        let terms = [];

        try {
                // read entries in terms_dir and filter for directories only
                const folder_names = fs
                        .readdirSync(terms_dir, { withFileTypes: true })
                        .filter((dirent) => dirent.isDirectory())
                        .map((dirent) => dirent.name);

                // loop through each folder to list its markdown and html files
                for (const folder of folder_names) {
                        const folder_path = path.join(terms_dir, folder);

                        // read entries in folder and filter for files ending with .md or .html
                        const file_names = fs
                                .readdirSync(folder_path, {
                                        withFileTypes: true,
                                })

                                .filter(
                                        (dirent) =>
                                                !dirent.isDirectory() &&
                                                (dirent.name.endsWith('.md') || dirent.name.endsWith('.html'))
                                )

                                .map((dirent) => path.join('/terms', folder, dirent.name));

                        // add folder and its md or html files to terms array
                        terms.push({ folder, files: file_names });
                }
        } catch (err) {
                console.error('error reading terms directory:', err);
        }

        return { terms };
}
