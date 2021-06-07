const   modal = document.querySelector('.modal'),
        login = document.querySelector('.header__info-login'),
        closeBtn = document.querySelector('.modal__close');

    login.addEventListener('click', e => {
        e.preventDefault();
        modal.classList.add('show');
        modal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('show');
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('show');
        }
    });