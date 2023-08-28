# MVC com Rest 

Trabalho prático da disciplina de Arquitetura de BackEnd - Pós-Graduação em Arquitetura de Soluções da **PUC Minas**



# Inicie o Servidor

Instale as dependencias

```
npm install
```


No terminal, execute o seguinte comando para iniciar o servidor:

```
node app.js
```

# Testes


#### Get 

```
curl --location 'http://localhost:3000/musics'

```


#### Get by ID

```
curl --location 'http://localhost:3000/music/Chill.mp3'
```

#### Post

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

#### Delete by ID

```
curl --location --request DELETE 'http://localhost:3000/music/Chill.mp3'
```