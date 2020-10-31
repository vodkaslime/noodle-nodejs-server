"use strict";

const constants = require("./utils/constants");
const VIDEO_REQUEST_PREFIX = constants.VIDEO_REQUEST_PREFIX;
const USER_REQUEST_PREFIX = constants.USER_REQUEST_PREFIX;
const CONTENT_API_PREFIX = constants.CONTENT_API_PREFIX;

// Initiate expressjs server
const express = require("express");
const path = require("path");
const app = express();

// JSON parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const contentSqlRoutes = require("./routes/content_sql_routes");
const userSqlRoutes = require("./routes/user_sql_routes");
const videoRoutes = require("./routes/video_routes");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// Attach routers.
app.use(VIDEO_REQUEST_PREFIX, videoRoutes);
app.use(USER_REQUEST_PREFIX, userSqlRoutes);
app.use(CONTENT_API_PREFIX, contentSqlRoutes);

// Start the server
app.listen(3000, function () {
  console.log("App is running on port 3000");
});
