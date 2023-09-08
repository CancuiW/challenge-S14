/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = async function(knex) {
    await knex.schema.createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.string('project_name', 128).notNullable().unique();
        tbl.string('project_description', 255);
        tbl.boolean('project_completed').defaultTo('false')  
    })
        .createTable('resources', tbl => {
            tbl.increments("resource_id");
            tbl.string('resource_name', 125).notNullable().unique();
            tbl.string('resource_description', 255)

        })
        .createTable('tasks', tbl => {
            tbl.increments("task_id");
            tbl.string('task_description', 255).notNullable().unique();
            tbl.string('task_notes', 255)
            tbl.boolean('task_completed').defaultTo('false') ;
            tbl.integer('project_id').notNullable().unsigned()
                .references('project_id').inTable('projects')
                .onDelete('RESTRICT').onUpdate("RESTRICT")
        })
        .createTable('project_resources', tbl => {
            tbl.increments("project_resource_id");
            tbl.integer('project_id').unsigned().notNullable()
                .references('project_id').inTable('projects')
                .onDelete('RESTRICT').onUpdate("RESTRICT")
            tbl.integer('resource_id').unsigned().notNullable()
                .references('resource_id').inTable('resources')
                .onDelete('RESTRICT').onUpdate("RESTRICT")
        })

 };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
  
};
