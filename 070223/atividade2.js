const readline = require('readline');

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question('Digite o valor da Base em cm: ',(base)=>{
    teclado.question('Digite o valor da Altura em cm: ',(altura)=>{
        let resultado = parseInt (base) * parseInt (altura);

        if( base==altura){
            console.log ("A forma geométrica é um quadrado de área " + resultado + " cm²");
        }
            else
        console.log ("A forma geométrica é um retângulo de área " + resultado + " cm²");
        teclado.close();

    })
})