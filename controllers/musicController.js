const express = require("express");
const router = express.Router();
const Music = require("../models/music");

// Simulando um banco de dados
const motivationPiano = new Music(
  "MotivationPiano.mp3",
  "Motivation Piano",
  "AudioGarden",
  "./files/MotivationPiano.mp3",
  "2023",
  "Royalty Free Music"
);

const chill = new Music(
    "Chill.mp3",
    "Chill",
    "Elijah Studio",
    "./files/Chill.mp3",
    "2023",
    "Royalty Free Music"
  );


const makeItLoud= new Music(
    "MakeItLoud.mp3",
    "Make It Loud",
    "Motion Array Originals: The Creators",
    "./files/MakeItLoud.mp3",
    "2022",
    "Royalty Free Music"
  );

  const corporateHarmonics= new Music(
    "CorporateHarmonics.mp3",
    "Corporate Harmonics",
    "Motion Array Originals: The Creators",
    "./files/CorporateHarmonics.mp3",
    "2022",
    "Royalty Free Music"
  );

const musics = [motivationPiano, chill, corporateHarmonics, makeItLoud];



// musicas
router.get("/", (req, res) => {
  res.render("musicList", { musics});
});

// Todas as musicas
router.get("/musics", (req, res) => {
    res.status(200).json(musics);
});

//Musica por id
router.get("/music/:id", (req, res) => {
    var params = findByKey('id', req.params.id );
    var index = musics.findIndex(params);

    if(index<0){
        res.status(404).json("Musica não encontrada!");
    }
    else{
        res.status(200).json(musics[index]);
    }
    

  });


// Arquivo da musica por id 

router.get("/files/:id", (req, res) => {
    var params = findByKey('id', req.params.id );
    var index = musics.findIndex(params);
    var musicPath = musics[index].path;
    res.download(musicPath, req.params.id);
  });
  
// Função para retornar index da musica que contem id
function findByKey(key, value) {
    return (item, i) => item[key] === value
}

//  pagar por id
router.delete("/music/:id", (req, res) => {
    var params = findByKey('id', req.params.id );
    var index = musics.findIndex(params);

    var musicList = musics.splice(index, 1);

    if(index<0){
        res.status(404).json("Musica não encontrada!");
    }
    else{
        res.status(200).json("Musica apagada!");
    }

    

  });

// inclui nova musica
router.post("/music", (req, res) => {

    var musicPost = req.body;
    musics.push(musicPost);
    res.status(200).json(musics);

  });

module.exports = router;
