const express = require("express")
const Biodata = require("./../models/Biodata") // new
const router = express.Router()

router.get("/biodata", async (req, res) => {
  const data = await Biodata.find()
  res.send({ data, total: data.length, message: "OK!" })
})

router.get("/biodata/:id", async (req, res) => {
  const data = await Biodata.findById(req.params.id)
  res.send({ data, total: data.length, message: "OK!" })
})

router.post("/biodata", async (req, res) => {
  const requestData = req.body
  const newData = new Biodata(requestData)
  await newData.save()
  res.send({ data: newData, message: "Created!" })
})

router.put("/biodata/:id", async (req, res) => {
  const requestData = req.body
  await Biodata.findByIdAndUpdate(req.params.id, requestData)
  const data = await Biodata.findById(req.params.id)
  res.send({ data, message: "Updated!" })
})

router.delete("/biodata", async (req, res) => {
  await Biodata.deleteMany()
  res.send({ message: "All data deleted!" })
})

router.delete("/biodata/:id", async (req, res) => {
  await Biodata.findByIdAndDelete(req.params.id)
  res.send({ message: "Deleted!" })
})

module.exports = router