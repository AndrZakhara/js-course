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
  const timeCh = '2021-12-31';
  setClock('.timer', timeCh);

  // Modal window
  const btnModal = document.querySelectorAll('.modal__call');
  const btnClose = document.querySelector('.modal__close');
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
  btnClose.addEventListener('click', showModalClose);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      showModalClose();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      showModalClose();
    }
  });
// setTime & scroll Modal
  const timerModal = setTimeout(showModalOpen, 6000);

  function showModalScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModalOpen();
      document.body.style.overflow = '';
      window.removeEventListener('scroll', showModalScroll);
    }
  };
  window.addEventListener('scroll', showModalScroll);
});
