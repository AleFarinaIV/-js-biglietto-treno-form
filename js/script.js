let calculate = document.getElementById('calculate');
calculate.addEventListener('click', function () {
    let kilometres = document.getElementById('kilometres').value
    let age = document.getElementById('age').value
    let price = kilometres * 0.21
    let name = document.getElementById('name').value
    document.getElementById('inner-name').innerHTML = name
    if (age === 'minorenne') {
        price = price - (price * 0.2)
        console.log(price)
        console.log(name)
        document.getElementById('price').innerHTML = price
        document.getElementById('offerType').innerHTML = 'Offerta under18'
        document.getElementById('cabNumber').innerHTML = Math.floor(Math.random() * 11)
        document.getElementById('codeNumber').innerHTML = Math.floor(Math.random() * 100000)
    }else if (age === 'senior') {
        price = price - (price * 0.4)
        console.log(price)
        console.log(name)
        document.getElementById('offerType').innerHTML = 'Offerta Senior'
        document.getElementById('cabNumber').innerHTML = Math.floor(Math.random() * 11)
        document.getElementById('codeNumber').innerHTML = Math.floor(Math.random() * 100000)
    }else {
        console.log(price)
        console.log(name)
    }
})