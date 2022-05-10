const express = require("express");
var app = express();

const cors = require("cors");
const morgan = require("morgan");
const mysql = require("mysql");
const fs = require("fs");
const bodyParser = require("body-parser");
const { result } = require("lodash");
const { exec } = require("child_process");
const path = require("path");
const util = require("util");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lostthings",
});
connection.connect();
let data = [{
    fullname: '',
    phonenumber: '',
}]

app.get("/", (req, res) => {


    res.render("first1", {
        data: data

    });

});
app.post("/addcab", (req, res) => {
    let name = req.body.unamee;
    let id = req.body.idnume;

    let colorse = req.body.colorse;
    let place = req.body.placee;
    let time = req.body.time;
    let notes = req.body.Notes;
    let phone = req.body.phonee;
    let query = `INSERT INTO caps (idcaps, fullname, phonenumber, color, place, date, notes) VALUES ('${id}', '${name}', '${phone}', '${colorse}', '${place}', '${time}','${notes}')`;

    connection.query(query, (error, result) => {
        if (error) {
            console.log("error with sql syntax")
            res.render("first1", {
                data: data

            });
        } else {
            console.log("data inserted")
            res.render("first1", {
                data: data

            });
        }
    })


    //res.send(name + "  "+id + "  "+address + "  "+colorse + "  "+notes + "  ");

})


app.get("/search", (req, res) => {


    let color = req.query.color;
    let place = req.query.place;
    //let table = "caps";

    let query =`SELECT fullname,phonenumber FROM caps WHERE color LIKE '${color}' AND place LIKE '${place}'`;

    connection.query(query, (error, result) => {
        if (error) {
            console.log("error with database");
            res.render('first1', { data: "erro with database" })
        } else {
            res.render('first1', { data: result })
            console.log(result);

        }

    })


})








app.post("/addbag", (req, res) => {
    let name = req.body.uname;
    let id = req.body.idname;

    let colorse = req.body.color;
    let place = req.body.placee;
    let time = req.body.time;
    let notes = req.body.Notes;
    let phone = req.body.phone;

    let query = `INSERT INTO bags (idbags, place, date, color, phonenumber, fullname, notes) VALUES ('${id}', '${place}', '${time}', '${colorse}', '${phone}', '${name}','${notes}')`;
    // let query =`INSERT INTO caps (idcaps, place, date, color, phonenumber, fullname, notes) VALUES ('${id}', '${name}', '${phone}', '${colorse}', '${place}', '${time}','${notes}')`;

    // INSERT INTO `bags` (`idbags`, `place`, `date`, `color`, `phonenumber`, `fullname`, `notes`) VALUES ('1', 'lab 300', NULL, 'white', '100', 'beshoy ehab', '');
    //  INSERT INTO `bags` (`idbags`, `place`, `date`, `color`, `phonenumber`, `fullname`, `notes`) VALUES ('155', 'lab 300', NULL, 'white', '100', 'bebe', 'bebe');


    connection.query(query, (error, result) => {
        if (error) {
            console.log(error)
            res.render("first1", {
                data: "data"
            });
        } else {
            console.log("data inserted")
            res.render("first1", {
                data: data

            });
        }
    })


    //res.send(name + "  "+id + "  "+address + "  "+colorse + "  "+notes + "  ");

})


app.get("/searchbag", (req, res) => {

    let color = req.query.color;
    let place = req.query.place;
    //let table = "bags";
    let query = ` SELECT fullname,phonenumber FROM bags WHERE place LIKE '${place}' AND color LIKE '${color}'`;

    //    SELECT * FROM `bags` WHERE `place` LIKE 'lab 300' AND `color` LIKE 'red'
    connection.query(query, (error, result) => {
        if (error) {
            console.log(error);
            res.render('first1', { data: "erro with database" })
        } else {
            console.log(result);
            res.render('first1', { data: result })


        }

    })


})




