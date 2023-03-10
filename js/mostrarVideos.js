import { conectaApi } from "./conexaoApi.js"


const lista = document.querySelector("[data-lista]")

export default function criarCard(titulo, descricao, url, imagem) {
    const li = document.createElement('li')
    li.className = 'videos__item'
    
    li.innerHTML = `
            <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
    `
    return li
}


async function listaVideos() {
    const listaApi = await conectaApi.listaVideos();

    listaApi.forEach(element => lista.appendChild(criarCard(element.titulo, element.descricao, element.url, element.imagem)));
}


listaVideos()