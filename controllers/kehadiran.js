const Kehadiran = require("../models/kehadiran");

const list = async (req, res) => {
  const tables = await Kehadiran.find();

  res.status(200).json({
    message: "success",
    data: tables,
  });
};

const show = async (req, res) => {
  const { id } = req.params;
  const table = await Kehadiran.findById(id);

  res.status(200).json({
    message: "success",
    data: table,
  });
};
const create = async (req, res) => {
  const { body } = req;
  const table = await Kehadiran.create(body);

  res.status(201).json({
    message: "success",
    data: table,
  });
};
const update = async (req, res) => {
  const table = await Kehadiran.findByIdAndUpdate(id, body, { new: true });

  res.status(202).json({
    message: "success",
    data: table,
  });
};
const remove = async (req, res) => {
  const { id } = req.params;
  const table = await Kehadiran.findByIdAndDelete(id);

  res.status(204).json({
    message: "success",
    data: table,
  });
};

module.exports = { list, show, create, update, remove };
