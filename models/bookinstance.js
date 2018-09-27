var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true }, // reference to the associated book
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ["Disponible", "Maintenance", "En prêt", "Réservé"], default: "Maintenance"},
    due_back: {type: Date, default: Date.now}
  }
);

// Virtual for bookinstance's URL
BookInstanceSchema
.virtual("url")
.get(() => {
  return "/catalog/bookinstance/" + this._id;
});

// Export model
module.exports = mongoose.model("BookInstance", BookInstanceSchema);
