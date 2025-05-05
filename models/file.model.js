const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  originalName: String,
  mimeType: String,
  size: Number,
  buffer: Buffer, // stores the actual file data
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UploadedFile", FileSchema);