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
      businessName ||
      businessType ||
      category ||
      address ||
      region ||
      city ||
      contact
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
    res
      .status(200)
      .json({ message: "Business Info Created Successfully" }, addInfo);
  }),

  updateBusinessInfo: asyncHandler(async (req, res) => {}),

  deleteBusinessInfo: asyncHandler(async (req, res) => {}),

  getBusinessInfos: asyncHandler(async (req, res) => {
    const getInfo = await businessInfo.find();
    res.status(200).json(getInfo);
  }),

  getSingleBusinessInfo: asyncHandler(async (req, res) => {
    const singleInfo = await businessInfo.findById(req.params.id);

    if (!singleInfo) {
      res.status(400);
      throw new Error("add business info");
    }

    res.status(200).json(singleInfo);
  }),
};