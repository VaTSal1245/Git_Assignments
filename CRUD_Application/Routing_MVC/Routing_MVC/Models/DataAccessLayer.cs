using System.Data;
using Microsoft.Data.SqlClient;
namespace Routing_MVC.Models
{
    public class DataAccessLayer : ICourses
    {
        private readonly string con;

        public DataAccessLayer(IConfiguration configuration)
        {
            con = configuration.GetConnectionString("Conn");
        }

        public void GetStudent()
        {
            //using (SqlConnection conn = new SqlConnection(this.conn)) {

            //}   
        }

        public IEnumerable<Courses> GetAllCourses()
        {
            List<Courses> courses = new List<Courses>();
            try
            {
                using (SqlConnection conn = new SqlConnection(con))
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
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return courses;
        }
    }
}
