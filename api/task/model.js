// build your `Task` model here

const db = require('./../../data/dbConfig')

async function getTasks() {
    const result= await db('tasks as t')
                       .leftJoin('projects as p','t.project_id','p.project_id')
     return result                  
}

//{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}
async function postTask(item) {
    const [postNum] = await db('tasks').insert(item)
    const result = await db('tasks').where('task_id', postNum).first()
    return result
}
module.exports = {
    getTasks,
    postTask
}