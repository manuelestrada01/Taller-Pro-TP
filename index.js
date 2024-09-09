

const fs = require('fs');
const miArray = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]

function superFuncion(miArray, condicion){

    const nuevoArray = miArray.filter(condicion)

    nuevoArray.sort((a, b) => a - b)
    

    if (nuevoArray.length > 0) {
        
        const contenido = nuevoArray.join('\n');
        fs.writeFile('output.txt', contenido, (err) => {
           
            if (err) {
                console.error('Error al escribir en el archivo:', err);
            } else {
                console.log('El contenido se ha escrito en output.txt');
            }
        });

        return nuevoArray;
    } else {
        console.log("error")
    }

    
}

const condicion = num => num > 6

console.log(superFuncion(miArray, condicion))