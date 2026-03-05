const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ mensaje: "Backend funcionando 🚀" })
})

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend conectado 🚀" })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})