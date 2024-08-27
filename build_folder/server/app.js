require("dotenv").config();
const express = require("express");
const app = express(),
  PORT = 9998;
  const path = require('path')
const passport = require("passport");
const initializePassport = require("./passport.config.js");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MemoryStore = require("memorystore")(session);
const { checkAuthenticated, checkNotAuthenticated } = require("./auth.js");
const { createProxyMiddleware } = require("http-proxy-middleware");
const client = "http://localhost:4447";
const proxyClient = require('./proxyClient.js')
const cors = require('cors')
let messages = {},
  activeUsers = [],
  rooms = [];

  const sessionMiddleware = session({
    name: "uniqueCookieName",
    cookie: {
      maxAge: 21600000,
      secure: false,
      sameSite: "strict",
      httpOnly: true,
    },
    store: new MemoryStore({
      checkPeriod: 21600000,
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  });
  

  

// middleware
app.use(cors());
initializePassport(passport, activeUsers);
app.use(sessionMiddleware)

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  // Saying hello from middleware
  console.log("Authentication server active");
  if(req.isAuthenticated()){
    console.log('User is authenticated')
  } else {
    console.log('User is NOT authenticated')
  }
  next();
});
app.use(sessionMiddleware)
app.use(passport.initialize());
app.use(passport.session());


// proxy client server
proxyClient(app)

// login attempt
app.route("/login-attempt").post(
    passport.authenticate("local", {
      successRedirect: "/home",
      failureRedirect: "/",
    })
  );
  

app.listen(PORT, () => {
  console.log("Access granted on port " + PORT);
});
