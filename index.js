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

    app.post("/users", async (req, res) => {

        const {name} = req.body
        const {email} = req.body
        const {password} = req.body

        await sequelize.query(`
        insert into users (
            name,
            email,
            password
        ) values (
            '${name}',
            '${email}',
            '${password}'
        )
        `);

        // app.post("user_bets", async (req, res) => {
            
        //     const {bets} = req.body

        //     await sequelize.query(`
        //     insert into user_bets (
        //         bet
        //     ) values (
        //         '${bet}
        //     )
        //     `);
        // })
    
        
        console.log(req.body);
        res.sendStatus(200);
    })

    app.listen(PORT, () => {
        console.log(`Server is hitting on ${PORT}`)
    });
});