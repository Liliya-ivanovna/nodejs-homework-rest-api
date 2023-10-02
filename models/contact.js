const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");
const {
  nameRegExp,
  phoneRegExp,
} = require("../utils/validation/contactValidation");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
      match: RegExp(nameRegExp),
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      match: RegExp(phoneRegExp),
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

module.exports = { Contact };
