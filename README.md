# MERN-form
Application basique pour montrer les interactions entre un front-end (React) et un back-end (Express) & entre le back-end et la base de données (MongoDB) en utilisant le driver MongoDB natif. <br />

L'application react tourne sur le port 3000 ; l'application Express sur le port 5000 ; <br />
La chaine de connexion à MongoDB est définie dans un fichier d'environnement .env ; <br />


Ressources supplémentaires : <br />
https://docs.mongodb.com/drivers/node/current/fundamentals/connection/ <br />
https://www.geeksforgeeks.org/native-mongodb-driver-for-node-js/ <br />
https://www.mongodb.com/mern-stack <br />
https://bootcamp.berkeley.edu/resources/coding/learn-node-js/node-js-understanding-mern-stack/ <br />








Installation locale : <br />

En console : se placer dans le projet 'client' et installer les dépendances ('_npm install_') ;  <br />
           : se placer dans le projet 'serveur'et installer les dépendances ; <br />
           
Back-End : Définir les variables d'environnement (BASE ; URI ; PORT) dans un fichier '_config.env_' ; <br />
          URI = chaine de connexion mongodb (exemple : "mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority") <br />

Lancer l'application : <br />

  En console, se placer dans le dossier "serveur"  et lancer la commande '_nodemon app_' ; <br />
  Dans le dossier "client" lancer la commande '_npm start_' ; <br />
  
L'application tourne sur http://localhost:3000 ! <br />
