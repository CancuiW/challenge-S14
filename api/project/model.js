// build your `Project` model here
const db = require('./../../data/dbConfig')

async function getProjects() {
    return await db('projects')
}

async function postProjects(item) {
    const [postNum] = await db('projects').insert(item)
    const result = await db('projects').where('project_id', postNum).first()
    return result
}
module.exports = {
    getProjects,
    postProjects
}