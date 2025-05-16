let nomes = ['tiktok','instagram','whatsapp','snapchat','spotify','netflix','youtube']
let dowloads = [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7]
let avaliacoes = [4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1]
let categoria = ['social','social','comunicaçao','social','musica','streaming','video']
let maxDowloads = 0

for (let i = 0; i < dowloads.length; i++) {
    
    if (dowloads[i] > maxDowloads){
        maxDowloads = dowloads
        tipo = categoria[i]
        app = nomes[i]
    }
}





























console.table(nomes)
console.table(dowloads)
console.table(avaliacoes)

console.log('------------------------------')

console.log(`o aplicativo com mais dowloads é o ${app} da categoria ${tipo}`)