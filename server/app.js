const express           = require('express'),
      app               = express(),
      router            = express.Router(),
      cors              = require('cors'),
      port              = process.env.PORT || 5000,
      { MongoClient }   = require("mongodb"),
      mongo_base        = process.env.BASE,
      mongo_param       = {useNewUrlParser : true, useUnifiedTopology : true},
      mongo_uri         = process.env.URI;

require("dotenv").config({ path: "./config.env" });
app.listen(5000);

const client = new MongoClient(mongo_uri, mongo_param);

async function serveur() {

  try {
    await client.connect();
    const db = client.db(mongo_base);
    const demo = db.collection('demo_mern');
    console.log(`Connexion réussie`);
  
    app.use(cors());
    app.use(express.json());
    app.use(require("./routes/route"));

    app.post('/mern/form', async(req, res) => {
      let form = {
        date: new Date(),
        nom: req.body.nom,
        message: req.body.message
      };
      const result = await demo.insertOne(form);
      console.log(`Document inséré avec l'_id: ${result.insertedId}`);
      res.json(result);
    });
    }  catch (err) {
      console.error(`Erreur: ${err}`);
    } 
};

serveur().catch(console.dir);

module.exports = serveur;

