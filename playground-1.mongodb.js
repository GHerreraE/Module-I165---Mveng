// 2.1
use("testdb");

// 2.2
db.createCollection("users");

// 2.3
db.users.insertOne({
  firstname: "Doe",
  lastname: "John",
});

// 2.4
db.users.insertMany([
  { firstname: "Paola", lastname: "Müller" },
  { firstname: "Paul", lastname: "Zirris" },
  { firstname: "Josette", lastname: "Obama" },
  { firstname: "Paola", lastname: "Pinto" },
  { firstname: "Julie", lastname: "Sbinden" },
]);

// 2.5
db.users.countDocuments();

// 2.6
db.users.findOne({ firstname: "Paola" });

// 2.7
db.users.find({ firstname: "Paola" }).toArray();

// 2.8
db.users.countDocuments({ firstname: "Paola" });

// 2.9
db.users.deleteOne({ lastname: "Zirris" });

// 2.10
db.users.deleteMany({ firstname: "Paola" });

// 2.11
db.dropDatabase("db_test");
