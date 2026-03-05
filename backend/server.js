const cors = require("cors")
require("dotenv").config()

const app = express()

// CORS coconst express = require("express")
nfiguration options
const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*', // allow all by default, or specify allowed origin in .env
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // allow cookies if needed
}

app.use(cors(corsOptions))
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀")
})

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend conectado 🚀" })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})