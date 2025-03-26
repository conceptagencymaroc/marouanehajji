"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState<number | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (inView) {
      setLoaded(true)
    }
  }, [inView])

  const images = [
    "/images/marouane-1.png",
    "/images/marouane-2.png",
    "/images/marouane-3.png",
    "/images/marouane-4.png",
    "/images/marouane-5.png",
    "/images/marouane-6.png",
  ]

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setCurrentImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: number) => {
    if (currentImage === null) return

    const newIndex = currentImage + direction
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentImage(newIndex)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-32 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white inline-block border-b-4 border-amber-600 pb-2">
            Galerie
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
            Explorez les moments captivants de la carrière de Marouane Hajji
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={loaded ? "show" : "hidden"}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Marouane Hajji performance ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-medium">Performance {index + 1}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {currentImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-white hover:bg-white/10 rounded-full"
              onClick={() => navigateImage(-1)}
              disabled={currentImage === 0}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <motion.img
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={images[currentImage] || "/placeholder.svg"}
              alt={`Marouane Hajji performance ${currentImage + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-white hover:bg-white/10 rounded-full"
              onClick={() => navigateImage(1)}
              disabled={currentImage === images.length - 1}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

