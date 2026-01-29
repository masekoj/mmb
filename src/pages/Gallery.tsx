import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNavBar from "@/components/BottomNavBar";

// Import all project images
import masonry1 from "@/assets/masonry-1.jpeg";
import masonry2 from "@/assets/masonry-2.jpeg";
import masonry3 from "@/assets/masonry-3.jpeg";
import masonry4 from "@/assets/masonry-4.jpeg";
import masonry5 from "@/assets/masonry-5.jpeg";
import timber1 from "@/assets/timber-1.jpeg";
import timber2 from "@/assets/timber-2.jpeg";
import timber3 from "@/assets/timber-3.jpeg";
import timber4 from "@/assets/timber-4.jpeg";
import timber5 from "@/assets/timber-5.jpeg";
import decking1 from "@/assets/decking-1.jpeg";
import decking2 from "@/assets/decking-2.jpeg";
import decking3 from "@/assets/decking-3.jpeg";
import decking4 from "@/assets/decking-4.jpeg";
import decking5 from "@/assets/decking-5.jpeg";
import roofing1 from "@/assets/roofing-1.jpeg";
import roofing2 from "@/assets/roofing-2.jpeg";
import roofing3 from "@/assets/roofing-3.jpeg";
import roofing4 from "@/assets/roofing-4.jpeg";
import roofing5 from "@/assets/roofing-5.jpeg";
import painting1 from "@/assets/painting-1.jpeg";
import painting2 from "@/assets/painting-2.jpeg";
import painting3 from "@/assets/painting-3.jpeg";
import painting4 from "@/assets/painting-4.jpeg";
import painting5 from "@/assets/painting-5.jpeg";
import waterproofing1 from "@/assets/waterproofing-1.jpeg";
import waterproofing2 from "@/assets/waterproofing-2.jpeg";
import waterproofing3 from "@/assets/waterproofing-3.jpeg";
import waterproofing4 from "@/assets/waterproofing-4.jpeg";
import waterproofing5 from "@/assets/waterproofing-5.jpeg";
import alterations1 from "@/assets/alterations-1.jpeg";
import alterations2 from "@/assets/alterations-2.jpeg";
import alterations3 from "@/assets/alterations-3.jpeg";
import alterations4 from "@/assets/alterations-4.jpeg";
import alterations5 from "@/assets/alterations-5.jpeg";
import skimming1 from "@/assets/skimming-1.jpeg";
import skimming2 from "@/assets/skimming-2.jpeg";
import skimming3 from "@/assets/skimming-3.jpg";
import skimming4 from "@/assets/skimming-4.jpeg";
import skimming5 from "@/assets/skimming-5.jpeg";
import stonework1 from "@/assets/stonework-1.jpeg";
import stonework2 from "@/assets/stonework-2.jpeg";
import stonework3 from "@/assets/stonework-3.jpeg";
import stonework4 from "@/assets/stonework-4.jpeg";
import stonework5 from "@/assets/stonework-5.jpeg";
import vinyl1 from "@/assets/vinyl-1.jpeg";
import vinyl2 from "@/assets/vinyl-2.jpeg";
import vinyl3 from "@/assets/vinyl-3.jpeg";
import vinyl4 from "@/assets/vinyl-4.jpeg";
import vinyl5 from "@/assets/vinyl-5.jpeg";
import staircase1 from "@/assets/staircase-1.jpeg";
import staircase2 from "@/assets/staircase-2.jpeg";
import staircase3 from "@/assets/staircase-3.jpeg";
import staircase4 from "@/assets/staircase-4.jpeg";
import staircase5 from "@/assets/staircase-5.jpeg";
import shower1 from "@/assets/shower-1.jpg";
import shower2 from "@/assets/shower-2.jpg";
import shower3 from "@/assets/shower-3.jpg";
import shower4 from "@/assets/shower-4.jpg";
import shower5 from "@/assets/shower-5.jpg";
import paving1 from "@/assets/paving-1.jpeg";
import paving2 from "@/assets/paving-2.jpeg";
import paving3 from "@/assets/paving-3.jpeg";
import paving4 from "@/assets/paving-4.jpeg";
import paving5 from "@/assets/paving-5.jpeg";
import plastering1 from "@/assets/plastering-1.jpeg";
import plastering2 from "@/assets/plastering-2.jpeg";
import plastering3 from "@/assets/plastering-3.jpeg";
import plastering4 from "@/assets/plastering-4.jpeg";
import plastering5 from "@/assets/plastering-5.jpeg";
import tiling1 from "@/assets/tiling-1.jpeg";
import tiling2 from "@/assets/tiling-2.jpeg";
import tiling3 from "@/assets/tiling-3.jpeg";
import tiling4 from "@/assets/tiling-4.jpeg";
import tiling5 from "@/assets/tiling-5.jpeg";
import tgFlooring1 from "@/assets/tg-flooring-1.jpeg";
import tgFlooring2 from "@/assets/tg-flooring-2.jpeg";
import tgFlooring3 from "@/assets/tg-flooring-3.jpeg";
import tgFlooring4 from "@/assets/tg-flooring-4.jpeg";
import tgFlooring5 from "@/assets/tg-flooring-5.jpeg";
import daybed1 from "@/assets/daybed-1.jpeg";
import daybed2 from "@/assets/daybed-2.jpeg";
import daybed3 from "@/assets/daybed-3.jpeg";
import daybed4 from "@/assets/daybed-4.jpeg";
import daybed5 from "@/assets/daybed-5.jpeg";

