/**
 * Delete existing entries and seed values for `users`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function seed(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          email: 'sonish@email.com',
          first_name: 'Sonish', 
          last_name: 'Maharjan',
          password: "mypassword"
        },
        {
          email: 'user@email.com',
          first_name: 'User', 
          last_name: 'Second',
          password: "mypassword"
        },
        {
          email: 'admin@email.com',
          first_name: 'Admin', 
          last_name: 'User',
          password: "mypassword"
        },
      ]);
    });
}

module.exports = {seed}