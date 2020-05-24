
let toggle = document.getElementById("toggle-btn")
console.log(toggle)

toggle.addEventListener('click', changePrice);

function changePrice() {
    let prices = document.getElementsByClassName('price');
    if (toggle.classList.contains('active')) {
        prices[0].innerHTML = '19.99'
        prices[1].innerHTML = '24.99'
        prices[2].innerHTML = '39.99'
    } else {
        prices[0].innerHTML = '199.99'
        prices[1].innerHTML = '249.99'
        prices[2].innerHTML = '399.99'
    }
}

