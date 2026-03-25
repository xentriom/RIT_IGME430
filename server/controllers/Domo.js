const DomoModel = require("../models/Domo.js");

const makerPage = async (req, res) => {
  return res.render("app");
};

const makeDomo = async (req, res) => {
  if (!req.body.name || !req.body.age) {
    return res.status(400).json({ error: "Both name and age are required!" });
  }

  const domoData = {
    name: req.body.name,
    age: req.body.age,
    owner: req.session.account._id,
    isPublic: req.body?.isPublic ?? true,
  };

  try {
    const newDomo = new DomoModel(domoData);
    await newDomo.save();
    return res.status(201).json({ name: newDomo.name, age: newDomo.age });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: "Domo already exists!" });
    }
    return res.status(400).json({ error: "An error occurred" });
  }
};

const getDomos = async (req, res) => {
  try {
    const query = { owner: req.session.account._id };
    const docs = await DomoModel.find(query).select("name age isPublic").lean().exec();
    return res.json({ domos: docs });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "An error occurred" });
  }
};

const getAllPublicDomos = async (req, res) => {
  try {
    const query = { isPublic: true };
    const docs = await DomoModel.find(query)
      .select("name age isPublic owner createdDate")
      .lean()
      .exec();
    return res.json({ domos: docs });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "An error occurred" });
  }
};

const updateDomoVisibility = async (req, res) => {
  if (!req.body._id || typeof req.body.isPublic !== "boolean") {
    return res.status(400).json({ error: "Both id and isPublic are required!" });
  }

  try {
    const domo = await DomoModel.findByIdAndUpdate(
      req.body._id,
      { isPublic: req.body.isPublic },
      { new: true },
    );

    return res.json({ name: domo.name, age: domo.age, isPublic: domo.isPublic });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "An error occurred" });
  }
};

module.exports = {
  makerPage,
  makeDomo,
  getDomos,
  getAllPublicDomos,
  updateDomoVisibility,
};
