document.querySelector('button').addEventListener('click', () => {

    let temperatures = document.querySelector('#temperatue-before').value;
    temperatures = temperatures.split(',');

    let filter = temperatures.filter(e => e != '');
    
    let result = 0;
    let unit1 = document.querySelector('#unit-1').value;
    let unit2 = document.querySelector('#unit-2').value;

    if(unit1 != unit2){
        if(unit1 == 'Celsius') {
            if(unit2 == 'Fahrenheit'){
                result = filter.map(e => {
                    if(!isNaN(parseFloat(e))) {
                        return e + ': ' + ((e * 9/5) + 32).toFixed(2) + ' °F';
                    }
                    return e + ': valor inválido';
                })
            }

            else {
                result = filter.map(e => {
                    if(!isNaN(parseFloat(e))) {
                        return e + ': ' + (parseFloat(e) + 273.15).toFixed(2) + ' K';
                    }
                    return e + ': valor inválido';
                })
            }
        }

        if(unit1 == 'Fahrenheit') {
            if(unit2 == 'Celsius'){
                result = filter.map(e => {
                    if(!isNaN(parseFloat(e))) {
                        return e + ': ' + ((e - 32) * 5/9).toFixed(2) + ' C';
                    }
                    return e + ': valor inválido';
                })
            }

            else {
                result = filter.map(e => {
                    if(!isNaN(parseFloat(e))) {
                        return e + ': ' + ((e - 32) * 5/9 + 273.15).toFixed(2) + ' K';
                    }
                    return e + ': valor inválido';
                })
            }
        }

        if(unit1 == 'Kelvin') {
            if(unit2 == 'Fahrenheit'){
                result = filter.map(e => {
                    if(!isNaN(parseFloat(e))){
                        return e + ': ' + ((e - 273.15) * 9/5 + 32).toFixed(2) + ' °F';
                    }
                    return e + ': valor inválido';
                })
            }

            else {
                result = filter.map(e => {
                    if(!isNaN(parseFloat(e))) {
                        return e + ': ' + (e - 273.15).toFixed(2) + ' °C';
                    }
                    return e + ': valor inválido';
                })
            }

        }
        document.querySelector('#values-c').innerHTML = result;
    }
})