using Microsoft.AspNetCore.Mvc;
using Routing_MVC.Models;

namespace Routing_MVC.Controllers
{
    public class CoursesController : Controller
    {

        private readonly ICourses _courses;

        private readonly ILogger<CoursesController> _logger;

        public CoursesController(ILogger<CoursesController> logger, ICourses courses) {
            _courses = courses;
            _logger = logger;
        }

        public IActionResult Index2()
        {
            var data = _courses.GetAllCourses();
            return View(data);
        }
        public IActionResult Index()
        {
            return View();
        }

    }
}
