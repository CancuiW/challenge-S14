// build your `Resource` model here
const db=require('./../../data/dbConfig')

async function getResources(){
    return await db('resources')
}
//{"resource_id":1,"resource_name":"foo","resource_description":null}
async function postResources(item) {
    const [postNum]=await db('resources').insert(item)
    const result = await db('resources').where('resource_id', postNum).first()
    return result
}
module.exports={
    getResources,
    postResources
}