import app from "./app.js";
const PORT = 5000;

app.listen(PORT, (error) => {

    if (error) console.log("Error");

    console.log(`Listen port: ${PORT}.`)
});