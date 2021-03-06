const express = require('express');
const router = express.Router();


//Controllers import
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload
} = require('../controllers/bootcamps');

//Include other resource routers
const courseRouter = require('./courses');

//re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router
.route('/radius/:zipcode/:distance')
.get(getBootcampsInRadius);

router
.route('/:id/photo')
.put(bootcampPhotoUpload);

router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)   
  .delete(deleteBootcamp);

module.exports = router;
