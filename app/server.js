const express = require("express");
const app = express();
const PORT = 8100;
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
require("dotenv").config();

//データベース接続
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("データベース接続中");
    }).catch((error) => {
        console.log(error);
    });

// ミドルウェアの設定
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.listen(PORT, () => {
    console.log("サーバが起動しました")
});