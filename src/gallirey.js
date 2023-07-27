const producktBirt = document.querySelector(".karusel_box__image")
const imageUser = document.querySelector(".karusel_image_newimage")

producktBirt.addEventListener('click', () => {
    producktBirt.insertAdjacentHTML(
        'afterbegin',
    `<div style="position: absolute; width: 1300px; height: 100%; background-color: black; opacity: 30%;">
    </div>
    <div style="position: absolute; opacity: 100%;">
        <img src='./card/${localStorage.getItem('id')}.png'>
    <div>
    `
    )
} )