app.post("/addmoney", (req, res) => {

    let name = req.body.uname;
    let id = req.body.idname;

    let money = req.body.numberofmoney;
    let place = req.body.place;
    let time = req.body.time;
    let notes = req.body.Notes;
    let phone = req.body.phone;
    // let query =`INSERT INTO money (idcaps, place, date, color, phonenumber, fullname, notes) VALUES ('${id}', '${place}', '${time}', '${colorse}', '${phone}', '${name}','${notes}')`;
    // let query =`INSERT INTO caps (idcaps, place, date, color, phonenumber, fullname, notes) VALUES ('${id}', '${name}', '${phone}', '${colorse}', '${place}', '${time}','${notes}')`;
    let query = `INSERT INTO money (idmoney, fullname, phonenumber, place, date, rangofmoney, notes) VALUES ('${id}', '${name}', '${phone}', '${place}', '${time}', '${money}','${notes}')`;
    //let query = `INSERT INTO money (idmoney, fullname, phonenumber, place, date, rang of money, notes) VALUES ('${id}', '${name}', '${phone}', '${place}', '${time}', '${money}','${notes}')`;

    // INSERT INTO `bags` (`idbags`, `place`, `date`, `color`, `phonenumber`, `fullname`, `notes`) VALUES ('1', 'lab 300', NULL, 'white', '100', 'beshoy ehab', '');
    //  INSERT INTO `bags` (`idbags`, `place`, `date`, `color`, `phonenumber`, `fullname`, `notes`) VALUES ('155', 'lab 300', NULL, 'white', '100', 'bebe', 'bebe');
    connection.query(query, (error, result) => {
        if (error) {
            console.log("error with sql syntax")
            res.render("first1", {
                data: data

            });
        } else {
            console.log("data inserted")
            res.render("first1", {
                data: data

            });
        }

    })



    app.get("/searchmoney", (req, res) => {

        let money = req.query.numberofmoney;
        let place = req.query.place;
        //let table = "bags";
        let query = `SELECT fullname,phonenumber FROM money WHERE place LIKE '${place}' AND rangofmoney LIKE '${money}'`;
        // SELECT * FROM `money` WHERE `place` LIKE 'lab 300' AND `rang of money` = 100

        connection.query(query, (error, result) => {
            if (error) {
                console.log(error);
                res.render('first1', { data: "erro with database" })
            } else {
                console.log(result);
                res.render('first1', { data: result })


            }

        })


    })



})











app.post("/addwallet", (req, res) => {

    let name = req.body.uname;
    let id = req.body.idname;
    let color = req.body.color;
    let money = req.body.numberofmoney;
    let place = req.body.place;
    let time = req.body.time;
    let notes = req.body.Notes;
    let phone = req.body.phone;
    // let query =`INSERT INTO money (idcaps, place, date, color, phonenumber, fullname, notes) VALUES ('${id}', '${place}', '${time}', '${colorse}', '${phone}', '${name}','${notes}')`;
    // let query =`INSERT INTO caps (idcaps, place, date, color, phonenumber, fullname, notes) VALUES ('${id}', '${name}', '${phone}', '${colorse}', '${place}', '${time}','${notes}')`;
    // let query=`INSERT INTO money (idmoney, fullname, phonenumber, place, date, rangofmoney, notes) VALUES ('${id}', '${name}', '${phone}', '${place}', '${time}', '${money}','${notes}')`;
    //let query = `INSERT INTO money (idmoney, fullname, phonenumber, place, date, rang of money, notes) VALUES ('${id}', '${name}', '${phone}', '${place}', '${time}', '${money}','${notes}')`;
    let query = `INSERT INTO wallet (idwallet, date, fullname, phonenumber, color, rangofmoney, place, notes) VALUES ('${id}', '${time}', '${name}', '${phone}', '${color}', '${money}','${place}', '${notes}')`;
    // INSERT INTO `bags` (`idbags`, `place`, `date`, `color`, `phonenumber`, `fullname`, `notes`) VALUES ('1', 'lab 300', NULL, 'white', '100', 'beshoy ehab', '');
    //  INSERT INTO `bags` (`idbags`, `place`, `date`, `color`, `phonenumber`, `fullname`, `notes`) VALUES ('155', 'lab 300', NULL, 'white', '100', 'bebe', 'bebe');
    connection.query(query, (error, result) => {
        if (error) {
            console.log("error with sql syntax")
            res.render("first1", {
                data: data

            });
        } else {
            console.log("data inserted")
            res.render("first1", {
                data: data

            });
        }

    })



    app.get("/searchwallet", (req, res) => {

        let money = req.query.numberofmoney;
        let place = req.query.place;
        let color = req.query.color;
        //let table = "bags";
        // let query = `SELECT fullname,phonenumber FROM money WHERE place LIKE '${place}' AND rangofmoney LIKE '${money}'` ;
        // SELECT * FROM `money` WHERE `place` LIKE 'lab 300' AND `rang of money` = 100

        let query = `SELECT fullname,phonenumber FROM wallet WHERE color LIKE '${color}' AND rangofmoney = '${money}' AND place LIKE '${place}'`;

        connection.query(query, (error, result) => {
            if (error) {
                console.log(error);
                res.render('first1', { data: "erro with database" })
            } else {
                console.log(result);
                res.render('first1', { data: result })


            }

        })


    })



})








