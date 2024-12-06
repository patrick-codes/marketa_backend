const express = require("express");
const asyncHandler = require("express-async-handler");
const category = require("../models/categories_model");

module.exports = {
  addCategory: asyncHandler(async (req, res) => {
    const { categoryName } = req.body;
    if (!categoryName) {
      res.status(400).json({ message: "Enter Category Name" });
    }
    const addCat = await category.create({
      categoryName,
    });

    res.status(200).json({ message: "Category added succesfully" });
    if (!addCat) {
      res.status(401).json({ message: "Error Occured" });
      throw new Error("Error Occured");
    }
  }),

  getCategoris: asyncHandler(async (req, res) => {
    const getCat = await category.find();
    res.status(200).json(getCat);
    if (!getCat) {
      res.status(404).json({ message: "No Categories Found" });
    }

    res.status(200).json(getCat);
  }),

  deleteCategory: asyncHandler(async (req, res) => {
    const findCat = await category.findById(req.params.id);

    if (!findCat) {
      res.status(404).json({ message: "No Category Found" });
    }

    const deleteCat = await category.deleteOne();
    res.status(200).json({ message: "Category deleted succesfully" });
  }),
};
