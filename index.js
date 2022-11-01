require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { Sequelize } = require("sequelize")


const app = express()

const { PORT, CONNECTION_STRING } = process.env

app.use(express.json())
app.use(cors())

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        }
    }
});

sequelize.authenticate().then(() => {
    app.set("db", {
        sequelize,
    });

    app.post("/user_bets", async (req, res) => {

        const {bet} = req.body

       await sequelize.query(`
        insert into user_bets (
            bet
        ) values (
            '${bet}'
        );
        `);

    app.post("/users", async (req, res) => {

        const {name} = req.body.name
        const {email} = req.body.email
        const {password} = req.body.password

        await sequelize.query(`
        insert into users (
            name,
            email,
            password
        ) values (
            '${name}'
            '${email}'
            '${password}'
        )
        `)
    })    
        console.log(req.body);
        res.sendStatus(200);
    })



    app.listen(PORT, () => {
        console.log(`Server is hitting on ${PORT}`)
    });
});