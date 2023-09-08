// build your `/api/resource` router here
const express = require('express')
const router = express.Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resource => {
           
            res.status(200).json(resource)
        })
        .catch(next)
   

})
//postResources
router.post('/', (req, res, next) => {
    
    Resource.postResources(req.body)
        .then(resource => {

            res.status(201).json(resource)
        })
        .catch(next)


})








router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        sageAdvice: 'something went wrong inside the RESOURCE router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router
