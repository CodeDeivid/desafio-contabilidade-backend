# API - Teste Técnico

## Descrição

API desenvolvida em Node.js para gerenciamento de produtos e clientes, utilizando banco de dados SQLite.

## Como Executar

### Pré-requisitos
- Node.js
- npm

### Instalação e Execução
```bash
# Clone o repositório
git clone https://github.com/CodeDeivid/desafio-contabilidade-backend.git

# Entre no diretório
cd desafio-contabilidade-backend

# Instale as dependências
npm install

# Execute a aplicação
npm run start
```

A API estará disponível em: `http://localhost:3000`
O banco SQLite será criado automaticamente na primeira execução da aplicação

## Documentação da API

### Produtos

**POST /produtos** - Cadastrar produto
```json
{
  "nome": "Notebook Dell",
  "preco": 2599.99,
  "estoque": 10
}
```

**GET /produtos** - Listar produtos

**GET /produtos/:id** - Buscar produto por ID

### Clientes

**POST /clientes** - Cadastrar cliente
```json
{
  "nome": "João Silva",
  "email": "joao.silva@email.com"
}
```

**GET /clientes** - Listar clientes

**GET /clientes/:id** - Buscar cliente por ID

## Validações

- Produto: nome e preço são obrigatórios
- Cliente: nome e email são obrigatórios
- Email deve ser único

## Testando a API

### Collection do Postman

```json
{
  "info": {
    "name": "API - Teste Técnico",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:3000"
    }
  ],
  "item": [
    {
      "name": "POST Cadastrar Produto",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "body": {
          "mode": "raw",
          "raw": "{\"nome\": \"Notebook Dell\", \"preco\": 2599.99, \"estoque\": 10}"
        },
        "url": "{{baseUrl}}/produtos"
      }
    },
    {
      "name": "GET Listar Produtos",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/produtos"
      }
    },
    {
      "name": "GET Produto por ID",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/produtos/1"
      }
    },
    {
      "name": "POST Cadastrar Cliente",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "body": {
          "mode": "raw",
          "raw": "{\"nome\": \"João Silva\", \"email\": \"joao.silva@email.com\"}"
        },
        "url": "{{baseUrl}}/clientes"
      }
    },
    {
      "name": "GET Listar Clientes",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/clientes"
      }
    },
    {
      "name": "GET Cliente por ID",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/clientes/1"
      }
    }
  ]
}
```

### Como importar no Postman:
1. Abra o Postman
2. Clique em "Import"
3. Cole o JSON acima
4. Clique em "Import"

## Estrutura do Banco

### Tabela produtos
- id (INTEGER, chave primária)
- nome (VARCHAR, obrigatório)
- preco (DECIMAL, obrigatório)
- estoque (INTEGER)
- dataCreacao (DATETIME)

### Tabela clientes
- id (INTEGER, chave primária)
- nome (VARCHAR, obrigatório)
- email (VARCHAR, obrigatório, único)
- dataCreacao (DATETIME)

## Checklist do Teste Técnico

- [x] API em Node.js usando biblioteca HTTP Nest.js
- [x] Banco SQLite com duas tabelas
- [x] Tabela produtos (id, nome, preço, estoque, data criação)
- [x] Tabela clientes (id, nome, email, data criação)
- [x] POST /produtos - cadastrar produto
- [x] GET /produtos - listar produtos
- [x] GET /produtos/:id - buscar produto por ID
- [x] POST /clientes - cadastrar cliente
- [x] GET /clientes - listar clientes
- [x] GET /clientes/:id - buscar cliente por ID
- [x] Validação: produto precisa de nome e preço
- [x] Validação: cliente precisa de nome e email
- [x] Validação: email deve ser único
- [x] Instruções de execução
- [x] Collection do Postman