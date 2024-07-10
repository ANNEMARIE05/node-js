const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`mon serveur marche corrextement sur le port ${PORT}`);
})


app.get('/server', (req,res)=>{
    res.send("J'apprend a tracer des routes static avec node et express")
})

app.get('/nan/:id', (req,res)=>{
    let nom = req.params.id
    res.send(`Le nom d'un etudiant de nan est ${nom}`)
})