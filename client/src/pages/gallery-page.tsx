import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import GalleryGrid from "@/components/gallery/gallery-grid";
import { Gallery } from "@shared/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const categories = [
  "Classroom Activities",
  "Workshops",
  "Student Achievements",
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const { data: galleryItems, isLoading } = useQuery<Gallery[]>({
    queryKey: ["/api/gallery"],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>

            <div className="max-w-xs mx-auto mb-8">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            galleryItems && (
              <GalleryGrid
                items={galleryItems}
                category={selectedCategory === "all" ? undefined : selectedCategory}
              />
            )
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}