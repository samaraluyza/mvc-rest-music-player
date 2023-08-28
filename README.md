# MVC com Rest 

Trabalho prático da disciplina de Arquitetura de BackEnd - Pós-Graduação em Arquitetura de Soluções da **PUC Minas**

Esse projeto foi desenvolvido utilizando Node.js e Express.js - O desenvolvimento foi realizado utilizando o estilo arquitetural MVC Rest

Nome dos integrantes do grupo:

Leandro Moreira da Silva
Leon Wagner Farias de Souza
Jonas Lima de Amorim
Junia Almeida Matos Boechat
Samara Luiza da Silva

# Inicie o Servidor

Faça download do repositórios

Navegue até a pasta

Instale as dependencias

```
npm install
```


No terminal, execute o seguinte comando para iniciar o servidor:

```
node app.js
```

# Testes

Os testes podem ser realizados por meio do aplicativo PostMan ou por cmd

## Rotas 

#### GET 

GET /musics

Lista de musicas completas

```
curl --location 'http://localhost:3000/musics'

```


#### GET by ID

GET /music/id

```
curl --location 'http://localhost:3000/music/Chill.mp3'
```

#### POST

POST /music

```
curl --location 'http://localhost:3000/music' \
--header 'Content-Type: application/json' \
--data '{
    "id": "IndiePop.mp3",
    "title": "Indie Pop",
    "singer": "MusicFinder",
    "path": "./files/IndiePop.mp3",
    "year": "2022",
    "album": "Royalty Free Music"
}'

```

#### DELETE by ID

DELETE /music/id

```
curl --location --request DELETE 'http://localhost:3000/music/Chill.mp3'
```