interface GalleryCategory {
  name: string;
  images: string[];
}

const categories: GalleryCategory[] = [
  { name: "All", images: [] },
  { name: "Masonry", images: [masonry1, masonry2, masonry3, masonry4, masonry5] },
  { name: "Timber", images: [timber1, timber2, timber3, timber4, timber5] },
  { name: "Decking", images: [decking1, decking2, decking3, decking4, decking5] },
  { name: "Roofing", images: [roofing1, roofing2, roofing3, roofing4, roofing5] },
  { name: "Painting", images: [painting1, painting2, painting3, painting4, painting5] },
  { name: "Waterproofing", images: [waterproofing1, waterproofing2, waterproofing3, waterproofing4, waterproofing5] },
  { name: "Alterations", images: [alterations1, alterations2, alterations3, alterations4, alterations5] },
  { name: "Skimming", images: [skimming1, skimming2, skimming3, skimming4, skimming5] },
  { name: "Stonework", images: [stonework1, stonework2, stonework3, stonework4, stonework5] },
  { name: "Vinyl Flooring", images: [vinyl1, vinyl2, vinyl3, vinyl4, vinyl5] },
  { name: "Staircase", images: [staircase1, staircase2, staircase3, staircase4, staircase5] },
  { name: "Shower", images: [shower1, shower2, shower3, shower4, shower5] },
  { name: "Paving", images: [paving1, paving2, paving3, paving4, paving5] },
  { name: "Plastering", images: [plastering1, plastering2, plastering3, plastering4, plastering5] },
  { name: "Tiling", images: [tiling1, tiling2, tiling3, tiling4, tiling5] },
  { name: "T&G Flooring", images: [tgFlooring1, tgFlooring2, tgFlooring3, tgFlooring4, tgFlooring5] },
  { name: "Day Bed", images: [daybed1, daybed2, daybed3, daybed4, daybed5] },
];

// Combine all images for "All" category
categories[0].images = categories.slice(1).flatMap(cat => cat.images);

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const currentImages = categories.find(cat => cat.name === activeCategory)?.images || [];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % currentImages.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + currentImages.length) % currentImages.length);
    }
  };

  return (
    <>
      <Helmet>
        <title>Project Gallery | Maseko Master Builders</title>
        <meta
          name="description"
          content="Browse our extensive gallery of completed construction projects including masonry, roofing, painting, and more."
        />
      </Helmet>

      <div className="min-h-screen bg-background pb-20 lg:pb-0">
        <Header />
        <BottomNavBar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-4 uppercase tracking-wide">
                Our Work
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                Project <span className="text-secondary">Gallery</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our portfolio of completed projects showcasing quality craftsmanship.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.name
                      ? "bg-secondary text-secondary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-secondary/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Image Grid */}
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {currentImages.map((image, index) => (
                  <motion.div
                    key={image}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image}
                      alt={`${activeCategory} project ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-background text-sm font-medium">View</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </main>

        <Footer />

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                className="absolute top-6 right-6 text-background hover:text-secondary transition-colors z-10"
                onClick={closeLightbox}
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-background hover:text-secondary transition-colors p-2"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-background hover:text-secondary transition-colors p-2"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={currentImages[selectedImage]}
                alt="Gallery image"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-background/80 text-sm">
                {selectedImage + 1} / {currentImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Gallery;
