
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            School of IT & Language
          </h1>
          <h3 className="text-2xl md:text-4xl font-bold mb-6">
            Best Computer Coaching in Haldwani
          </h3>

          <div className="text-xl mb-8 text-blue-100 h-[60px]">
            <TypeAnimation
              sequence={[
                'Master IT skills and shape your future!',
                2000,
                'Join the best computer coaching in Haldwani!',
                2000,
                'Learn. Innovate. Succeed with LINGUA FRANCA SCHOOL OF IT.',
                2000,
                'Transform your career with hands-on training!',
                2000,
                'From beginner to expert – Start your IT journey today!',
                2000,
                'Upgrade your skills with industry-relevant courses!',
                2000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          <div className="flex gap-4">
            <Link href="/admission">
              <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400">
                Enroll Now
              </Button>
            </Link>

            <Link href="/courses">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-black hover:bg-yellow-500 hover:text-blue-900 transition-colors hover:border-yellow-500"
              >
                View Courses
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
