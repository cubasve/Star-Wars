export function getAllStarships() {
    const endpoint = 'https://swapi.dev/api/starships/';
    return fetch(endpoint).then(res => res.json());
}