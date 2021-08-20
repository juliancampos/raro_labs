# Raro Labs - Teste Node
## Api para paginação

## Estrutura da api

- config - configuração de váriáveis que serão utilizadas no serviço
- lib - pasta com arquivos a serem utilizados na api
    - controller - entrada das requisições
    - midleware - validação de entrada da api
    - routes - registro de rotas a serem utilizadas
    - server - configuração do server da aplicação
    - services - serviços a serem utilizados pelo controller
- index.js - arquivo que inicia a aplicação

## Exemplo de requisição
- /pages?page=5&quantityPages=10

## Bibliotecas utilizadas
- [node] - versão 14
- [express] - versão 4.17.1"
- [nodemon] - uso para desenvolvimento - versão 2.0.12

## Installation
Comando para instalação das dependências e para iniciar: 

```sh
npm i
npm start
```
