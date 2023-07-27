const handlePuch = (itemArr) => {
    localStorage.setItem('product', itemArr)
    const idProduckt = itemArr.slice(-9, -4) // При изменении имени продуктов - здесь отредактируй длинну вырезки
    localStorage.setItem('id', `${idProduckt}.png`)
}

const product = document.querySelector(".cardbar_card")
product.addEventListener('click', event =>{
        const itemArr = event.target.src 
        if(!!itemArr){               
        handlePuch(itemArr)
        }
    })
