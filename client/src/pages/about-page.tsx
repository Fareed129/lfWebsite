import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Users,
  Clock,
  TrendingUp,
  LaptopIcon,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          {/* Mission & Vision */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-gray-600">
                    To provide quality IT education that empowers students with practical skills
                    and knowledge required in today's digital world. We strive to create
                    industry-ready professionals through hands-on training and personalized
                    attention.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                  <p className="text-gray-600">
                    To become the leading IT education institute in Uttarakhand, recognized
                    for excellence in teaching, innovation, and student success. We aim to
                    bridge the gap between education and industry requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Teaching Methodology */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Teaching Methodology</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-primary">•</span>
                    <p>Practical-oriented learning with hands-on training</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary">•</span>
                    <p>Small batch sizes for personalized attention</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary">•</span>
                    <p>Regular assessments and progress tracking</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary">•</span>
                    <p>Industry-relevant curriculum updated regularly</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          {/* Why Choose Us */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Expert Faculty</h3>
                    </div>
                    <p className="text-gray-600">
                      Learn from industry professionals with years of practical experience
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Updated Curriculum</h3>
                    </div>
                    <p className="text-gray-600">
                      Course content aligned with latest industry standards and technologies
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Small Batch Size</h3>
                    </div>
                    <p className="text-gray-600">
                      Limited students per batch ensuring individual attention and better learning
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Flexible Timings</h3>
                    </div>
                    <p className="text-gray-600">
                      Multiple batches available to accommodate your schedule
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <LaptopIcon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Practical Training</h3>
                    </div>
                    <p className="text-gray-600">
                      Hands-on experience with real-world projects and industry tools
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Career Support</h3>
                    </div>
                    <p className="text-gray-600">
                      Placement assistance and career guidance to help you succeed
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}