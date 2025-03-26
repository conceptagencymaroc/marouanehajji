"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setLoaded(true)

    // Start video playback when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-zinc-950 z-0"></div>

        {/* Main mosaic pattern background with animation */}
        <motion.div
          className="absolute inset-0 bg-repeat z-10"
          style={{
            backgroundImage: "url('/images/mosaic-pattern-2.jpeg')",
            backgroundSize: "500px 500px",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.2,
            backgroundPosition: ["0px 0px", "20px 20px"],
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            opacity: { duration: 2 },
          }}
        ></motion.div>

        {/* Dark overlay to control pattern visibility */}
        <div className="absolute inset-0 bg-zinc-950/60 z-15"></div>

        {/* Artist image background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10 opacity-60 mix-blend-overlay"
          style={{ backgroundImage: "url('/images/marouane-1.png')" }}
        ></div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/70 z-20"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.05),transparent_50%)]"></div>
        </div>

        {/* Animated mosaic elements */}
        <div className="absolute inset-0 z-25 overflow-hidden">
          {/* Top left pattern */}
          <motion.div
            className="absolute -top-20 -left-20 w-96 h-96 opacity-20"
            style={{
              backgroundImage: "url('/images/mosaic-pattern-2.jpeg')",
              backgroundSize: "300px 300px",
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 120,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          ></motion.div>

          {/* Bottom right pattern */}
          <motion.div
            className="absolute -bottom-20 -right-20 w-96 h-96 opacity-20"
            style={{
              backgroundImage: "url('/images/mosaic-pattern-2.jpeg')",
              backgroundSize: "300px 300px",
            }}
            initial={{ rotate: 360 }}
            animate={{ rotate: 0 }}
            transition={{
              duration: 120,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          ></motion.div>

          {/* Center pattern */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-10"
            style={{
              backgroundImage: "url('/images/mosaic-pattern-2.jpeg')",
              backgroundSize: "800px 800px",
              backgroundPosition: "center",
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
            }}
          ></motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-40 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Portrait image */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative mx-auto"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto relative">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-amber-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              ></motion.div>
              <motion.div
                className="absolute inset-0 rounded-full border border-amber-500/20"
                style={{ margin: "-5px" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
              <motion.div
                className="absolute inset-0 rounded-full border border-amber-500/10"
                style={{ margin: "-10px" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              ></motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-xl"></div>

              {/* Image container */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-amber-500/50 shadow-lg relative z-10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-26%20at%2002-05-34%20Instagram-Ki3rVOgCppXjFDjdkaAdiJwN3sehTX.png"
                  alt="Marouane Hajji portrait"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tighter">Marouane Hajji</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl mb-10 text-zinc-300 max-w-2xl mx-auto">
              Artiste Spirituel de Musique Gnawa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => scrollToSection("music")}
            >
              Découvrir sa musique
            </Button>
            <Button
              variant="outline"
              className="border-zinc-500 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
              onClick={() => scrollToSection("about")}
            >
              Biographie
            </Button>
          </motion.div>

          {/* Social proof or stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex justify-center space-x-8 md:space-x-16"
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-500">500K+</p>
              <p className="text-zinc-400 text-sm">Vues YouTube</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-500">50+</p>
              <p className="text-zinc-400 text-sm">Concerts</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-500">10+</p>
              <p className="text-zinc-400 text-sm">Albums</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center z-40"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-white hover:bg-white/10 rounded-full"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Decorative mosaic corners */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-30 z-30 overflow-hidden">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/mosaic-pattern-2.jpeg')",
            backgroundSize: "128px 128px",
          }}
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        ></motion.div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 opacity-30 z-30 overflow-hidden">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/mosaic-pattern-2.jpeg')",
            backgroundSize: "128px 128px",
          }}
          animate={{ rotate: [0, -10, 0, 10, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        ></motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-30 z-30 overflow-hidden">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/mosaic-pattern-2.jpeg')",
            backgroundSize: "128px 128px",
          }}
          animate={{ rotate: [0, -5, 0, 5, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        ></motion.div>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30 z-30 overflow-hidden">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/mosaic-pattern-2.jpeg')",
            backgroundSize: "128px 128px",
          }}
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
        ></motion.div>
      </div>
    </section>
  )
}

