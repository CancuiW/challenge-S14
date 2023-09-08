// build your `/api/tasks` router here

const express = require('express')
const router = express.Router()
const Tasks = require('./model')

router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(resource => {
            const output = resource.map(x => {
                if (x.task_completed === 0) {
                    x.task_completed = false
                } else {
                    x.task_completed = true
                }
                return x
            })

            res.status(200).json(output)
        })
        .catch(next)


})

router.post('/', (req, res, next) => {

    Tasks.postTask(req.body)
        .then(resource => {
            if (resource.task_completed === 0) {
                resource.task_completed = false
            } else {
                resource.task_completed = true
            }

            res.status(201).json(resource)
        })
        .catch(next)


})









router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        sageAdvice: 'something went wrong inside the TASK router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router
