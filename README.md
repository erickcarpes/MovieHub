# 🎬 Movie Hub

MovieHub é uma aplicação web interativa que consome a API do The Movie Database (TMDb) para exibir uma ampla variedade de filmes populares. Com uma interface simples e responsiva, permite ao usuário:
- 🔍 Buscar filmes por nome
- 📄 Visualizar mais informações de cada filme
- 🌟 Explorar os filmes mais populares do momento
  
Seja para descobrir um novo filme ou relembrar seus favoritos, o MovieHub é uma solução prática para os amantes do cinema.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build rápida para projetos front-end.
- **Tailwind CSS**: Framework utilitário para estilização rápida e responsiva.
- **TMDb Api**: Api utilizada para puxar informações e apresentá-las na interface.

## 📦 Instalação

### Pré-requisitos

Ter instalado:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/erickcarpes/MovieHub.git

2. **Entre no repositório criado:**
   ```bash
   cd MovieHub   

3. **Instale as dependências:**

   ```bash
   npm install

4. **Crie sua conta na TMDB:**  
   - Entre no link **https://www.themoviedb.org/**  
   - E crie sua conta;  

5. **Pegue o token de acesso a leitura da API:**
   - Entre no link **https://www.themoviedb.org/subscription**  
   - Clique para acessar os detalhes da sua chave de API;  
   - E copie a *API do Token de Acesso de Leitura*;       

6. **Configuração das variáveis de ambiente:**

   - Crie um arquivo **.env** na raiz do seu projeto com a seguinte variável:
   - VITE_TMDB_API_KEY="token de acesso da API"  

  Troque o **token de acesso da API** pelo token que você copiou.  

7. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
