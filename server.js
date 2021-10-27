// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const cookieSession = require('cookie-session');
const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const quizRoutes = require("./routes/quiz");
const questionsRoutes = require("./routes/questions");
const quizQuestionIdRoutes = require("./routes/quiz-question");
const attempts = require("./routes/attempts");
const login = require("./routes/login");
const logout = require("./routes/logout");
const newQuiz = require("./routes/newQuiz");
const myQuizzes = require("./routes/myQuizzes");
const quizPage = require("./routes/quizpage");
//const myAttempts = require("./routes/myAttempts");
const quizList = require("./routes/quizList");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
//app.use("/api/quizzes", quizRoutes(db));
app.use("/api/questions", questionsRoutes(db));
app.use("/api/quizQuestionId", quizQuestionIdRoutes(db));
app.use("/api/attempts", attempts(db));
app.use("/api/login", login(db));
app.use("/logout", logout(db));
app.use("/api/newQuiz", newQuiz(db));
app.use("/api/myQuizzes", myQuizzes(db));
app.use("/api/quizzes", quizPage(db));
//app.use("/api/myAttempts", myAttempts(db));
app.use("/", quizList(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  const name = '';
  res.render("index", { name });
});

app.get('/dummyquiz', (req, res) => {
  res.render('dummyquiz');
});

app.get('/dummyattempt', (req, res) => {
  res.render('dummyattempt');
});

app.get('/dummynew', (req, res) => { //Handle get route within newQuiz.js
  res.render('dummynew');
});


// app.get("/login", (req, res) => {
//   res.render("login");
// })
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
