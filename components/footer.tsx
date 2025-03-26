"use client"

import { Instagram, Youtube, Facebook } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 py-12 text-white border-t border-zinc-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Marouane Hajji</h2>
            <p className="text-zinc-400 mt-2">Artiste Spirituel de Musique Gnawa</p>
          </div>

          <div className="flex space-x-6 mb-8 md:mb-0">
            <motion.a
              href="https://www.instagram.com/marouanehajjiofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@marouanehajji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Youtube className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/HajjiMarouan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="h-6 w-6" />
            </motion.a>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 mt-8 pt-8 text-center">
          <p className="text-zinc-500">&copy; {currentYear} Marouane Hajji. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

