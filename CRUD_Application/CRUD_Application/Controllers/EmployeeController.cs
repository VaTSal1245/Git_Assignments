using CRUD_Application.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRUD_Application.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Details()
        {
            Employee emp = new Employee()
            {
                Id = 101,
                Name = "John Doe",
                Salary = "50000",
            };
            return View(emp);
        }
    }
}