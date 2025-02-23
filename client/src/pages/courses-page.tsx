import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CourseGrid from "@/components/courses/course-grid";
import { Course } from "@shared/schema";
import { motion } from "framer-motion";

export default function CoursesPage() {
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of professional IT courses designed to help
              you build a successful career in technology.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            courses && <CourseGrid courses={courses} />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
