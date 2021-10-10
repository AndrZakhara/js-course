//header
const numberOfFilm = +prompt('How many films did you watch?',);
const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

if (personalMovieDB.count < 10) { alert('watched a few movies') }
else if (personalMovieDB.count <= 30) { alert('you are classical viewer!') }
else if (personalMovieDB.count > 30) { alert('you are movie fan!') }
else { alert('an error has occurred') }

//first method
for(let i=0;i<2;i++){
    let a = prompt('What has it watched your last movie?', '');
    let b = +prompt('How many balls has it?',);
    if (a != null && a != '' && b != null && b != '' && a.length < 10) {
        personalMovieDB.movies[a] = b;  }
    else { i-- };
}
console.log(personalMovieDB);

//second method
let j = 0;
do {
    let a = prompt('What has it watched your last movie?', '');
    let b = +prompt('How many balls has it?','');
    if (a != null  && a != '' && b != null && b != NaN && b != '' && a.length < 10) {
        personalMovieDB.movies[a] = b  }
    else { j-- };
    j++;
}
while (j < 2);
console.log(personalMovieDB);


