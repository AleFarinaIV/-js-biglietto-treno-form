let calculate = document.getElementById('calculate');
calculate.addEventListener('click', function () {
    let kilometres = document.getElementById('kilometres').value
    let age = document.getElementById('age').value
    let price = kilometres * 0.21
    let name = document.getElementById('name').value
    if (age === 'minorenne') {
        price = price - (price * 0.2)
        console.log(price)
        console.log(name)
        document.getElementById('price').innerHTML = price
    }
    else if (age === 'senior') {
        price = price - (price * 0.4)
        console.log(price)
        console.log(name)
    }
    else {
        console.log(price)
        console.log(name)
    }
})