# Todo List Application - Frontend et Backend

Ce projet est une application complète de gestion de tâches (Todo List) avec une partie frontend construite avec React et Vite, et une partie backend construite avec Node.js et Express.js. L'application frontend interagit avec l'API backend pour créer, lire, mettre à jour et supprimer des tâches.

## Récupération du projet

Vous pouvez cloner le projet à partir de son [repository GitHub](https://github.com/Ax-07/Todo-App-fill-stack.git).


## Installation

Assurez-vous d'avoir Node.js et npm installés sur votre machine.
1. Clonez le repository : `git clone https://github.com/Ax-07/Todo-App-fill-stack.git`

### Frontend

2. Accédez au dossier du projet : `cd client`
3. Installez les dépendances : `npm install`
4. Lancez l'application : `npm run dev`

### Backend

2. Accédez au dossier du projet : `cd server`
3. Installez les dépendances : `npm install`
4. Lancer le server : `npm start`

## Technologies et bibliothèques utilisées

### Frontend

Ce projet a été développé en utilisant les technologies et bibliothèques suivantes :

- **React.js** : Bibliothèque JavaScript pour construire l'interface utilisateur.
- **Vite** : Outil de build moderne et rapide pour les projets frontend.

### Backend

Ce projet a été développé en utilisant les technologies et bibliothèques suivantes :

- **Node.js** : Environnement d'exécution JavaScript côté serveur.
- **Express.js** : Framework pour construire l'API web.
- **Nodemon** : Utilitaire qui redémarre automatiquement votre serveur lorsque des modifications de fichiers sont détectées.
- **Multer** : Middleware pour gérer le `multipart/form-data`, utilisé pour le téléchargement de fichiers.
- **Sharp** : Module pour convertir les images.
- **Cookie-parser** : Middleware pour analyser les cookies.
- **Nodemailer** : Module pour envoyer des emails.
- **Dotenv** : Utilisé pour charger les variables d'environnement à partir d'un fichier `.env`.
- **CORS** : Middleware pour activer les CORS (Cross-Origin Resource Sharing).
- **Sequelize** : ORM pour interagir avec la base de données.
- **SQLite** : Système de gestion de base de données relationnelle utilisé pour stocker les données de l'application.
- **Swagger** : Utilisé pour la documentation de l'API.

## Fonctionnalités

L'application permet de :

- **Créer une nouvelle tâche :** Les utilisateurs peuvent ajouter une nouvelle tâche en remplissant un formulaire. Ils peuvent entrer un titre, une description, ajouter des images et définir le statut de la tâche.

- **Voir toutes les tâches :** Les utilisateurs peuvent voir une liste de toutes les tâches existantes.

- **Mettre à jour une tâche existante :** Les utilisateurs peuvent mettre à jour le titre, la description, les images et le statut d'une tâche existante.

- **Supprimer une tâche :** Les utilisateurs peuvent supprimer une tâche existante.

- **Ajouter des images à une tâche :** Lors de la création ou de la mise à jour d'une tâche, les utilisateurs peuvent ajouter une ou plusieurs images. Ils peuvent également prévisualiser les images avant de les ajouter et supprimer des images de la liste.

- **Gérer la taille des images :** L'application vérifie la taille des images ajoutées pour s'assurer qu'elles ne dépassent pas 4 Mo. Si une image est trop grande, un message d'erreur est affiché.

## Routes de l'application

### Frontend

L'application fournit les routes suivantes :

- **Accueil** : `http://localhost:5173/`
- **Détails d'une tâche** : `http://localhost:5173/todo/{id}`

### Backend

L'API fournit les routes suivantes pour gérer les tâches :

- **Création d'une tâche** : 
  - Méthode : `POST`
  - URL : `http://localhost:8050/api/todo`
  - Body : 
    ```json
    { 
      "title" : "titre", 
      "description" : "texte de description",
      "images" : [{"images"}],
      "status" : true ou false
    }
    ```

- **Récupération de toutes les tâches** :
  - Méthode : `GET`
  - URL : `http://localhost:8050/api/todo`

- **Récupération d'une tâche spécifique** :
  - Méthode : `GET`
  - URL : `http://localhost:8050/api/todo/{id}`

- **Mise à jour d'une tâche** :
  - Méthode : `PUT`
  - URL : `http://localhost:8050/api/todo/{id}`
  - Body : 
    ```json
    { 
      "title" : "titre", 
      "description" : "texte de description",
      "images" : [{"images"}],
      "status" : true ou false
    }
    ```

- **Suppression d'une tâche** :
  - Méthode : `DELETE`
  - URL : `http://localhost:8050/api/todo/{id}`

## Documentation API

La documentation de l'API est disponible via Swagger. Vous pouvez y accéder en lançant le serveur et en naviguant vers [http://localhost:8050/api-docs](http://localhost:8050/api-docs).