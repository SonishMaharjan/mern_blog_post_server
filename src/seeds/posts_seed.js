/**
 * Delete existing entries and seed values for `posts`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function seed(knex) {
  return knex("posts")
    .del()
    .then(() => {
      return knex("posts").insert([
        {
          title: "How i learn node",
          body: "This is the blog about how i learn the node",
          user_id: 2,
        },
        {
          title: "How i learn React",
          body: "This is the blog about how i learn the React",
          user_id: 2,
        },

        {
          title: "How i learn Cyclein",
          body: "This is the blog about how i learn the node",
          user_id: 3,
        },

        {
          title: "How i learn football",
          body: "This is the blog about how i learn the football",
          user_id: 3,
        },
      ]);
    });
}

module.exports = { seed };
