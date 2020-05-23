
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([{vin:"WBAPM7C58AA093135",make:"Toyota",model:"MR2",mileage: 90900,transmission_type:"manual",title:null},
      {vin:"ML32A3HJ4EH433868",make:"Subaru",model:"Justy",mileage: 926500,transmission_type:"automatic",title:"new"},
      {vin:"WP0CB2A82CS552101",make:"Dodge",model:"Ram Van B150",mileage: 842100,transmission_type:"automatic",title:"unknown"},
      {vin:"SALGR2VF8EA242509",make:"GMC",model:"Sonoma",mileage: 559600,transmission_type:"manual",title:null},
      {vin:"3VW4A7AT8DM068160",make:"Chrysler",model:"Fifth Ave",mileage: 9800,transmission_type:"manual",title:"auction"}]);
    });
};
