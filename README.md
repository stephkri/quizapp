QuizApp
=========
This is a simple, node-based full-stack web app designed for creating and taking simple, multiple-choice quizzes. In this app, users can:

- View a list of public quizzes on the homepage of the app
- Login or register to the database with their email and password
- Take any quiz, whether logged in or out, and immediately see their score
- Share a quiz with a unique link
- Share an attempt at a quiz by a registered user, with a unique link
- If logged in, save their attempts
- If logged in, create a quiz with any number of questions they want

This is a group project as part of [Lighthouse Labs](https://www.lighthouselabs.ca) by [Stephane Krims](https://github.com/stephkri) and [Akshatha Kulkarni](https://github.com/akshathakulkarni). 

## Installation instructions

1. Fork and clone this repository into your machine
2. Run the command `npm run local`. This will get the server running on port 8080.
3. Type `localhost:8080` in the address bar of your browser. You should see the home page of the app.

To see some preset quizzes we've made, implement the seeds in this repo with psql. 
The username and password are both `labber`.
You can also use the `npm run db:reset` command. (note: this command will drop any users, quizzes or attempts that you have made yourself - use with caution!)

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Bcrypt 5.0.1 or above
- Chalk 2.4.2 or above
- CookieSession 1.4.x or above
- Dotenv 2.x or above
- EJS 2.6.2 or above
- Express 4.17.1 or above
- Morgan 1.9.1 or above
- PG-Native 3.x or above
- SASS 1.35.1 or above

## Screenshots

!["Homepage as it appears when a user is logged out"](https://github.com/stephkri/quizapp/blob/master/screenshots/logout-homepage.png)
!["Homepage as it appears when a user is logged in"](https://github.com/stephkri/quizapp/blob/master/screenshots/login-homepage.png)
!["Register page"](https://github.com/stephkri/quizapp/blob/master/screenshots/register-page.png)
!["Login page"](https://github.com/stephkri/quizapp/blob/master/screenshots/login-page.png)
!["Page for an individual quiz"](https://github.com/stephkri/quizapp/blob/master/screenshots/quiz-page.png)
!["Answers for each question are randomly arranged with each page refresh"](https://github.com/stephkri/quizapp/blob/master/screenshots/quiz-page-scramble.png)
!["For logged-in users: attempt is immediately recorded and shareable"](https://github.com/stephkri/quizapp/blob/master/screenshots/attempt-page.png)
!["For logged-out users: attempt is only temporarily visible"](https://github.com/stephkri/quizapp/blob/master/screenshots/temp-attempt.png)
!["Form for logged-in users to create a new quiz"](https://github.com/stephkri/quizapp/blob/master/screenshots/new-quiz.png)
!["Page for logged-in users to see the quizzes they've made"](https://github.com/stephkri/quizapp/blob/master/screenshots/my-quizzes.png)
!["Page for logged-in users to see the quiz attempts they've made"](https://github.com/stephkri/quizapp/blob/master/screenshots/my-attempts.png)
!["Page for anyone to share links to a quiz or attempt"](https://github.com/stephkri/quizapp/blob/master/screenshots/share-page.png)
