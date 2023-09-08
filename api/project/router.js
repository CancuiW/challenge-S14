// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Projects = require('./model')

router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(resource => {
            const output=resource.map(x=>{
                if (x.project_completed===0){
                    x.project_completed=false
                }else{
                    x.project_completed=true
                }
                return x
            })

            res.status(200).json(output)
        })
        .catch(next)


})

router.post('/', (req, res, next) => {

    Projects.postProjects(req.body)
        .then(resource => {
            if (resource.project_completed === 0) {
                resource.project_completed = false
            } else {
                resource.project_completed = true
            }

            res.status(201).json(resource)
        })
        .catch(next)


})











router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        sageAdvice: 'something went wrong inside the PROJECT router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router