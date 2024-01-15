let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu-mobile')


btnMenu.addEventListener('click' , ()=>{
    /*sempre que o usuário clicar, irá adicionar uma classe que não pode existir no css, que é o abrir menu */
    menu.classList.add('abrir-menu');
})


menu.addEventListener('click' , ()=>{
    /*sempre que o usuário clicar, irá remover uma classe */
    menu.classList.remove('abrir-menu');
})


overlay.addEventListener('click' , ()=>{
    /*sempre que o usuário clicar, irá remover uma classe */
    menu.classList.remove('abrir-menu');
})