app.post("/addkeys", (req, res) => {
    let name = req.body.uname;
    let id = req.body.idname;

    let numberofkeys = req.body.numberofkeys;
    let place = req.body.place;
    let time = req.body.time;
    let notes = req.body.Notes;
    let phone = req.body.phone;
    // let query =`INSERT INTO bags (idcaps, place, date, color, phonenumber, fullname, notes) VALUES ('${id}', '${place}', '${time}', '${colorse}', '${phone}', '${name}','${notes}')`;

    let query = `INSERT INTO keys (idkeys, date, place, phonenumber, fullname, noofkeys, notes) VALUES ('${id}', '${time}', '${place}', '${phone}', '${name}', '${numberofkeys}','${notes}')`;



    connection.query(query, (error, result) => {
        if (error) {
            console.log(error)
            res.render("first1", {
                data: data

            });
        } else {
            console.log("data inserted")
            res.render("first1", {
                data: data

            });
        }
    })


    //res.send(name + "  "+id + "  "+address + "  "+colorse + "  "+notes + "  ");

})


app.get("/searchkeys", (req, res) => {

    let numberofkeys = req.query.numberofkeys;
    let place = req.query.place;
    //let table = "bags";

    let query = `SELECT fullname,phonenumber FROM keys WHERE place LIKE '${place}' AND noofkeys ='${numberofkeys}'`;

    
    connection.query(query, (error, result) => {
        if (error) {
            console.log(error);
            res.render('first1', { data: "erro with database" })
        } else {
            console.log(result);
            res.render('first1', { data: result })


        }

    })


})




app.post("/addmobile", (req, res) => {
    let name = req.body.uname;
    let id = req.body.idmobile;
    let tybe = req.body.tybe;
    let size = req.body.size;
    let place = req.body.place;
    let time = req.body.time;
    let notes = req.body.Notes;
    let phone = req.body.phone;
    let color = req.body.color;
     let query =`INSERT INTO mobile (idmobile, fullname, phonenumber, color, place, date, type, notes, size) VALUES ('${id}', '${name}', '${phone}', '${color}', '${place}', '${time}','${tybe}', '${notes}' ,'${size}')`;

    connection.query(query, (error, result) => {
        if (error) {
            console.log(error)
            res.render("first1", {
                data: data

            });
        } else {
            console.log("data inserted")
            res.render("first1", {
                data: data

            });
        }
    })


    //res.send(name + "  "+id + "  "+address + "  "+colorse + "  "+notes + "  ");

})


app.get("/searchmobile", (req, res) => {

    let tybe = req.query.tybe;
    let size = req.query.size;
    let color = req.query.color;
    let place = req.query.place;
    //let table = "bags";

    let query = `SELECT fullname,phonenumber FROM mobile WHERE color LIKE '${color}' AND place LIKE '${place}' AND type LIKE '${tybe}' AND size LIKE '${size}'`;
// SELECT * FROM `mobile` 

    //SELECT * FROM keys WHERE `place` LIKE 'lab 303' AND `noofkeys` = 5


    //let query = ` SELECT fullname,phonenumber FROM bags WHERE place LIKE  AND color LIKE '${color}'` ;

    //    SELECT * FROM `bags` WHERE `place` LIKE 'lab 300' AND `color` LIKE 'red'
    connection.query(query, (error, result) => {
        if (error) {
            console.log(error);
            res.render('first1', { data: "erro with database" })
        } else {
            console.log(result);
            res.render('first1', { data: result })


        }

    })


})








