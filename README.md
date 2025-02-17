# 📌 API do paivacritic
API que lista, cria e deleta sugestões.


## 🚀 Tecnologias
- Node.js / Express / PostreSQL
- Sequelize para ORM


## 📡 URL Base
``` http://localhost:3000 ```


## 🔍 Endpoints
### 📝 Sugestao
➕ Criar usuário
``` POST/sugestao ```
Requisição:
```json
{
"nome": "lucas",
"recomendacao": "joga megaman x9"
}
```

Resposta: ``` 201 Created ```
```json
{
  "id": 15,
  "nome": "lucas",
  "recomendacao": "joga megaman x9",
  "updatedAt": "2025-02-17T02:51:38.121Z",
  "createdAt": "2025-02-17T02:51:38.121Z"
}
```


### 📄 Listar Sugestões
``` GET/sugestao ```
Resposta: ``` 200 OK ```
```json
[
  {
    "id": 16,
    "nome": "lucas",
    "recomendacao": "joga megaman x9",
    "createdAt": "2025-02-17T02:58:50.315Z",
    "updatedAt": "2025-02-17T02:58:50.315Z"
  },
  {
    "id": 17,
    "nome": "daniel",
    "recomendacao": "joga marvel rivals",
    "createdAt": "2025-02-17T02:59:02.764Z",
    "updatedAt": "2025-02-17T02:59:02.764Z"
  }
]
```
### Deletar
/// No próximo commit eu adiciono


## 🛠 Erros Comuns

```mathematica
400 - "Nome e recomendação são obrigatórias"
404 - "Sugestão não encontrada"
500 - "Erro ao criar sugestão/ Erro ao deletar sugestão"
```

## 📦 Instalação
```bash
git clone https://github.com/lucasdpsa01/back---paivacritic.git
cd back---paivacritic
npm install
npm run dev
```

## 🤝 Contribuição

Fork → Branch → Commit → PR

## 📌 Licença

```css

Esse modelo mantém a **clareza** e **objetividade** de uma boa documentação, mas sem poluir com detalhes excessivos. Dá para entender rapidamente como usar a API. 🚀

```
