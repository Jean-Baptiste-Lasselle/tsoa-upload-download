# Simple Express.js App

Simple TypeScript-based Express.js application template

## Reloaded build n Run

You can try that on [Katacoda](https://www.katacoda.com/courses/nodejs/playground)

```bash
export SSH_URI_REPO_STARTER_TSOA=https://github.com/Jean-Baptiste-Lasselle/tsoa-upload-download

mkdir monapi/
git clone $SSH_URI_REPO_STARTER_TSOA monapi/
cd monapi/

# J'ai installé les deux, je retirerai l'installation
# globale après avoir vérifié que cela ne
# provoque pas d'erreur(s)
#

npm install -g tsoa
npm install --save-dev tsoa
npm install --save-dev @types/node
npm install
tsoa routes
tsoa swagger
npm run build
npm run server
```
## Install
To install the application, do the following after cloning the repository:
```bash
$ npm install
```

## Build and Run
To build the application:
```bash
$ npm run build
```

And to run the server:
```bash
$ npm run server
```

## Codestyle
To check the codestyle (lint), do the following:
```bash
$ npm run lint
```


## The Multer Client

is used so tha twe can tet uploading an image

https://github.com/expressjs/multer


## curl tests attachments

* requête de test :
```bash
export KATACODA_HOST=2886795279-3000-elsy06.environments.katacoda.com
export CHEMIN_FICHIER_IMAGE=/home/jibl/AVATAR_SITE_WEB_HUGO/business-374-127189.png
curl \
  -X POST \
  -F "filecomment=This is an image file" \
  -F "image=@$CHEMIN" \
  http://$KATACODA_HOST/api/v1/files/uploadFile
```
