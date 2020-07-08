export async function makeRequest(url, options) {
    let response = await fetch(url, options);

    if (response.status  !== 200) {
        let text = await response.text();
        throw new Error(text);
    }
    return response.json();
}