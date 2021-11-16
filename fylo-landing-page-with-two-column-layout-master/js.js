const inputs = document.querySelectorAll('input')
const buttons = document.querySelectorAll('button')
const invalids = document.querySelectorAll('.invalid')

buttons.forEach(el => {
    el.addEventListener('click', () => {
        const index = Array.prototype.indexOf.call(buttons, el);
        if (inputs[index].validity.typeMismatch) {
            invalids[index].classList.add('show')
        }
    })
});