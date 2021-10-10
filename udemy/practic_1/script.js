// task 1
const numberOfFilm = +prompt('How many films did you watch?',);
console.log(numberOfFilm);
alert(numberOfFilm);

//task 2
const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};
//task 3
const a = prompt('What has it watched your last movie?', '');
const b = +prompt('How many balls has it?',);
const c = prompt('What has it watched your last movie?', '');
const d = +prompt('How many balls has it?',);
personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
  
console.log(personalMovieDB);
alert(personalMovieDB);
