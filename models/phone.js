const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
      min: 1970,
      max: new Date().getFullYear(),
    },
    ram: {
      type: Number,
      required: true,
      min: 1,
    },
    cpu: {
      type: String,
      required: true,
    },
    screenSize: {
      type: Number,
      required: true,
      min: 0.1,
    },
    nfc: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: mongoose.ObjectId,
      ref: 'User',
    },
  },
  { versionKey: false }
);

phoneSchema.set('toJSON', {
  transform: (doc, ret) => {
    if (ret.screenSize && ret.screenSize.toString) {
      ret.screenSize = parseFloat(ret.screenSize.toString());
    }
    return ret;
  },
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
