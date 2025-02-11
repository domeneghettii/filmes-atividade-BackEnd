# Filmes Atividade Backend

Este repositório contém o backend de uma aplicação para gerenciamento de filmes, desenvolvido com Node.js e Express. A estrutura do projeto está organizada em diferentes camadas para facilitar o desenvolvimento, manutenção e escalabilidade.

## Estrutura de Pastas e Arquivos

- **prints/**: Contém capturas de tela úteis para o projeto, como diagramas e exemplos de requisições:
  - `delete.png`: Exemplo de requisição DELETE.
  - `Diagrama de classe UML.png`: Diagrama UML das classes utilizadas no projeto.
  - `get procurar por id.png`: Exemplo de requisição GET para buscar um filme por ID.
  - `get1.png`: Outra captura de exemplo de requisição GET.
  - `GET3 BUSCAR POR ID ERROR.png`: Exemplo de erro ao buscar um filme por ID.
  - `post.png`: Exemplo de requisição POST para adicionar um novo filme.

- **src/**: Contém o código-fonte da aplicação.
  - **controllers/**:
    - `filmesController.js`: Controlador responsável por gerenciar a lógica das operações de filmes.
  - **models/**:
    - `filmes.js`: Modelo que representa a estrutura de um filme.
    - `filmesList.js`: Lista inicial de filmes usada para simulações.
  - **routes/**:
    - `filmesRoutes.js`: Arquivo responsável pelas rotas relacionadas aos filmes.

- `.env`: Arquivo de configuração de variáveis de ambiente.
- `.gitignore`: Arquivo que especifica os arquivos e pastas a serem ignorados pelo Git.
- `package.json` e `package-lock.json`: Arquivos de configuração do Node.js com as dependências do projeto.
- `README.md`: Este arquivo de documentação.
- `server.js`: Arquivo principal que inicia o servidor.

## Funcionalidades

1. **Listar Filmes**: Retorna uma lista de todos os filmes.
2. **Buscar Filme por ID**: Retorna um filme específico pelo seu ID.
3. **Adicionar Filme**: Permite adicionar um novo filme à lista.
4. **Atualizar Filme**: Permite atualizar as informações de um filme existente.
5. **Deletar Filme**: Remove um filme da lista.

## Tecnologias Utilizadas

- Node.js: Ambiente de execução JavaScript.
- Express: Framework para construir o servidor e gerenciar rotas.
- dotenv: Gerenciamento de variáveis de ambiente.

## Como Executar o Projeto

1. Clone o repositório:
```bash
git clone <url-do-repositorio>

- Instale as dependências:
npm install

3. Configure o arquivo .env com as variáveis necessárias.

Inicie o servidor

Autor
Projeto desenvolvido como atividade prática de backend.
