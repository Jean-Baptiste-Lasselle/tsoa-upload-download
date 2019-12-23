# Simple Express.js App

Simple TypeScript-based Express.js application template

## Reloaded build n Run

```base
export SSH_URI_REPO_STARTER_TSOA=https://gitlab.com/second-bureau/pegasus/miroir-simple-express

mkdir monapi/
git clone $SSH_URI_REPO_STARTER_TSOA monapi/
cd monapi/

# J'ai installé les deux, je retirerai l'installation
# globale après avoir vérifié que cela ne
# provoque pas d'erreur(s)
#
npm install -g tsoa
npm install --save-dev tsoa

npm install @types/node
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
