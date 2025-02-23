import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Gallery } from "@shared/schema";
import { motion } from "framer-motion";

type GalleryGridProps = {
  items: Gallery[];
  category?: string;
};

export default function GalleryGrid({ items, category }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);

  const filteredItems = category 
    ? items.filter(item => item.category === category)
    : items;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedImage(item)}
            >
              <CardContent className="p-0">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </CardContent>
              <CardContent className="p-4">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.category}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        {selectedImage && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedImage.title}</DialogTitle>
              <DialogDescription>{selectedImage.category}</DialogDescription>
            </DialogHeader>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full h-auto"
            />
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
