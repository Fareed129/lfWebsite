import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Course } from "@shared/schema";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Singh",
    text: "The quality of education at Lingua Franca is exceptional. I learned so much in their Python programming course.",
  },
  {
    name: "Rahul Kumar",
    text: "Great faculty and practical approach to teaching. The web development course helped me land my first job.",
  },
  {
    name: "Anita Sharma",
    text: "Very professional environment and well-structured courses. Highly recommended for anyone looking to build a career in IT.",
  },
];

export default function HomePage() {
  const { data: courses } = useQuery<Course[]>({ 
    queryKey: ["/api/courses"]
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Courses Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses?.slice(0, 3).map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{course.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Student Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <p className="italic text-gray-600 mb-4">"{testimonial.text}"</p>
                      <p className="font-semibold">- {testimonial.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
