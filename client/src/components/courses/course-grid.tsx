import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Course } from "@shared/schema";
import { motion } from "framer-motion";

type CourseGridProps = {
  courses: Course[];
};

export default function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <motion.div
          key={course.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{course.title}</CardTitle>
              <CardDescription>Duration: {course.duration}</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="mb-4 text-gray-600">{course.description}</p>

              <Accordion type="single" collapsible>
                <AccordionItem value="syllabus">
                  <AccordionTrigger>View Syllabus</AccordionTrigger>
                  <AccordionContent>{course.syllabus}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
