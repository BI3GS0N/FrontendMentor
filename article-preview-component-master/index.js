const shareBtn = document.querySelector('.footer__share-button');
const share = document.querySelector('.share');
shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('active');
    share.classList.toggle('active');
})