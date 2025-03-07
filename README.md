
---

# Backend-TS2

Este é um projeto backend utilizando TypeScript, Express, Sequelize e Supabase, com funcionalidades básicas de autenticação e gerenciamento de usuários. Ele fornece uma API para gerenciar usuários em um banco de dados Supabase, com rotas para criação, leitura, atualização e exclusão de usuários.

## Tecnologias Usadas

- **Node.js** - Ambiente de execução JavaScript no backend.
- **TypeScript** - Superset do JavaScript para adicionar tipagem estática.
- **Express** - Framework para criar APIs em Node.js.
- **Sequelize** - ORM para interagir com o banco de dados.
- **Supabase** - Banco de dados em tempo real e autêntico (similar ao Firebase).
- **JWT** - Autenticação baseada em JSON Web Tokens para segurança.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Supabase account

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/SeuUsuario/backend-ts2.git
```

2. Navegue até o diretório do projeto:

```bash
cd backend-ts2
```

3. Instale as dependências do projeto:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```env
SUPABASE_URL=<Sua URL do Supabase>
SUPABASE_KEY=<Sua chave da API do Supabase>
JWT_SECRET=<Sua chave secreta para JWT>
```

## Rodando o Projeto

1. Para rodar o projeto em modo de desenvolvimento, use o comando:

```bash
npm run dev
# ou
yarn dev
```

O servidor será iniciado na URL `http://localhost:3000`.

## Rotas da API

### **POST /users** - Criar um novo usuário

Crie um novo usuário com as informações `name`, `email`, `age`, `gender`, e `password`.

**Exemplo de corpo da requisição:**

```json
{
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "age": 25,
  "gender": "Masculino",
  "password": "senha123"
}
```

### **GET /users** - Obter todos os usuários

Recupere todos os usuários cadastrados no banco de dados.

### **PUT /users/:id** - Atualizar um usuário

Atualize as informações de um usuário específico.

**Exemplo de corpo da requisição:**

```json
{
  "name": "João Silva Atualizado",
  "email": "joao.novo@exemplo.com",
  "age": 26,
  "gender": "Masculino"
}
```

### **DELETE /users/:id** - Deletar um usuário

Deleta o usuário especificado pelo `id`.

## Autenticação

A API usa JWT para autenticação. Para proteger rotas privadas, o token JWT deve ser enviado no cabeçalho `Authorization` com o formato:

```
Bearer <seu-token-jwt>
```

## Scripts

- **dev**: Inicia o servidor em modo de desenvolvimento.
  
```bash
npm run dev
```

- **build**: Compila o código TypeScript para JavaScript.

```bash
npm run build
```

- **start**: Inicia o servidor com o código compilado.

```bash
npm start
```

## Contribuindo

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b feature-nome-da-feature`).
3. Realize suas alterações.
4. Faça o commit das suas alterações (`git commit -m 'feat: adicione nova funcionalidade'`).
5. Faça o push para a branch (`git push origin feature-nome-da-feature`).
6. Crie um novo pull request.

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Esse README cobre a estrutura básica do seu projeto, as tecnologias usadas, como instalar, rodar e contribuir. Você pode ajustar os detalhes conforme necessário, dependendo de como o projeto evoluir.
