let amigos = ['Beica', 'Piva', 'Nunes', 'Cauã', 'Henrico']
let gastos = [25,75,30,55,45]
let total = 0
let media
let individual

for (let i = 0; i < gastos.length; i++) {
    total += gastos[i]
}
media = total/gastos.length

for (let i = 0; i < gastos.length; i++) {
    const element = gastos[i];
    if (gastos[i] > media) {
        console.log (`${amigos[i]} gastou R$${gastos[i] - media} a mais que a media`)
        
    } else console.log (`${amigos[i]} gastou R$${media - gastos[i]} a menos que a media `)
    
}

console.log('-------------------------------')
console.log(`Total gasto:${total}`)
console.log(`Media dos gastos:${media}`)