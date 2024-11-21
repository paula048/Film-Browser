# Film Browser
It is simply example of completely React Native application with Server and connection to database.
App consist of three elements:
- Reac Native application
- local Server
- Database


## How to start
To build nad run application you need FIRST **database**.

Then create file "config.js" in path \Server and fill it with yours data.

#### Template
```sh
// config.js
const port = ;

const user = '';
const host = '';
const database = '';
const password = '';


module.exports = {
    port: port,
    user: user,
    host: host,
    database: database,
    password: password
};
```
Then just run application.
### Run Server

```sh
cd Sevice
node index.js
```

### Run React Native application

```sh
cd ShopSocks
npx react-native run-android
```

