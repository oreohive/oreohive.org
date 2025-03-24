export async function load({ fetch }) {
    const response = await fetch("https://api.oreohive.org/quotes/je");
    if (!response.ok) {
        throw new Error("failed to fetch quotes from api. please check https://api.oreohive.org/quotes/je is available and working.");
    }
    const data = await response.json();
    console.log(data);
    return { quotes: data };
}