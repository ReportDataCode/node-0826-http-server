const express = require("express");
const mysql = require("mysql2");
const app = express();
const db = mysql.createConnection(
    {
        host: "local",
        user: "root",
        password: 'user'
    }
)