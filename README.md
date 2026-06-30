Node.js MySQL Demo

Introduction

This project is a simple demonstration of how to connect a Node.js application with a MySQL database and perform various SQL operations. It covers database creation, table management, CRUD (Create, Read, Update, Delete) operations, and schema modifications.

Features

Database Operations

* Create a database if it does not already exist.

Table Operations

* Create a table with a primary key.
* Add new columns to an existing table.
* Drop columns from the table.
* Drop the primary key.
* Drop the entire table.

Data Manipulation (CRUD)

* Insert multiple records into the table.
* Display all records.
* Display a specific record using the WHERE clause.
* Update an existing record.
* Delete a specific record.

Prerequisites

Before running this project, make sure you have:

* Node.js installed
* MySQL Server installed and running
* A MySQL user with the required permissions
* The mysql2 package installed

Installation

Step 1: Clone the Repository

git clone https://github.com/Abhilash-coder009/Nodejs_MySQL.git
cd Nodejs_MySQL

Step 2: Install Dependencies

npm install mysql2

Database Connection

Update the MySQL connection details in the nodejs_sql.js file.

const mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "siri"
});

Replace the username, password, and database name according to your MySQL configuration.

Running the Program

Execute the following command in the terminal:

node nodejs_sql.js

SQL Operations Performed

The program performs the following SQL operations:

Database

* CREATE DATABASE

Table

* CREATE TABLE
* ALTER TABLE ADD COLUMN
* ALTER TABLE DROP COLUMN
* ALTER TABLE DROP PRIMARY KEY
* DROP TABLE

CRUD Operations

* INSERT INTO
* SELECT *
* SELECT with WHERE clause
* UPDATE
* DELETE

Technologies Used

* Node.js
* JavaScript
* MySQL
* mysql2 Node.js package

Output

After running the program successfully, it will:

* Connect to the MySQL server.
* Create the database (if it does not exist).
* Create the required table.
* Insert records into the table.
* Display the inserted records.
* Update selected records.
* Delete specific records.
* Modify the table structure when required.
* Drop the table if specified.

Advantages

* Easy to understand for beginners.
* Demonstrates complete CRUD operations.
* Shows how Node.js communicates with MySQL.
* Useful for learning database connectivity and SQL commands.

Conclusion

This project demonstrates how to connect a Node.js application with a MySQL database using the mysql2 package. It performs database creation, table management, CRUD operations, and schema modifications. It is an excellent beginner project for understanding database connectivity in Node.js applications.

License
This project is licensed under the MIT License.
