import express from "express"
const app = express()

app.get("/mf", (req,res) => {
    res.send("Mf")
})

app.listen(4000)