/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const projects=[
  { project_name: 'Web Portal', project_description: 'Development of a web portal' },
  { project_name: ' Mobile App ', project_description: 'Mobile app development ' },
  { project_name: 'Database Upgrade', project_description: 'Upgrade database system ' },
]

const resources=[
  { resource_name: 'Alice Johnson', resource_description:'Senior UI/UX Designer '},
  { resource_name: 'Bob Smith', resource_description: 'Backend Developer ' },
  { resource_name: 'Carol Davis ', resource_description: 'Mobile App Developer ' },
]

const tasks=[
  { task_description: 'Design UI', task_notes: 'User interface design', project_id :1},
  { task_description: 'Backend Development', task_notes: 'Develop backend logic', project_id: 1 },
  { task_description: 'Mobile App UI Design', task_notes: 'Design mobile app UI', project_id: 2 },
  { task_description: 'Database Migration', task_notes: 'Migrate database to new version', project_id: 3 },
]

const project_resources=[
  { project_id:1, resource_id:2 },
  { project_id:1, resource_id:3 },
  { project_id:2, resource_id:1 },
  { project_id:3, resource_id:2 },
]






exports.seed = async function(knex) {
  await knex('projects').insert(projects);
  await knex('resources').insert(resources);
  await knex('tasks').insert(tasks);
  await knex('project_resources').insert(project_resources);
};
