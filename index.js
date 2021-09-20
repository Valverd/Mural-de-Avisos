const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');
const router = require('./routes/api');
const cors = require('cors');


app.use(cors());

app.use(express.json());

app.use("/api", router);

app.use("/", express.static(path.join(__dirname, "public")));



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})