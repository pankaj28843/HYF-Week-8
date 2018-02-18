
function fetchJSONData(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        const jsonData = JSON.parse(xhr.responseText);
        callbackFn(jsonData);
    });
    xhr.open('get', url);
    xhr.send();
}


const moviesURL = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';


fetchJSONData(moviesURL, movies => {
    console.log(movies);
});