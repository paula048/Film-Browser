### Nazwa kursu: Testowanie i Jakość Oprogramowania
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



## Testy
### testy jednostkowe:
- LoginScreen - kliknięcie przycisku 'zaloguj się'
- LoginScreen - przejście do formularza Rejestracji
- SettingsScreen - kliknięcie przycisku 'wyloguj się'
- LoginScreen - sprawdzenie, czy pole e-mail jest obecne
- LoginScreen - sprawdzenie, czy pole hasło jest obecne
- LoginScreen - przycisk Zaloguj się jest wyłączony, gdy brak danych
- LoginScreen - wprowadzenie błędnych danych
- SettingsScreen - ustawienia są wyświetlane poprawnie
- LoginScreen - sprawdzenie, czy przycisk rejestracji jest obecny
- LoginScreen - walidacja formularza przy braku danych


### testy integracyjne:
- SignUpScreen - Rejestracja
- SignUpScreen - Rejestracja - brak e-maila
- SignUpScreen - Rejestracja - brak hasła
- SignUpScreen - Rejestracja - hasło zbyt krótkie
- SignUpScreen - Rejestracja - sprawdzenie obecności formularza
- SignUpScreen - Rejestracja - poprawna walidacja danych
- SignUpScreen - Rejestracja - sprawdzenie komunikatu o sukcesie
- SignUpScreen - Rejestracja - już istniejący użytkownik
- SignUpScreen - Rejestracja - powrót do ekranu logowania
- SignUpScreen - Rejestracja - widoczność przycisku rejestracji

[simple tests 1](https://github.com/paula048/Film-Browser/blob/TiJO/ShopSocks/__tests__/test1.js)
[Rejestracja](https://github.com/paula048/Film-Browser/blob/TiJO/ShopSocks/__tests__/test2.js)
[simple tests 2](https://github.com/paula048/Film-Browser/blob/TiJO/ShopSocks/__tests__/test3.js)


---

#
#
#
## Przypadki testowe dla testera manualnego


| ID    | Tytuł                                                   | Warunki Początkowe            | Kroki Testowe                                                         | Oczekiwany rezultat                                           |
|--------|---------------------------------------------------------|-------------------------------|----------------------------------------------------------------------|--------------------------------------------------------------|
| TC001 | LoginScreen - kliknięcie przycisku ‘zaloguj się’ | Otwarta aplikacja z ekranem logowania | Klikamy przycisk 'Zaloguj się'. | Funkcja logowania jest wywoływana. |
| TC002 | LoginScreen - przejście do formularza Rejestracji | Otwarta aplikacja z ekranem logowania | Klikamy przycisk 'Zarejestruj się'. | Przechodzimy do ekranu rejestracji (SignUp). |
| TC003 | SettingsScreen - kliknięcie przycisku ‘wyloguj się’ | Otwarta aplikacja z ekranem ustawień | Klikamy przycisk 'Wyloguj się'. | Funkcja wylogowania jest wywoływana. |
| TC004 | LoginScreen - sprawdzenie, czy pole e-mail jest obecne | Otwarta aplikacja z ekranem logowania | Sprawdzamy, czy pole do wprowadzenia e-maila jest widoczne. | Pole e-mail jest obecne na ekranie. |
| TC005 | LoginScreen - sprawdzenie, czy pole hasło jest obecne | Otwarta aplikacja z ekranem logowania | Sprawdzamy, czy pole do wprowadzenia hasła jest widoczne. | Pole hasło jest obecne na ekranie. |
| TC006 | LoginScreen - przycisk Zaloguj się jest wyłączony, gdy brak danych | Otwarta aplikacja z ekranem logowania, puste pola formularza | Sprawdzamy, czy przycisk 'Zaloguj się' jest wyłączony. | Przycisk 'Zaloguj się' jest wyłączony. |
| TC007 | LoginScreen - wprowadzenie błędnych danych | Otwarta aplikacja z ekranem logowania | Wprowadzamy nieprawidłowy e-mail i hasło, a następnie klikamy 'Zaloguj się'. | Pojawia się komunikat o błędzie: 'Nieprawidłowy e-mail lub hasło'. |
| TC008 | SignUpScreen - Rejestracja - poprawne dane | Otwarta aplikacja z ekranem rejestracji | Wprowadzamy poprawne dane w formularzu rejestracyjnym i klikamy 'Zarejestruj się'. | Pojawia się komunikat: 'Rejestracja zakończona sukcesem'. |
| TC009 | SignUpScreen - Rejestracja - brak e-maila | Otwarta aplikacja z ekranem rejestracji | Nie wprowadzamy e-maila i klikamy 'Zarejestruj się'. | Pojawia się komunikat: 'E-mail jest wymagany'. |
| TC010 | SignUpScreen - Rejestracja - brak hasła | Otwarta aplikacja z ekranem rejestracji | Nie wprowadzamy hasła i klikamy 'Zarejestruj się'. | Pojawia się komunikat: 'Hasło jest wymagane'. |
| TC011 | SignUpScreen - Rejestracja - hasło zbyt krótkie | Otwarta aplikacja z ekranem rejestracji | Wprowadzamy hasło krótsze niż 6 znaków i klikamy 'Zarejestruj się'. | Pojawia się komunikat: 'Hasło musi mieć co najmniej 6 znaków'. |
| TC012 | SignUpScreen - Rejestracja - poprawna walidacja danych | Otwarta aplikacja z ekranem rejestracji | Wprowadzamy poprawne dane (e-mail, hasło) i klikamy 'Zarejestruj się'. | Pojawia się komunikat: 'Rejestracja zakończona sukcesem'. |
| TC013 | SignUpScreen - Rejestracja - już istniejący użytkownik | Otwarta aplikacja z ekranem rejestracji | Wprowadzamy e-mail już istniejącego użytkownika i klikamy 'Zarejestruj się'. | Pojawia się komunikat: 'Użytkownik z tym e-mailem już istnieje'. |
| TC014 | SignUpScreen - Rejestracja - powrót do ekranu logowania | Otwarta aplikacja z ekranem rejestracji | Klikamy link 'Masz już konto? Zaloguj się'. | Przechodzimy do ekranu logowania. |
| TC015 | SignUpScreen - Rejestracja - widoczność przycisku rejestracji | Otwarta aplikacja z ekranem rejestracji | Sprawdzamy, czy przycisk 'Zarejestruj się' jest widoczny. | Przycisk 'Zarejestruj się' jest widoczny na ekranie. |



### Technologie użyte w projekcie:
- React-Native
- Express
- Node.js
---
