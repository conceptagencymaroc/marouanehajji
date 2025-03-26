"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Facebook } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Message envoyé! Nous vous contacterons bientôt.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white inline-block border-b-4 border-amber-600 pb-2">
            Contact
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
            Contactez Marouane Hajji pour des collaborations, des événements ou des questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={container}
            initial="hidden"
            animate={loaded ? "show" : "hidden"}
          >
            <motion.div variants={item}>
              <h3 className="text-xl font-semibold mb-6 text-white">Informations de Contact</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-900/20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-zinc-400">contact@marouanehajji.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-900/20 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Téléphone</h4>
                    <p className="text-zinc-400">+212 XXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-900/20 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Adresse</h4>
                    <p className="text-zinc-400">Fès, Maroc</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-xl font-semibold mb-4 text-white">Réseaux Sociaux</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/marouanehajjiofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full text-white hover:shadow-lg transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.youtube.com/@marouanehajji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-full text-white hover:shadow-lg transition-all duration-300"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/HajjiMarouan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-full text-white hover:shadow-lg transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-zinc-800/50 p-8 rounded-lg shadow-lg border border-zinc-700/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Envoyez un Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    placeholder="Votre nom"
                    className="bg-zinc-700/50 border-zinc-600 focus-visible:ring-amber-500 text-white"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="bg-zinc-700/50 border-zinc-600 focus-visible:ring-amber-500 text-white"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Input
                  placeholder="Sujet"
                  className="bg-zinc-700/50 border-zinc-600 focus-visible:ring-amber-500 text-white"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Textarea
                  placeholder="Votre message"
                  className="bg-zinc-700/50 border-zinc-600 focus-visible:ring-amber-500 min-h-[120px] text-white"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white"
              >
                <Send className="h-4 w-4 mr-2" />
                Envoyer le Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

