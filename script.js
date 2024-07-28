'use strict';
        
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const nameOfFilms = prompt('Один из последних просмотренных фильмов?', '');
        const countOfFilms = +prompt('На сколько оцените его?', '');
        
        if (nameOfFilms != null  && countOfFilms != null  && nameOfFilms != '' && countOfFilms != '' && nameOfFilms.length < 50) 
            personalMovieDB.movies[nameOfFilms] = countOfFilms;
        else 
            i--;
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 
        && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: { },
    actors: { },
    genres: [ ],
    privat: false
}

//rememberMyFilms();

//detectPersonalLevel();

const showMyDB = (hidden) => {
    if (!hidden) console.log(personalMovieDB);
}

const writeYourGenres = function(object) {
    for (let i = 1; i <= 3; i++) {
        object.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
};

writeYourGenres(personalMovieDB);

showMyDB(personalMovieDB.privat); 