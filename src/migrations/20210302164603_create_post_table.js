/**
 * Create table `posts`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function up(knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments();
    table.string("title", 200).notNull();
    table.string("body");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
    table.timestamp("created_at").notNull().defaultTo(knex.raw("now()"));
    table.timestamp("updated_at").notNull().defaultTo(knex.raw("now()"));
    table.timestamp("deleted_at");
  });
}

/**
 * Drop `posts`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function down(knex) {
  return knex.schema.dropTable("posts");
}

module.exports = {
  up,
  down,
};
