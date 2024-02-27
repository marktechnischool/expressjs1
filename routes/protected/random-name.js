const express = require('express')
const { authenticateApiKey } = require('../../lib/helpers')
const Student = require('../../models/student-name')

const protectedVerificationRouter = express.Router()

protectedVerificationRouter.use(authenticateApiKey)

const getRandomName = async () => {
    const names = await Student.find().exec()
    const randomIndex = Math.floor(Math.random() * names.length)
    return names[randomIndex].name
}

protectedVerificationRouter.get('/student', async (req, resp) => {
    resp.json(await Student.find().exec())
})

protectedVerificationRouter.put('/student/:id', async (req, resp) => {
    try {
        await Student.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        resp.status(204).send()
    } catch (error) {
        resp.status(400).json({ message: error.message })
    }
})

protectedVerificationRouter.get('/student/:id', async (req, resp) => {
    resp.json(await Student.findById(req.params.id).exec())
})

protectedVerificationRouter.delete('/student/:id', async (req, resp) => {
    try {
        await Student.findByIdAndDelete(req.params.id).exec()
    } catch (error) {
        resp.status(400).json({ message: error.message })
    }
    resp.status(204).send()
})

protectedVerificationRouter.post('/student', async (req, resp) => {
    try {
        const student = new Student(req.body)
        await student.save()
        resp.status(201).json(student)
    } catch (error) {
        resp.status(400).json({ message: error.message })
    }
})

protectedVerificationRouter.get('/randomName', async (req, resp) => {
    resp.json({ randomName: await getRandomName() })
})

module.exports = protectedVerificationRouter