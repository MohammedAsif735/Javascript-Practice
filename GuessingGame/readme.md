# 🎯 Number Guessing Game (JavaScript)

This is a simple Number Guessing Game built using JavaScript.  
The program generates a random number, and the user tries to guess it.

---

## 🚀 Features

- User sets the maximum number range
- Random number is generated automatically
- User can guess multiple times
- Hints are provided:
  - 📉 Too small
  - 📈 Too large
- Option to quit anytime by typing "quit"

---

## 🧠 How It Works

1. User enters a maximum number.
2. Program generates a random number between `1` and `max`.
3. User keeps guessing until:
   - ✅ Correct guess
   - ❌ User types "quit"
4. Program gives feedback after each guess.

---

## 💻 Code

```javascript
const max = prompt("enter a max number: ");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number: ");

while (true) {
    if (guess == "quit") {
        console.log("User quit!");
        break;
    }

    if (guess == random) {
        console.log("You are right! Congrats random number was", random);
        break;
    } else if (guess < random) {
        guess = prompt("Your guess was too small. Please try again");
    } else {
        guess = prompt("Your guess was too large. Please try again!");
    }
}