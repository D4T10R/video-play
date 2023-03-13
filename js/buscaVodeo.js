import { conectaApi } from "./conexaoApi.js";
import criarCard from "./mostrarVideos.js";


async function buscaVideo(event) {
    event.preventDefault()

    const dadosPesquisa = document.querySelector('[data-pesquisa]').value 
    const pesquisa = await conectaApi.buscarVideo(dadosPesquisa)

    const lista = document.querySelector('[data-lista]')

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    pesquisa.forEach(element => {
        lista.appendChild(criarCard(element.titulo, element.descricao, element.url, element.imagem))
    });

    console.log(pesquisa)
}

const botaoPesquisa = document.querySelector('[data-botaoPesquisa]')

botaoPesquisa.addEventListener('click', event => buscaVideo(event))