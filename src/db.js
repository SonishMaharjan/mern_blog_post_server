import knexJs from "knex"
import bookshelfJs from "bookshelf"

import knexConfig from "./knexfile.js"


/**
 * Database connection
 */

 const knex = knexJs(knexConfig.development)
 const bookshelf = bookshelfJs(knex)

export default bookshelf;