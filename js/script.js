
const menu = document.querySelector('.nav__menu');
const target = document.querySelectorAll('.target');
const link = document.querySelectorAll('.gallery__link');

link.forEach(item => {
    item.addEventListener('click', (e) =>{
        if(e.target ) {
            e.preventDefault();
        }
    });
});

menu.addEventListener('click', () => {
    
    target.forEach(item => {
        item.classList.toggle('changes');
    });

});



const icons = document.querySelectorAll('.head__icons > i');

let i = 1;


setInterval(() => {
    
    i++;
    const icon = document.querySelector('.change');
    
    icon.classList.remove('change');
    if (i > icons.length ) {

        icons[0].classList.add('change');
        i = 1;
    } else {
        icon.nextElementSibling.classList.add('change');
    }
    
    
    
}, 3000);

