exports.seed = async function(knex) {
 await knex("cars").truncate()

 await knex("cars").insert([
   {make: "Toyota", model: "Corola", VIN: "1HGBH41JXMN109186", mileage: 20000, transType:"automatic", titleStatus: "clean"},
   {make: "Hyundai", model: "Elantra", VIN: "2CBJK21HPCG123456", mileage: 24000, transType: "automatic", titleStatus: "clean"},
   {make: "Ford", model:"Focus", VIN: "3ABCP12DEFG789012", mileage: 123000, transType: "manual", titleStatus: "salvage" },
   {make: "Audi", model: "Q7", VIN: "4DCEH23GHIP124578", mileage: 2000, transType: "automatic", titleStatus: "clean"},
   {make: "Honda", model: "CRV", VIN:"5ABCD12EFGH098765", mileage: 60000, transType: "automatic", titleStatus: "clean"},
 ])
};
