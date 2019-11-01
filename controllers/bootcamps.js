// @desc    Get all bootcamps in collection
// @route   GET method to /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Show all Bootcamps',
        // hello: req.hello
      });
};
// @desc    Get single bootcamp
// @route   GET method to /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Get this bootcamp with id: ${req.params.id}`
      });
};
// @desc    Create a new bootcamp
// @route   POST method to /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Create a new bootcamp'
      });
};
// @desc    Edit an existing bootcamp
// @route   PUT method to /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update bootcamp ${req.params.id}`
      });
};
// @desc    Delete a bootcamp
// @route   DELETE method to /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Deleted bootcamp ${req.params.id}`
      });
};