app.post("/addbooks", (req, res) => {
    let name = req.body.uname;
    let id = req.body.idname;
    let bookname = req.body.bookname;
    let place = req.body.place;
    let time = req.body.time;
    let notes = req.body.Notes;
    let phone = req.body.phone;
    let color = req.body.color;

    let query = `INSERT INTO books (idbook, date, place, phonenumber, fullname, nameofbooks, notes ,color) VALUES ('${id}', '${time}', '${place}', '${phone}', '${name}', '${bookname}', '${notes}' ,'${color}' )`;

    // INSERT INTO `books` (`idbook`, `date`, `place`, `phonenumber`, `fullname`, `nameofbooks`, `notes`, `color`) VALUES ('3322112', NULL, 'lab 303', '01068173639', 'beshooooooo', 'beshoybook', '', 'red');
    //  let query =`INSERT INTO mobile (idmobile, fullname, phonenumber, color, place, date, type, notes, size) VALUES 

    connection.query(query, (error, result) => {
        if (error) {
            console.log(error)
            res.render("first1", {
                data: data

            });
        } else {
            console.log("data inserted")
            res.render("first1", {
                data: data

            });
        }
    })


    //res.send(name + "  "+id + "  "+address + "  "+colorse + "  "+notes + "  ");

})


app.get("/searchbooks", (req, res) => {

    let bookname = req.query.bookname;
    let color = req.query.color;
    let place = req.query.place;
    //let table = "bags";

    let query = `SELECT fullname,phonenumber FROM books WHERE place LIKE '${place}' AND nameofbooks LIKE '${bookname}' AND color LIKE '${color}'`;

    // let query = `SELECT fullname,phonenumber FROM mobile WHERE color LIKE '${color}' AND place LIKE '${place}' AND type LIKE '${tybe}' AND size LIKE '${size}'`;
// SELECT * FROM `mobile` 

    
    connection.query(query, (error, result) => {
        if (error) {
            console.log(error);
            res.render('first1', { data: "erro with database" })
        } else {
            console.log(result);
            res.render('first1', { data: result })


        }

    })


})






app.post("/addglasses", (req, res) => {
    let name = req.body.uname;
    let id = req.body.idname;

    let color = req.body.color;
    let place = req.body.place;
    let time = req.body.time;
    let notes = req.body.Notes;
    let phone = req.body.phone;
    let query = `INSERT INTO glasses (idglasses, fullname, phonenumber, color, date, place, notes) VALUES ('${id}', '${name}', '${phone}', '${color}', '${time}', '${place}','${notes}')`;

    // INSERT INTO `glasses` (`idglasses`, `fullname`, `phonenumber`, `color`, `date`, `place`, `notes`) VALUES ('11', 'nn', '01068173639', 'red', NULL, 'lab 303', '');

    connection.query(query, (error, result) => {
        if (error) {
            console.log("error with sql syntax")
            res.render("first1", {
                data: data

            });
        } else {
            console.log("data inserted")
            res.render("first1", {
                data: data

            });
        }
    })


    //res.send(name + "  "+id + "  "+address + "  "+colorse + "  "+notes + "  ");

})


app.get("/searchglasses", (req, res) => {


    let color = req.query.color;
    let place = req.query.place;
    //let table = "caps";

    let query =`SELECT fullname,phonenumber FROM glasses WHERE color LIKE '${color}' AND place LIKE '${place}'`;
// SELECT `fullname`, `phonenumber` FROM `glasses` WHERE `color` LIKE 'red' AND `place` LIKE 'lab 303'
    connection.query(query, (error, result) => {
        if (error) {
            console.log("error with database");
            res.render('first1', { data: "erro with database" })
        } else {
            res.render('first1', { data: result })
            console.log(result);

        }

    })


})






