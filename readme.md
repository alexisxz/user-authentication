# user-authentication
Creating a micro-service authenticator with node, tsc and express using the methods:
 - GET /users
 - GET /users/:uuid
 - POST /users
 - PUT /users/:uuid
 - DELETE /users/:uuid
 - POST /token
 - POST /token//validate

## building the project with node and tsc
 
    $ git init
    $ npm init
    $ mkdir dist
    $ mkdir src
    $ cd src
    $ mkdir @types
    $ touch.exe index.ts
    $ cd ..
    > change the information on package.json and tsconfig.json
    $ npm run start
    $ npm install -g typescript
    $ tsc --init
    $ npm install --save-dev typescript
    $ npm install --save-dev @types/node
    $ npm run build
    $ touch.exe .gitignore
    > place into gitignore node_modules and dist
    $ git add *
    $ git commit -m "initial project with tsc"

## creating server with express

    $ npm install --save express
    $ npm install --save-dev @types/express
    > coding the server on index.ts
    $ npm install --save-dev ts-node-dev
    > creating the dev script on package.json
    $ npm run dev

## installing API REST package
    
    $ npm install --save http-status-codes

## installing and creating SQL postgres 
    
    $ npm install --save pg
    $ npm install --save-dev @types/pg
    > Access elephantSQL or ur postgres to setup your instance

## installing JWT to generate tokens
    
    $ npm install --save jsonwebtoken
    $ npm install --save-dev @types/jsonwebtoken


