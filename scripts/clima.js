
let dia = ['segunda','terca','quarta','quinta','sexta','sabado','domingo']
let temperaturas = [28,31,27,29,30,32,33]
let total = 0
let max = 0
let min = 0
let oloco = 0
let didi = 0

for (let i = 0; i < temperaturas.length; i++) {
    total += temperaturas[i]
}
let media = total/temperaturas.length

for (let i = 0; i < temperaturas.length; i++) {
    
    if (temperaturas[i] > max){
        max = temperaturas[i]
        oloco = dia[i]
    }
}

for (let i = 0; i < temperaturas.length; i++) {
    
    if (temperaturas[i] < temperaturas[0]) {
        min = temperaturas[i]
         didi = dia[i]
    }
}

console.log(`A media de temperatura da semana foi ${media}°`)
console.log(`${oloco} teve a maior temperatura da semana de ${max}°`)
console.log(`${didi} teve a menor temperatura da semana de ${min}°`)