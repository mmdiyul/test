require("dotenv").config({path: './config.env'})
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const port = process.env.PORT || 5000
const biodata = require("./routes/biodata")

mongoose
	.connect(process.env.DBHOST, { useNewUrlParser: true })
	.then(() => {
		const app = express()
    app.use(bodyParser.json())
    app.use('/api', biodata)

		app.listen(port, () => {
      console.log(`Listening http://localhost:${port}`)
    })
	})
  .catch((err) => {
    console.log(err)
  })

// // app.get('/', (req, res) => {
// //   return res.json({
// //     message: 'OK'
// //   }).status(200)
// // })