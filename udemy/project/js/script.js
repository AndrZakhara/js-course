/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const blurb = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    pic = document.querySelector('.promo__bg'),
    mov = document.querySelector('.promo__interactive-list');

blurb.forEach(item =>
    item.remove()
);
genre.textContent = "Drama";

pic.style.backgroundImage = "url('img/bg.jpg') ";
// third task
movieDB.movies.sort();

mov.innerHTML = ""; //clear all films

movieDB.movies.forEach((film, key) => {
    mov.innerHTML += ` <li class="promo__interactive-item">${key + 1}) ${film}
                            <div class="delete"></div>
                       </li>`
});
