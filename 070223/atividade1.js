const readline = require('readline');

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

teclado.question('Digite o valor do produto: ',(produto)=>{
    teclado.question('Digite a quantidade: ',(qtd)=>{
        teclado.question('Digite o valor do desconto: ',(desconto)=>{


        let resultado = (parseInt(produto) * parseInt(qtd)) - parseInt (desconto);
        console.log("A o valor final é: R$ %s",resultado);
        teclado.close();
    })
})

});
