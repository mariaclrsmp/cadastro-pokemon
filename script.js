let card = document.getElementById('card')
let cardbg = document.getElementById('cardbg')
let mensagem = document.getElementById('mensagem')
let select = document.querySelector('select#tipo')

let tipos = ['Água', 'Fogo', 'Elétrico', 'Grama', 'Fada', 'Fantasma', 'Dragão', 'Psíquico']
for (let i = 0; i < tipos.length; i++) {
    tipos[i]
    select.innerHTML += `<option value="${tipos[i]}">${tipos[i]}</option>`
}


function exibirErro(mensagemdeErro) {
    mensagem.innerHTML = mensagemdeErro
    mensagem.style.color = 'red'
    mensagem.style.textAlign = 'center'


}

function exibirCard(pokemon) {

    // seleção dos elementos que aparecerão no card
    let nometxt = document.getElementById('nometxt')
    let numerotxt = document.getElementById('numerotxt')
    let pesotxt = document.getElementById('pesotxt')
    let habilidadestxt = document.getElementById('habilidadestxt')
    let tipotxt = document.getElementById('tipotxt')
    let imagemtxt = document.getElementById('imgtxt')


    // inserção dos dados coletados do formulário no card
    nometxt.innerHTML = pokemon.nome
    numerotxt.innerHTML = pokemon.numero
    pesotxt.innerHTML = `${pokemon.peso} kgs`
    habilidadestxt.innerHTML = pokemon.habilidades
    tipotxt.innerHTML = pokemon.tipo
    imagemtxt.src = pokemon.imagem
     if (pokemon.imagem === '') {
        imagemtxt.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/902px-Pokebola-pokeball-png-0.png'
     } else {
        imagemtxt.src = pokemon.imagem
     }

    card.style.display = 'flex'

    //mudando a cor do fundo do card de acordo com o tipo
    switch (pokemon.tipo) {
        case('Fogo'):
            cardbg.style.background = '#FF9D55'
            break;

        case('Água'):
            cardbg.style.background = '#8BC5CD'
            break;

        case ('Elétrico'):
            cardbg.style.background = '#F4D23C'
            break;

        case ('Grama'):
            cardbg.style.background = '#63BC5A'
            break;

        case ('Fada'):
            cardbg.style.background = '#EC8FE6'
            break;

        case ('Fantasma'):
            cardbg.style.background = '#5269AD'
            break;

        case ('Dragão'):
            cardbg.style.background = '#0B6DC3'
            break;


        case ('Psíquico'):
            cardbg.style.background = '#FA7179'
            break;

        default:
            cardbg.style.background = '#F8F8F8'
            break;
    }
}


function enviar(event) {
    event.preventDefault()  //prevenir que os dados se apaguem ao enviar
    mensagem.innerHTML = '' // limpándo a mensagem de erro

    //seleção dos elementos do formulário
    let nome = document.getElementById('nome').value
    let numero = document.getElementById('numero').value
    let peso = document.getElementById('peso').value
    let habilidades = document.getElementById('habilidades').value 
    let tipo = document.getElementById('tipo').value
    let imagem = document.getElementById('img').value

    //definindo o mínimo de habilidades
    let MinHabilidades = habilidades.split(',')
    if (MinHabilidades.length < 4) {
        return exibirErro('Mínimo de 4 habilidades!')
    }

    //criando uma nova classe para um novo pokemon(usuário)
    class Pokemon {
        constructor(nome, numero, peso, habilidades, tipo, imagem) {
            this.nome = nome
            this.numero = numero
            this.peso = peso
            this.habilidades = habilidades
            this.tipo = tipo
            this.imagem = imagem

        }
    }

    try {
        // validando as informações
        if (nome.length === 0 || numero.length === 0 || habilidades.length === 0 || peso.length === 0) {
            exibirErro('Preencha <b>todas</b> as informações!')

        } else {
            let pokemonUsuario = new Pokemon(nome, numero, peso, habilidades, tipo, imagem)
            exibirCard(pokemonUsuario)
        }

    } catch (error) {
        exibirErro(error.message)
    }
}



