using CRUD_Application.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Data;
using System.Configuration;

namespace CRUD_Application.Repo
{
    public class Repository
    {
        string str = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
        public IEnumerable<Courses> GetCourses()
        {
            List<Courses> courses = new List<Courses>();
            using (SqlConnection conn = new SqlConnection(str))
            {
                SqlDataAdapter da = new SqlDataAdapter("spGetAllCourses", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure; 
                DataSet ds = new DataSet();
                da.Fill(ds);

                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    courses.Add(new Courses
                    {
                        CourseID = Convert.ToInt32(dr["CourseID"]),   
                        CourseName = dr["CourseName"].ToString(),
                        Credits = Convert.ToInt32(dr["Credits"])
                    });
                }
            }
                return courses;
        }

        public Courses GetCourseById(int id)
        {
            Courses course = null;

            using (SqlConnection conn = new SqlConnection(str))
            {
                SqlDataAdapter da = new SqlDataAdapter("spGetCourseById", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;

                da.SelectCommand.Parameters.AddWithValue("@CourseID", id);

                DataSet ds = new DataSet();
                da.Fill(ds); 

                if (ds.Tables[0].Rows.Count > 0)
                {
                    DataRow dr = ds.Tables[0].Rows[0];

                    course = new Courses
                    {
                        CourseID = Convert.ToInt32(dr["CourseID"]),
                        CourseName = dr["CourseName"].ToString(),
                        Credits = Convert.ToInt32(dr["Credits"])
                    };
                }
            }

            return course;
        }

        public void AddCourse(Courses course)
        {
            using (SqlConnection conn = new SqlConnection(str))
            {
                SqlCommand cmd = new SqlCommand("spInsertCourses", conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@CourseID", course.CourseID);
                cmd.Parameters.AddWithValue("@CourseName", course.CourseName);
                cmd.Parameters.AddWithValue("@Credits", course.Credits);
                conn.Open();
                cmd.ExecuteNonQuery();
            }
        }

        public void UpdateCourse(Courses course)
        {
            using (SqlConnection conn = new SqlConnection(str))
            {
                SqlCommand cmd = new SqlCommand("spUpdateCourses", conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@CourseName", course.CourseName);
                cmd.Parameters.AddWithValue("@Credits", course.Credits);
                cmd.Parameters.AddWithValue("@CourseId", course.CourseID);
                conn.Open();
                cmd.ExecuteNonQuery();
            }
        }

        public void DeleteCourse(int courseId) {
            using (SqlConnection conn = new SqlConnection(str))
            {
                SqlCommand cmd = new SqlCommand("spDeleteCourses", conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@CourseID", courseId);
                conn.Open();
                cmd.ExecuteNonQuery();
            }
        }
    }
}