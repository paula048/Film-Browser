### Nazwa kursu: Technologie aplikacji webowych II
### Autor: Paulina Radzik
#
#
# Temat: Przegladarka filmowa

# Opis

To prosty przykład kompletnej aplikacji React Native wraz z serwerem i połączeniem z bazą danych.
Aplikacja składa się z trzech głownych elementów:
- warstwy aplikacji Reac Native
- serweru lokalnego
- Bazy Danych


## Uruchomienie projektu
Aby uruchomić projekt potrzebujesz najpierw **bazę danych**.

### >>Łączenie z baza danych
Stwórz plik "config.js" w ścieżce '\Server'. 
Plik ten zawiera szczegółowe dane niezbędne do połaczenia z twoją bazą.

#### Wzór pliku "config.js"
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
Teraz wystarczy uruchomić aplikację.
### Uruchomienie Servera

```sh
cd Sevice
node index.js
```

### Uruchomienie aplikacji React Native

```sh
cd ShopSocks
npx react-native run-android
```




### Technologie użyte w projekcie:
- React-Native
- Node.js
- Express
- PostgreSQL

---
