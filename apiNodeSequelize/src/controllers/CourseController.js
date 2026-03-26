const CourseService = require("../services/CourseService.js");
const Controller = require("./Controller.js");
const courseService = new CourseService();

class CourseController extends Controller {
  constructor() {
    super(courseService);
  }
}

module.exports = CourseController;
