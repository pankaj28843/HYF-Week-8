// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello there!');
//     }, 2000);

//     // setTimeout(()=> {
//     //     reject('Hey, we cannot serve you!');
//     // }, 1000);
// });


// promise1.then(data => {
//     console.log('Result returned from promise1 is:', data);

//     const promise2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hello there, another promise!');
//         }, 2000);

//         // setTimeout(()=> {
//         //     reject('Hey, we cannot serve you!');
//         // }, 1000);
//     });

//     return promise2;
// }).then(data => {
//     console.log('Result returned from promise2 is:', data);
// }).catch(error => {
//     console.log('Error returned from promise1 is:', error);
// });


function fetchJSONDataNew(url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            const jsonData = JSON.parse(xhr.responseText);
            resolve(jsonData);
        });

        xhr.open('get', url);
        xhr.send();
    });



    return promise;
}


const moviesURL = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';


function printMovie(movie) {
    console.log(`${movie.title}; ${movie.year}; ${movie.rating}; ${movie.votes}`);

}

fetchJSONDataNew(moviesURL).then(movies => {
    console.log(movies);

    // Step 1: Get all movies from 2000s - relase year >= 2000, <= 2009
    // Step 2: Find movies with votes more than 1,000,000
    // Step 3: Console log title, relase year, votes, and rating for each film


    const moviesFrom2000s = movies.filter(movie => movie.year > 1999 && movie.year < 2010);
    const popularMoviesFrom2000s = moviesFrom2000s.filter(movie => movie.votes > 1000000);

    // popularMoviesFrom2000s.map(movie => {
    //     if (movie.rating >=7 ) {
    //         movie['tag'] = 'Good';
    //     } else if (movie.rating >=4 ) {
    //         movie['tag'] = 'Average';
    //     } else {
    //         movie['tag'] = 'Bad';
    //     }
    //     return movie;
    // })

    console.log('\n\n\n>>>>> Most Popular');

    popularMoviesFrom2000s.forEach(printMovie);



    const topRatedMoviesFrom2000s = moviesFrom2000s.filter(movie => movie.rating > 8.5);

    console.log('\n\n\n>>>>> Top Rated');

    topRatedMoviesFrom2000s.forEach(printMovie);


}).catch(error => {
    console.log("Error occured:", error);
});


