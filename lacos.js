let custos = [800,1000,300,500];
let contador = 0 ;
let somatorio = 0 ;
while (contador<custos.length){
somatorio=somatorio+custos[contador]
    contador=contador+1
}
console.log ("O seu custo mensal é "  +  somatorio);




let salario = [2500,3600];
contador = 0 ;
let SomatorioSalario = 0 ;
while (contador<salario.length) {
    SomatorioSalario=SomatorioSalario+salario[contador]
    contador=contador+1
}
console.log ("O seu salario mensal é "  + SomatorioSalario);



let saldo = SomatorioSalario-somatorio
console.log ("Seu saldo mensal é  "  + saldo )