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

```JAvaScript
uploadImageFile )) { return callback(new Error(‘Only zip files are allowed!’), false) } callback(null, true) } // store at disk const storage = multer.diskStorage({ destination: (req, file, callback) => { callback(null, `${storePath}/`) }, filename: (req, file, callback) => { callback(null, fileName ? fileName : file.originalname) } }) const upload = multer({ storage, fileFilter }) const multerSingle = upload.single(requestField) try { await new Promise(async (resolve, reject) => { try { multerSingle(request, undefined, async (error) => { if (error) { reject(error) } resolve() }) } catch (error) { reject(error) } }) } catch (error) { throw new StatusError(400, ‘invalid upload’, error.toString()) } } }
```
