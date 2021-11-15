# MERN-form
Application basique pour montrer d'un côté les interactions entre front-end (React) et back-end (Express) &  de l'autre côté entre le back-end et la base de données (MongoDB) en utilisant le driver MongoDB natif. <br />
https://docs.mongodb.com/drivers/node/current/fundamentals/connection/ <br />
https://www.geeksforgeeks.org/native-mongodb-driver-for-node-js/ <br />

Recueillir les données d'un formulaire et les insérer dans une collection MongoDB <br />
1. Le front-end envoie les données du formulaire avec le module AXIOS (https://axios-http.com/docs/intro);
2. Le back-end effectue une connexion à la base de données au démarrage du serveur;
3. On écrit une requête 'app.post' pour insérer les données envoyées par le front-end dans MongoDB :
4. https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/) ; <br />

L'application React tourne sur le port 3000 ; l'application Express sur le port 5000  <br />
La chaine de connexion à MongoDB est définie dans un fichier d'environnement .env  <br />










Installation locale : <br />

En console : se placer dans le projet 'client' et installer les dépendances ('_npm install_') <br />
           : se placer dans le projet 'serveur'et installer les dépendances ('_npm install_') <br />
           
Back-End : Définir les variables d'environnement (BASE ; URI ; PORT) dans un fichier '_config.env_'  <br />
          URI = chaine de connexion mongodb (exemple : "mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority") <br />

Lancer l'application : <br />

  En console, se placer dans le dossier "serveur"  et lancer la commande '_nodemon app_'  <br />
  Dans le dossier "client" lancer la commande '_npm start_'  <br />
  
L'application tourne sur http://localhost:3000 ! <br />
