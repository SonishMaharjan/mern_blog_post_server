/**
 * Create table `users`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string("email").notNull().unique();
    table.string("first_name").notNull();
    table.string("last_name").notNull();
    table.string("password").notNull();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table.timestamp('deleted_at');
  });
}

/**
 * Drop `users`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function down(knex) {
  return knex.schema.dropTable('users');
}

module.exports = {
    up,
    down
}