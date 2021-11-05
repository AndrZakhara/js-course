//methods into object 
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privet: true,
    start: function () {
        personalMovieDB.count = +prompt('How many films did you watch?', '')
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films did you watch?', '')
        };
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) { alert('watched a few movies') }
        else if (personalMovieDB.count <= 30) { alert('you are classical viewer!') }
        else if (personalMovieDB.count > 30) { alert('you are movie fan!') }
        else { alert('an error has occurred') }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('What has it watched your last movie?', '');
            let b = +prompt('How many balls has it?',);
            if (a != null && a != '' && b != null && b != '' && a.length < 10) {
                personalMovieDB.movies[a] = b;
            }
            else { i-- };
        }
    },
    writeYourGenres: function () {
        for (i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`is your ${i + 1} like genre ?`)
            if (personalMovieDB.genres[i] == "" || personalMovieDB.genres[i] == null) i--;
        };
        personalMovieDB.genres.forEach((genre, k) =>
            console.log(`My likes № ${k + 1} genre is : ${genre} `)
        );

    },
    showMyDB: function () {
        if (personalMovieDB.privet == false) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privet ?
            personalMovieDB.privet = false :
            personalMovieDB.privet = true;
    },
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
