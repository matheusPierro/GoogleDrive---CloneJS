<img alt="imagem" src="https://user-images.githubusercontent.com/81262972/134824516-c902364d-efce-4c80-a813-2a851d604a4c.png" />

<h1 align="center">Google Drive Clone</h1>

Licensed under [MIT](./LICENSE).

<p align="center">Neste projeto trago minha primeira experência com prática em TDD (Desenvolvimento Orientado por Testes) criando o Google Drive e seus sistemas de back-end e front-end com <em>JavaScript</em> puro.</p>

<h3> Preview </h3>

![](./resources/demo.gif)

<h4 align="center"> 
	🚧Em construção...🚧
</h4>

<h3>Tabela de Conteúdos</h3>
<p align="center">
<a href="#tecnologias">Tecnologias</a> •
<a href="#features">Features</a> •
<a href="#pré-requisitos">Pré-Requisitos</a> •
<a href="#instalação">Instalação</a> •
<a href="#como-usar">Como usar</a> •
<a href="#autor">Autor</a>
</p>

### Tecnologias

Projeto feito com 100% de cobertura em JAVASCRIPT e as seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/) *Versão 16.8*
- [Jest](https://jestjs.io/) *Versão 27.2.0*
- [Busboy](https://www.npmjs.com/package/busboy) *Versão 0.3.1*
- [Form-data](https://developer.mozilla.org/en-US/docs/Web/API/FormData) *Versão 4.0*
- [Pino](https://www.npmjs.com/package/pino) *Versão 6.8*
- [Pino-pretty](https://www.npmjs.com/package/pino-pretty) *Versão 5.1*
- [Pretty-bytes](https://www.npmjs.com/package/pretty-bytes) *Versão 5.6*
- [Socket.io](https://socket.io/) *Versão 4.1*
- [Heroku](https://dashboard.heroku.com/)

### Features
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
    - [X] Deve exibir progresso de upload 
    - [X] Deve ter função de upload via drag and drop

### Pré-Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:<br>
[Git](https://git-scm.com); <br>
[Node.js](https://nodejs.org/en/); <br> 
É bom ter um editor para visualizar o código. Indico o [VSCode](https://code.visualstudio.com/); <br>
E por último vou precisar que você esteja familiarizado com o terminal (Windows de preferência para facilitar a execução), para iniciar o projeto.

### Instalação

### Como-usar

## FAQ

- `NODE_OPTIONS` não é um comando reconhecido pelo sistema, o que fazer?
    - Se você estiver no Windows, a forma de criar variáveis de ambiente é diferente. Você deve usar a palavra `set` antes do comando.
    - Ex: `"test": "set NODE_OPTIONS=--experimental-vm-modules && npx jest --runInBand",`
- Certificado SSL é inválido, o que fazer?
    - Esse erro acontece porque gerei um certificado atrelado ao usuário da minha máquina.
    - Você pode clicar em prosseguir no browser e usar o certificado invalido que o projeto vai continuar funcionando, mas se quiser gerar o seu próprio, escrevi o passo a passo em [./certificates](https://github.com/ErickWendel/semana-javascript-expert05/blob/main/certificates)
- Rodei `npm test` mas nada acontece, o que fazer?
    - Verifique a versão do seu Node.js. Estamos usando na versão 16.8. Entre no [site do node.js](https://nodejs.org/) e baixe a versão mais recente.

### Autor
//Em busca de imagem... <br>
Feito por Matheus Pierro em parceiria e suporte de Erick Wendel<br>
Entre em contato nas redes sociais👋!
