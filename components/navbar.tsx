"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const navItems = [
    { id: "about", label: "Biographie" },
    { id: "music", label: "Musique" },
    { id: "gallery", label: "Galerie" },
    { id: "contact", label: "Contact" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-2xl font-bold text-white">Marouane Hajji</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center space-x-8"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              variants={itemVariants}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium hover:text-amber-400 transition-colors text-white"
            >
              {item.label}
            </motion.button>
          ))}
          <motion.div variants={itemVariants}>
            <Button
              onClick={() => window.open("https://www.youtube.com/@marouanehajji", "_blank")}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
            >
              Écouter
            </Button>
          </motion.div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => scrollToSection(item.id)}
                className="text-zinc-100 font-medium py-2 hover:text-amber-400 transition-colors text-left"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Button
                onClick={() => window.open("https://www.youtube.com/@marouanehajji", "_blank")}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white w-full"
              >
                Écouter
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

