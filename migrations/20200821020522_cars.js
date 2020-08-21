exports.up =  async function(knex) {
  // "CREATE TABLE 'cars'"
  await knex.schema.createTable("cars", (table) => {
      table.increments("id")
      table.text("make").notNull()
      table.text("model").notNull()
      table.text("VIN").notNull()
      table.integer("mileage").notNull()
      table.text("transType")
      table.text("titleStatus")

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
