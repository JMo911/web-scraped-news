const mongoose = require('mongoose');
const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);