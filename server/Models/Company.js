const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Companies", CompanySchema);
