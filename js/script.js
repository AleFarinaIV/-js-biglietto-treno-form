let calculate = document.getElementById('calculate'); 
calculate.addEventListener('click', function () {
    let kilometres = document.getElementById('kilometres').value
    let age = document.getElementById('age').value
    let price = kilometres * 0.21
    if (age === 'minorenne') {
        price = price - (price * 0.2)
        console.log(price)
    }
})