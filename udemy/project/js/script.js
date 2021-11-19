/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */



'use strict';
document.addEventListener('DOMContentLoaded', () => {


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
    // start new code
    const form = document.querySelector("form.add"),
        inpFilm = form.querySelector(".adding__input"),
        likeFilm = form.querySelector("checkbox"),
        checkbox = form.querySelector('[type="checkbox"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = inpFilm.value;

        if (newFilm) {
            let longFilm;
            if (newFilm.length > 10) {

                longFilm = newFilm.slice(0, 10); // so may be too 
                newFilm = longFilm + '...';      //  newFilm = `${newFilm.slice(0, 10)}...`;
            };

            movieDB.movies.push(newFilm);
            changeListFilms(movieDB.movies, mov);
        };
        event.target.reset();// clear input
    });

    const deleteRubbish = function (adv) {
        adv.forEach(item => item.remove())
    };

    const makeImprove = () => {
        genre.textContent = "Drama";
        pic.style.backgroundImage = "url('img/bg.jpg') ";
    };

    function changeListFilms(arrFilms, listFilms) {
        listFilms.innerHTML = ""; //clear all films
        arrFilms.sort();

        arrFilms.forEach((film, key) => {
            listFilms.innerHTML += ` <li class="promo__interactive-item">${key + 1}) ${film}
                                         <div class="delete"></div>
                                     </li>`
        });
        let del = document.querySelectorAll('div.delete');
        del.forEach((btn, i) => {

            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                changeListFilms(movieDB.movies, mov);//
            })
        
        });
    };

    deleteRubbish(blurb);
    makeImprove();
    changeListFilms(movieDB.movies, mov);

})
