"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Disc, Mic2 } from "lucide-react"
import { motion } from "framer-motion"

export default function Music() {
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="music" ref={ref} className="py-20 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white inline-block border-b-4 border-amber-600 pb-2">
            Musique
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-4">
            Découvrez les compositions spirituelles et les performances de Marouane Hajji
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Tabs defaultValue="featured" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-zinc-800/50">
              <TabsTrigger value="featured" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
                <Play className="h-4 w-4 mr-2" />
                Populaires
              </TabsTrigger>
              <TabsTrigger value="albums" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
                <Disc className="h-4 w-4 mr-2" />
                Albums
              </TabsTrigger>
              <TabsTrigger value="live" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
                <Mic2 className="h-4 w-4 mr-2" />
                Live
              </TabsTrigger>
            </TabsList>

            <TabsContent value="featured">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={container}
                initial="hidden"
                animate={loaded ? "show" : "hidden"}
              >
                <motion.div variants={item} className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/OXRIBAgNqcg"
                    title="Marouane HAJJI - SLAMI [Official Music Video]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </motion.div>
                <motion.div variants={item} className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/pGw4Mu8lHDc"
                    title="Ya 9atin Ijbal - Marouane Hajji"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              </motion.div>
              <motion.div variants={item} initial="hidden" animate={loaded ? "show" : "hidden"} className="mt-8">
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/o_F_w600__E"
                    title="Marouane Hajji Performance"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="albums">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                animate={loaded ? "show" : "hidden"}
              >
                <motion.div variants={item}>
                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 bg-zinc-800 border-zinc-700">
                    <div className="aspect-square bg-zinc-900 relative overflow-hidden">
                      <img
                        src="/images/marouane-1.png"
                        alt="Album: Nuit Soufie Frères d'Arts"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-white text-lg">Nuit Soufie Frères d'Arts</h3>
                      <p className="text-zinc-400">2014</p>
                    </div>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 bg-zinc-800 border-zinc-700">
                    <div className="aspect-square bg-zinc-900 relative overflow-hidden">
                      <img
                        src="/images/marouane-4.png"
                        alt="Album cover"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-white text-lg">SLAMI</h3>
                      <p className="text-zinc-400">2020</p>
                    </div>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 bg-zinc-800 border-zinc-700">
                    <div className="aspect-square bg-zinc-900 relative overflow-hidden">
                      <img
                        src="/images/marouane-6.png"
                        alt="Album cover"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-white text-lg">Ya 9atin Ijbal</h3>
                      <p className="text-zinc-400">2022</p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="live">
              <motion.div variants={item} initial="hidden" animate={loaded ? "show" : "hidden"}>
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/GczWpmso3Kk"
                    title="Marouane Hajji Live Performance"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

