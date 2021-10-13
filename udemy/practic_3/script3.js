//
let numberOfFilm;
function start() {
    numberOfFilm = +prompt('How many films did you watch?', '')

    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
        numberOfFilm = +prompt('How many films did you watch?', '')
    }
}
start();

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) { alert('watched a few movies') }
    else if (personalMovieDB.count <= 30) { alert('you are classical viewer!') }
    else if (personalMovieDB.count > 30) { alert('you are movie fan!') }
    else { alert('an error has occurred') }
};
detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('What has it watched your last movie?', '');
        let b = +prompt('How many balls has it?',);
        if (a != null && a != '' && b != null && b != '' && a.length < 10) {
            personalMovieDB.movies[a] = b;
        }
        else { i-- };
    }
}
rememberMyFilms();

function showMyDB() {
    if (personalMovieDB.privet == false) {
        console.log(personalMovieDB)
    }
}
showMyDB();

function writeYourGenres() {
    for (i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`is your ${i+1} like genre ?`)
    }
}
writeYourGenres();
