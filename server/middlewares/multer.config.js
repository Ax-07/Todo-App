// Importation du module multer pour la gestion des fichiers entrants dans les requêtes HTTP
const multer = require('multer');

// Importation du module sharp pour la modification des tailles et formats des images
const sharp = require('sharp');

// Importation du module path pour la gestion des chemins de fichiers/dossiers
const path = require('path');

// Importation de la fonction formatDate depuis le fichier utils/formatDate
const { formatDate } = require('../utils/formatDate');

// Définition des types MIME pour déterminer le format des images
const MIME_TYPES = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/webp': 'webp',
};

// Configuration de multer pour stocker les fichiers sur le disque
const storage = multer.diskStorage({
    // Destination des fichiers
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '..', 'static', 'images')); // Enregistrement des fichiers dans le dossier static/images
    },
    // Nom des fichiers
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_'); // Remplacement des espaces par des underscores
        const extension = MIME_TYPES[file.mimetype]; // Récupération de l'extension du fichier
        const date = formatDate(new Date()); // Récupération et formatage de la date actuelle
        callback(null, name + '_' + date + '.' + extension); // Création du nom du fichier
    },
});

// Utilisation de multer avec la configuration de stockage définie
const upload = multer({ storage: multer.memoryStorage() }).any();

// Exportation d'un middleware qui gère l'upload des fichiers et les erreurs potentielles
module.exports = (req, res, next) => {
    console.log("req", req)
    upload(req, res, async function (err) {
        // Gestion des erreurs
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        // Création de l'URL de base pour les fichiers
        const host = req.protocol + '://' + req.get('host');
        // Stockage des informations sur les fichiers dans res.locals
        try {
            console.log('test');
            if (req.files) {
                console.log(req.files)
            res.locals.files = await Promise.all(req.files.map(async file => {
                console.log(file)
                // Création des différentes versions de l'image
                const desktopImagePath = 'desktop-' + file.originalname.split('.').slice(0, -1).join('_') + '.webp'; // Nom du fichier
                await sharp(file.buffer)
                    .resize(1024) // Desktop
                    .webp({ quality: 80 }) // Convertit l'image en WebP avec une qualité de 80%
                    .toFile(path.join(__dirname, '..', 'static', 'images', desktopImagePath)); // Enregistre l'image dans le dossier static/images

                const tabletImagePath = 'tablet-' + file.originalname.split('.').slice(0, -1).join('_') + '.webp';
                await sharp(file.buffer)
                    .resize(768) // Tablette
                    .webp({ quality: 80 }) // Convertit l'image en WebP avec une qualité de 80%
                    .toFile(path.join(__dirname, '..', 'static', 'images', tabletImagePath)); // Enregistre l'image dans le dossier static/images

                const mobileImagePath = 'mobile-' + file.originalname.split('.').slice(0, -1).join('_') + '.webp';
                await sharp(file.buffer)
                    .resize(320) // Mobile
                    .webp({ quality: 80 }) // Convertit l'image en WebP avec une qualité de 80%
                    .toFile(path.join(__dirname, '..', 'static', 'images', mobileImagePath)); // Enregistre l'image dans le

                return {
                    desktop: host + '/images/' + desktopImagePath,
                    tablet: host + '/images/' + tabletImagePath,
                    mobile: host + '/images/' + mobileImagePath,
                }; // Retourne un objet avec les URLs des différentes versions de l'image
            }));
        }
        } catch (error) {
            console.log(error);
        }

        // Affichage des informations sur les fichiers dans la console
        console.log(res.locals.files);
        // Passage au middleware suivant
        next(); // Appel du middleware suivant
    }); 
};