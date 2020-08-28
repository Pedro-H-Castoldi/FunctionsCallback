document.querySelector('button').addEventListener('click', () => {

    let temperatures = document.querySelector('#temperatue-before').value;
    temperatures = temperatures.split(',');

    let filter = temperatures.filter(e => e != '');
    
    let unit1 = document.querySelector('#unit-1').value;
    let unit2 = document.querySelector('#unit-2').value;
    
    if(unit1 != unit2){
        
        let result;

        if(unit1 == 'Celsius') {
            if(unit2 == 'Fahrenheit'){
                result = filter.map(e => {
                    if(!isNaN(e)) {
                        return e + ' °C: ' + ((e * 9/5) + 32).toFixed(2) + ' °F';
                    }
                    return e + ': valor incorreto';
                })
            }

            else {
                result = filter.map(e => {
                    if(!isNaN(e)) {
                        return e + ' °C: ' + (parseFloat(e) + 273.15).toFixed(2) + ' K';
                    }
                    return e + ': valor incorreto';
                })
            }
        }

        if(unit1 == 'Fahrenheit') {
            if(unit2 == 'Celsius'){
                result = filter.map(e => {
                    if(!isNaN(e)) {
                        return e + ' °F: ' + ((e - 32) * 5/9).toFixed(2) + ' °C';
                    }
                    return e + ': valor incorreto';
                })
            }

            else {
                result = filter.map(e => {
                    if(!isNaN(e)) {
                        return e + ' °F: ' + ((e - 32) * 5/9 + 273.15).toFixed(2) + ' K';
                    }
                    return e + ': valor incorreto';
                })
            }
        }

        if(unit1 == 'Kelvin') {
            if(unit2 == 'Fahrenheit'){
                result = filter.map(e => {
                    if(!isNaN(e)){
                        return e + ' K: ' + ((e - 273.15) * 9/5 + 32).toFixed(2) + ' °F';
                    }
                    return e + ': valor inválido';
                })
            }

            else {
                result = filter.map(e => {
                    if(!isNaN(e)) {
                        return e + ' K: ' + (e - 273.15).toFixed(2) + ' °C';
                    }
                    return e + ': valor inválido';
                })
            }

        }

        if(result != '' && result) {
            let valuesC = document.querySelector('#values-c');

            while(valuesC.children[0]) {
                valuesC.children[0].remove();
            }

            result.map(e => {
                let div = document.createElement('div');
                let span = document.createElement('span');
                
                div.className = 'the-convertion';
                span.append(e);
                div.append(span);
                valuesC.append(div);
            })
        }
        
    }
})