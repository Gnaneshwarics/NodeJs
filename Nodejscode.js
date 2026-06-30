const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "deepa"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("CREATE DATABASE IF NOT EXISTS appon", function (err) {
        if (err) throw err;
        console.log("Database created/ready");

        con.query("USE appon", function (err) {
            if (err) throw err;

            const createTable = `
                CREATE TABLE IF NOT EXISTS alia (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(20),
                    address VARCHAR(20)
                )
            `;

            con.query(createTable, function (err) {
                if (err) throw err;
                console.log("Table created/ready");

                const insertData = `
                    INSERT INTO alia (name, address) VALUES
                    ('sanjay', 'new delhi'),
                    ('maya', 'mysore'),
                    ('sanju', 'bangalore'),
                    ('manju', 'mangalore')
                `;

                con.query(insertData, function (err) {
                    if (err) throw err;
                    console.log("Data inserted");

                    con.query("SELECT * FROM alia", function (err, result) {
                        if (err) throw err;
                        console.log("All Records:");
                        console.log(result);

                        con.query("SELECT * FROM alia WHERE id = 1", function (err, result) {
                            if (err) throw err;
                            console.log("Single Record:");
                            console.log(result);

                            con.query("UPDATE alia SET name='mamtha' WHERE id = 3", function (err) {
                                if (err) throw err;
                                console.log("Record updated");

                                con.query("DELETE FROM alia WHERE id = 2", function (err) {
                                    if (err) throw err;
                                    console.log("Record deleted");

                                    con.query("SELECT * FROM alia", function (err, result) {
                                        if (err) throw err;
                                        console.log("Final Data:");
                                        console.log(result);

                                        con.end();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});