// src/routes/edu/a-level/english-lit/texts/je/activities/quotesquery/+page.js

export async function load({ fetch }) {
    const response = await fetch("https://api.oreohive.org/quotes/je");
    if (!response.ok) {
        throw new Error("failed to fetch quotes from api. please check https://api.oreohive.org/quotes/je is available and working.");
    }
    const data = await response.json();
    console.log(data);
    return { quote: data.quote };
}