app.post("/addusb", (req, res) => {
    let name = req.body.uname;
    let id = req.body.idname;

    let color = req.body.color;
    let place = req.body.place;

    let time = req.body.time;
    let notes = req.body.Notes;
    let phone = req.body.phone;
    let gb = req.body.gb;
    let tybe = req.body.tybe;
    let query = `INSERT INTO usb (IDUSB, GB, date, place, fullname, phonenumber, notes, tybe, color) VALUES ('${id}', '${gb}', '${time}', '${place}', '${name}', '${phone}','${notes}','${tybe}', '${color}')`;
   // INSERT INTO `usb` (`IDUSB`, `GB`, `date`, `place`, `fullname`, `phonenumber`, `notes`, `tybe`, `color`) VALUES ('578', '8G', NULL, 'lab 303', 'beeeebeeeee', '01068173639', '', 'kingston', 'red');
   // INSERT INTO `usb` (`IDUSB`, `GB`, `date`, `place`, `fullname`, `phonenumber`, `notes`, `tybe`) VALUES ('5', '8G', NULL, 'lab 303', 'bebe', '01068173639', '', 'kingston');

    connection.query(query, (error, result) => {
        if (error) {
            console.log(error)
            res.render("first1", {
                data: data

            });
        } else {
            console.log("data inserted")
            res.render("first1", {
                data: data

            });
        }
    })


    //res.send(name + "  "+id + "  "+address + "  "+colorse + "  "+notes + "  ");

})


app.get("/searchusb", (req, res) => {


    let color = req.query.color;
    let place = req.query.place;
    let gb = req.query.gb;
    let tybe = req.query.tybe;
    //let table = "caps";

   // SELECT `fullname`, `phonenumber` FROM `usb` WHERE `GB` LIKE '64G' AND `place` LIKE 'lab 300' AND `tybe` LIKE 'samsung' AND `color` LIKE 'red'

    let query =`SELECT fullname,phonenumber FROM usb WHERE GB LIKE '${gb}' AND place LIKE '${place}' AND tybe LIKE '${tybe}' AND color LIKE '${color}'`;
// SELECT `fullname`, `phonenumber` FROM `glasses` WHERE `color` LIKE 'red' AND `place` LIKE 'lab 303'
    connection.query(query, (error, result) => {
        if (error) {
            console.log("error with database");
            res.render('first1', { data: "erro with database" })
        } else {
            res.render('first1', { data: result })
            console.log(result);

        }

    })


})






app.post("/addheadphone", (req, res) => {
    let name = req.body.uname;
    let id = req.body.idname;

    let color = req.body.color;
    let place = req.body.place;

    let time = req.body.time;
    let notes = req.body.Notes;
    let phone = req.body.phone;
    let tybe = req.body.tybe;
    let query = `INSERT INTO headphone (idheadphone, type, date, color, place, fullname, phonenumber, notes) VALUES ('${id}', '${tybe}', '${time}', '${color}', '${place}', '${name}','${phone}','${notes}')`;
   
   // INSERT INTO `headphone` (`idheadphone`, `type`, `date`, `color`, `place`, `fullname`, `phonenumber`, `notes`) VALUES ('88', 'samsung', NULL, 'red', 'lab 303', 'nmnm', '01068173639', '');

    connection.query(query, (error, result) => {
        if (error) {
            console.log(error)
            res.render("first1", {
                data: data

            });
        } else {
            console.log("data inserted")
            res.render("first1", {
                data: data

            });
        }
    })


    //res.send(name + "  "+id + "  "+address + "  "+colorse + "  "+notes + "  ");

})


app.get("/searchheadphone", (req, res) => {


    let color = req.query.color;
    let place = req.query.place;
   
    let tybe = req.query.tybe;
    //let table = "caps";


    //SELECT `fullname`, `phonenumber` FROM `headphone` WHERE `type` LIKE 'samsung' AND `color` LIKE 'red' AND `place` LIKE 'lab 303'


    let query =`SELECT fullname,phonenumber FROM headphone WHERE type LIKE '${tybe}' AND color LIKE '${color}' AND place LIKE '${place}'`;

    connection.query(query, (error, result) => {
        if (error) {
            console.log(error);
            res.render('first1', { data: error })
        } else {
            res.render('first1', { data: result })
            console.log(result);

        }

    })


})












app.listen(3000);
