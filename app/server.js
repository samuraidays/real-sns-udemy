const express = require("express");
const app = express();
const PORT = 8100;
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

// ミドルウェアの設定
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.listen(PORT, () => {
    console.log("サーバが起動しました")
})