const mongoose = require("mongoose");

/**
 * status: hadir, ijin, sakit, alfa
 */

const TableSchema = new mongoose.Schema({
  tanggal: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  nis: {
    type: String,
    required: true,
  },
});

const Table = mongoose.model("Kehadiran", TableSchema);

module.exports = Table;
