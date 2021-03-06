/**
 * Delete existing entries and seed values for `users`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function seed(knex) {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          id: 1,
          email: "sonish@email.com",
          first_name: "Sonish",
          last_name: "Maharjan",
          password: "mypassword",
        },
        {
          id: 2,
          email: "user@email.com",
          first_name: "User",
          last_name: "Second",
          password: "mypassword",
        },
        {
          id: 3,
          email: "admin@email.com",
          first_name: "Admin",
          last_name: "User",
          password: "mypassword",
        },
      ]);
    });
}

module.exports = { seed };
