const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResonse');

// @desc    Get all bootcamps in collection
// @route   GET method to /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps
    });
  } catch (error) {
   next(err);
  }
};

// @desc    Get single bootcamp
// @route   GET method to /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
     return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
    }
    res.status(200).json({
      success: true,
      data: bootcamp
    });
  } catch (err) {
   next(err);
  }
};

// @desc    Create a new bootcamp
// @route   POST method to /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    next(err);
  }
};

// @desc    Edit an existing bootcamp
// @route   PUT method to /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({
      success: true,
      dat: bootcamp,
      msg: `Update bootcamp ${req.params.id}`
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete a bootcamp
// @route   DELETE method to /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
      
    }
    res.status(200).json({
      success: true,
      data: {},
      msg: `Deleted bootcamp ${req.params.id}`
    });
  } catch (err) {
    next(err);
  }
};
