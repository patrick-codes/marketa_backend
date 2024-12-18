const express = require("express");
const asyncHandler = require("express-async-handler");
const businessInfo = require("../models/business_info_model");

//|| !

module.exports = {
  addBusinessInfo: asyncHandler(async (req, res) => {
    const {
      businessName,
      businessType,
      category,
      address,
      region,
      city,
      contact,
    } = req.body;

    if (
      !businessName ||
      !businessType ||
      !category ||
      !address ||
      !region ||
      !city ||
      !contact
    ) {
      res.status(400).json({ message: "All fields are mandatory" });
      throw new Error("All fields are mandatory");
    }

    const addInfo = await businessInfo.create({
      businessName,
      businessType,
      category,
      address,
      region,
      city,
      contact,
    });

    res.status(200).json({ message: "Business Info Created Successfully" });
  }),

  updateBusinessInfo: asyncHandler(async (req, res) => {
    const updateInfo = await businessInfo.findById(req.params.id);

    if (!updateInfo) {
      res.status(404).json({ message: "Info not found" });
    }
    const update = await businessInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(update);
    res.status(200).json({ message: "Business Info Updated" });
  }),

  deleteBusinessInfo: asyncHandler(async (req, res) => {
    const deleteInfo = await businessInfo.findById(req.params.id);

    if (!deleteInfo) {
      res.status(404).json({ message: "No Info found" });
    }

    await deleteInfo.deleteOne();
    res.status(200).json({ message: "Info Deleted.." });
  }),

  getBusinessInfos: asyncHandler(async (req, res) => {
    const getInfo = await businessInfo.find();
    if (!getInfo) {
      res.status(404).json({ message: "No info found" });
    }
    res.status(200).json(getInfo);
  }),

  getSingleBusinessInfo: asyncHandler(async (req, res) => {
    const singleInfo = await businessInfo.findById(req.params.id);

    if (!singleInfo) {
      res.status(404).json({ message: "Error: No info found" });
      throw new Error("Erro: No info found");
    }

    res.status(200).json(singleInfo);
  }),
};
