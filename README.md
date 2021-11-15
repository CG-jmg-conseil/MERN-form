# MERN-form
Application basique pour montrer les interactions entre un front-end (React) et un back-end (Express) & entre le back-end et la base de données (MongoDB) en utilisant le driver MongoDB natif.

L'application react tourne sur le port 3000 ; l'application Express sur le port 5000 ;
La chaine de connexion à MongoDB est définie dans un fichier d'environnement .env ;


Ressources supplémentaires :
https://docs.mongodb.com/drivers/node/current/fundamentals/connection/
https://www.geeksforgeeks.org/native-mongodb-driver-for-node-js/
https://www.mongodb.com/mern-stack
https://bootcamp.berkeley.edu/resources/coding/learn-node-js/node-js-understanding-mern-stack/








Installation locale :

En console : se placer dans le projet 'client' et installer les dépendances ('_npm install_') ; 
           : se placer dans le projet 'serveur'et installer les dépendances ;
           
Back-End : Définir les variables d'environnement (BASE ; URI ; PORT) dans un fichier '_config.env_' ;
          URI = chaine de connexion mongodb (exemple : "mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority")

Lancer l'application :

  En console, se placer dans le dossier "serveur"  et lancer la commande '_nodemon app_' ;
  Dans le dossier "client" lancer la commande '_npm start_' ;
  
L'application tourne sur http://localhost:3000 !
