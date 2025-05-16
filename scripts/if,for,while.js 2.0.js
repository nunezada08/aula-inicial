let numero1 = 10
let numero2 = 5
let soma = '+'
let sub = '-'
let mult = 'x'
let div = '/'

switch (div) {
    case '+':
    console.log(`${numero1} + ${numero2}`)
let resultado = numero1 + numero2
    console.log(`${resultado}`)
        break;

 case '-':
    console.log(`${numero1} - ${numero2}`)
resultado1 = numero1 - numero2
    console.log(`${resultado1}`)
        break;


 case 'x':
    console.log(`${numero1} x ${numero2}`)
resultado3 = numero1 * numero2
    console.log(`${resultado3}`)
        break;

 case '/':
    console.log(`${numero1} / ${numero2}`)
resultado4 = numero1 / numero2
    console.log(`${resultado4}`)
        break;

default:
    console.log("operação não existente")
}
        
console.log("-------------------------------------------")

// atvidade 2

let number = -2

if (number > 0)
    console.log(`O numero ${number} é positivo`)

else if (number < 0)
    console.log(`O numero ${number} é negativo`)
else
    console.log(`O numero é 0`)

console.log("-------------------------------------------")

//aividade 3

idade = 15

if (idade >= 16)
    console.log(`voce tem ${idade} anos e pode votar`)
else console.log(`voce tem ${idade} anos e nao pode votar ainda`)

console.log("-------------------------------------------")

//atividade 4

let a = 6
let b = 8

if (a > 10 && b > 10)
    console.log(`O numero ${a} e o numero ${b} sao maiores que 10`)

else if (a<5 || b<5)
    console.log(`algum dos dois numeros sao menores que 5`)
else console.log("um ou dois numeros sao menores que 10 e um ou os dois é mais que 5")

console.log("-------------------------------------------")

//atividade 5


for (let i = 1; i < 11; i++) {
    const element = [i];
    console.log(i)
}

console.log("-------------------------------------------")

//atividade 6

let i
let somadas = 0

for ( i = 0; i <= 5; i++) {
    somadas+=i
}
console.log(`resultado final das somas é: ${somadas}`)

console.log("-------------------------------------------")

//atividade 7

for (let i = 0; i <= 20; i++) {
    const element = [i];
    if (i % 2 === 0)
        console.log(`o numero ${i} é par`)
}

console.log("-------------------------------------------")

//atividade 8 

oloco = 0
let numero = 8
for (let i = 1; i <= 10; i++) {
    const element =[i];
    oloco = numero * i

    console.log(`${numero} x ${i} = ${oloco}`)
}

console.log("-------------------------------------------")

//atividade 9


for (let i = 20; i >=0; i--) {
    const element = [i];
    if(i % 2==0) console.log(`${i}`)
}