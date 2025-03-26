"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Instagram, Youtube, Facebook } from "lucide-react"

export default function SocialMedia() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const socialLinks = [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/marouanehajjiofficial/",
      icon: <Instagram className="h-6 w-6" />,
      color: "from-purple-600 to-pink-600",
      username: "@marouanehajjiofficial",
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@marouanehajji",
      icon: <Youtube className="h-6 w-6" />,
      color: "from-red-600 to-red-700",
      username: "@marouanehajji",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/HajjiMarouan/",
      icon: <Facebook className="h-6 w-6" />,
      color: "from-blue-600 to-blue-800",
      username: "HajjiMarouan",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % socialLinks.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + socialLinks.length) % socialLinks.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="social-media" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-100">Réseaux Sociaux</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {socialLinks.map((social, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className={`bg-gradient-to-r ${social.color} border-none overflow-hidden`}>
                    <CardContent className="p-8 text-white">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-5xl md:text-6xl">{social.icon}</div>
                        <div className="text-center md:text-left">
                          <h3 className="text-2xl font-bold mb-2">{social.platform}</h3>
                          <p className="text-lg mb-4">{social.username}</p>
                          <Button
                            className="bg-white text-slate-900 hover:bg-slate-100"
                            onClick={() => window.open(social.url, "_blank")}
                          >
                            Suivre
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-900/80 border-amber-900/30 text-amber-100 hover:bg-slate-800 z-10 rounded-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-slate-900/80 border-amber-900/30 text-amber-100 hover:bg-slate-800 z-10 rounded-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-6 gap-2">
            {socialLinks.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-amber-600" : "bg-slate-600"}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-900/60 border-amber-900/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square w-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.instagram.com/marouanehajjiofficial/embed"
                    frameBorder="0"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/60 border-amber-900/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/?listType=user_uploads&list=marouanehajji"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

