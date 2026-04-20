using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CRUD_Application.Repo;
using CRUD_Application.Models;

namespace CRUD_Application.Controllers
{
    public class CoursesController : Controller
    {
        // GET: Courses
        Repository repo = new Repository();
        public ActionResult Index()
        {
            var Courses = repo.GetCourses();
            return View(Courses);
        }

        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Courses course)
        {
            //int i = repo.AddCourse(course);
            repo.AddCourse(course);
            //ViewBag.Msg = "Inserted ID = " + i;
            return RedirectToAction("Index");
        }
    
        public ActionResult Edit(int id)
        {
            var course = repo.GetCourseById(id);
            return View(course);
        }


        [HttpPost]
        public ActionResult Edit(Courses course)
        {
            repo.UpdateCourse(course);
            return RedirectToAction("Index");
        }

        public ActionResult Delete(int id)
        {
            repo.DeleteCourse(id);
            return RedirectToAction("Index");
        }
    }
}