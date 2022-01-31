window.addEventListener('DOMContentLoaded', () => {
  //Tabs
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    })
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    })
  };

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  };

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const tar = event.target;

    if (tar && tar.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (tar == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  //Timer 2021-12-31
  function getTimeRest(endTime) {
    let t = Date.parse(endTime) - Date.now() - 7200 * 1000;
    const days = Math.floor(t / (1000 * 3600 * 24));
    const hours = Math.floor((t / (1000 * 3600)) % 24);
    const minutes = Math.floor((t / (1000 * 60)) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    if (t <= 0) { return 0 }
    else {
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
      }
    }
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInt = setInterval(updateClock, 1000);

    updateClock();

    function getZero(num) {
      if (num < 10 && num >= 0) { return `0${num}` }
      else { return num }
    }

    function updateClock() {
      const tObj = getTimeRest(endTime);

      days.textContent = getZero(tObj.days);
      hours.textContent = getZero(tObj.hours);
      minutes.textContent = getZero(tObj.minutes);
      seconds.textContent = getZero(tObj.seconds);

      if (tObj.total <= 0) {
        clearInterval(timeInt);
      }
    }
  }
  const timeCh = '2022-03-01';
  setClock('.timer', timeCh);

  // Modal window
  const btnModal = document.querySelectorAll('.modal__call');
  const modal = document.querySelector('.modal');

  function showModalOpen() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(timerModal);
  };
  function showModalClose() {
    modal.classList.add('hide');// modal.classList.toggle('hide');
    modal.classList.remove('show');//
    document.body.style.overflow = '';
  };

  btnModal.forEach((btn) => {
    btn.addEventListener('click', showModalOpen);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      showModalClose();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      showModalClose();
    }
  });
  // setTime & scroll Modal
  const timerModal = setTimeout(showModalOpen, 9000);

  function showModalScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModalOpen();
      document.body.style.overflow = '';
      window.removeEventListener('scroll', showModalScroll);
    }
  };
  window.addEventListener('scroll', showModalScroll);

  // add class , template
  const curse = 28;
  class CardTemplate {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.classes = classes;
      this.curse = curse;
      this.crossCurse();
    }

    crossCurse() { this.price = +this.curse * this.price }

    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      };
      element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
      this.parent.append(element);
    }
  };

  new CardTemplate(
    "img/tabs/vegy.jpg",
    "vegy",
    `Меню "Фитнес"`,
    `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих
        овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной
        ценой и высоким качеством!`,
    9,
    ".menu .container",
  ).render();

  new CardTemplate(
    "img/tabs/elite.jpg",
    "img/tabs/elite.jpg",
    `Меню “Премиум”`,
    `В меню “Премиум” мы используем не только красивый дизайн упаковки, но
        и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода
        в ресторан!`,
    15,
    ".menu .container",
  ).render();

  new CardTemplate(
    "img/tabs/post.jpg",
    "post",
    `Меню "Постное"`,
    `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
        продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное
        количество белков за счет тофу и импортных вегетарианских стейков.`,
    11,
    ".menu .container",
  ).render();
  
  //Forms
  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/form/054 spinner.svg',
    success: 'Thanks , We contacting to you soon',
    failure: 'Something went wrong...'
  };

  forms.forEach(item => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
      display: block;
      margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      // const request = new XMLHttpRequest();
      // request.open('POST', 'server.php');

      // request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(form);

      const obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });

      fetch('server.php', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { 'Content-type': 'application/json' }
      })
      .then(data => data.text())
      .then(data => {
        console.log(data); 
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });

      // request.send(json);

      // request.addEventListener('load', () => {
      //   if (request.status === 200) {
      //     showThanksModal(message.success);
      //     form.reset();
      //     statusMessage.remove();
      //   } else {
      //     showThanksModal(message.failure);
      //   }
      // })
    })
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    showModalOpen();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>    
        `;
    document.querySelector('.modal').append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      showModalClose();
    }, 5000);
  }

});
