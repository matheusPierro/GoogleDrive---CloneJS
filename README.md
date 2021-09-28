<img alt="imagem" src="https://user-images.githubusercontent.com/81262972/134824516-c902364d-efce-4c80-a813-2a851d604a4c.png" />

<h1 align="center">Google Drive Clone</h1>

<p align="center">Neste projeto trago minha *Primeira* experência com prática em TDD (Desenvolvimento Orientado por Testes) criando o Google Drive e seus sistemas de back-end e front-end com *JavaScript* puro.</p>

<h3> Preview </h3>

![](./resources/demo.gif)

<h4 align="center"> 
	🚧Em construção...🚧
</h4>

<h3>Tabela de Conteúdos</h3>
<p align="center">
<a href="#tecnologias">Tecnologias</a> •
<a href="#features">Features</a> •
<a href="#pre-requisitos">Pré Requisitos</a> •
 <a href="#instalacao">Instalacao</a> •
 <a href="#como-usar">Como usar</a>
</p>

### 🛠 Tecnologias

Projeto feito com 100% de cobertura em JAVASCRIPT e as seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/) *Versão 16.8*
- [Jest](https://jestjs.io/) *Versão 27.2.0*
- [Busboy](https://www.npmjs.com/package/busboy) *Versão 0.3.1*
- [Form-data](https://developer.mozilla.org/en-US/docs/Web/API/FormData) *Versão 4.0*
- [Pino](https://www.npmjs.com/package/pino) *Versão 6.8*
- [Pino-pretty](https://www.npmjs.com/package/pino-pretty) *Versão 5.1*
- [Pretty-bytes](https://www.npmjs.com/package/pretty-bytes) *Versão 5.6*
- [Socket.io](https://socket.io/) *Versão 4.1*



## Checklist Features
- Web API
    - [X] Deve listar arquivos baixados
    - [X] Deve receber stream de arquivos e salvar em disco 
    - [X] Deve notificar sobre progresso de armazenamento de arquivos em disco 
    - [X] Deve permitir upload de arquivos em formato image, video ou audio
    - [X] Deve atingir 100% de cobertura de código em testes

- Web App 
    - [X] Deve listar arquivos baixados
    - [X] Deve permitir fazer upload de arquivos de qualquer tamanho
    - [X] Deve ter função de upload via botão
    - [] Deve exibir progresso de upload 
    - [] Deve ter função de upload via drag and drop
