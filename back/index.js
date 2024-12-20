const express = require ('express');
const app= express();

app.use(express.json());

let cors = require('cors');
app.use(cors());

const db = require('./models');

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);
const commentsRouter = require('./routes/Comments');
app.use("/comments", commentsRouter);
const usersRouter = require('./routes/Users');
app.use("/auth", usersRouter);


db.sequelize.sync().then(() => {
    app.listen('5000', () => {
        console.log("Listening to port 5000 ...")
    });
});

