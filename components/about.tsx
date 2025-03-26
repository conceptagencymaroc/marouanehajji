"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function About() {
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

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-900/20 rounded-full -z-10"></div>
              <img
                src="/images/marouane-5.png"
                alt="Marouane Hajji"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-900/10 rounded-full -z-10"></div>

              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-amber-600/20 blur-xl rounded-full"></div>
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-amber-600/20 blur-xl rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={loaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <span className="inline-block border-b-4 border-amber-600 pb-2">Biographie</span>
            </h2>

            <div className="space-y-4 text-zinc-300">
              <p>
                Natif de la capitale spirituelle du Royaume, Fès, le jeune artiste Marouane Hajji, a vu le jour en 1987
                au sein d'une honorable famille très attachée aux valeurs religieuses, spirituelles et morales chose qui
                avait une grande répercussion sur son orientation artistique.
              </p>

              <p>
                A l'âge de cinq ans, cet enfant se dévoue en parrallèle de l'école à l'apprentissage des chants soufis,
                encadré par les grands professeurs au conservatoire musical de Fès, et guidé par les plus grands maitres
                du ZAOUAYA, dont la ZAOUIYA SEKELLIA de la ville spirituelle Fès.
              </p>

              <p>
                En 2007 ce praticien innovateur s'ingénia et obtint son laissez–passer pour représenter le Royaume du
                Maroc aux éliminatoires "Choristes Charika" dans sa deuxième édition aux Emirat Arabes Unis, se classa
                en deuxième position.
              </p>

              <p>
                En 2014, il est nommé ambassadeur de la musique sacrée lors de son passage au Palais des beaux arts à
                Bruxelles. C'est aussi l'année de la sortie de son album intitulé (nuit soufie frères d'arts) qui s'est
                placé premier des charts.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

