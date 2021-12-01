window.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.btn');
    const value = document.querySelector('#value');
    let count = 0;
    
    btns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const tick = event.currentTarget.classList;
            if (tick.contains("decrease")) {
                count--;
                value.style.color = 'blue';
            }
            if (tick.contains("reset")) {
                count = 0;
                value.style.color = 'green';
                value.previousElementSibling.textContent = 'retnuoc';
            }
            if (tick.contains("increase")) {
                count++;
                value.style.color = 'red';
            }
            value.textContent = count;
        })
    });
})
