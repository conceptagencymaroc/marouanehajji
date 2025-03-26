import { Card, CardContent } from "@/components/ui/card"

export default function Biography() {
  return (
    <section id="biography" className="py-20 relative">
      <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-100">Biographie</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>

        <Card className="bg-slate-900/60 border-amber-900/30 backdrop-blur-sm max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="prose prose-invert prose-amber max-w-none">
              <p className="mb-4">
                Natif de la capitale spirituelle du Royaume, Fès, le jeune artiste Marouane Hajji, a vu le jour en 1987
                au sein d'une honorable famille très attachée aux valeurs religieuses, spirituelles et morales chose qui
                avait une grande répercussion sur son orientation artistique.
              </p>

              <p className="mb-4">
                A l'âge de cinq ans, cet enfant se dévoue en parrallèle de l'école à l'apprentissage des chants soufis,
                encadré par les grands professeurs au conservatoire musical de Fès, et guidé par les plus grands maitres
                du ZAOUAYA, dont la ZAOUIYA SEKELLIA de la ville spirituelle Fès.
              </p>

              <p className="mb-4">
                Ainsi, par sa présence continuelle et incessante aux différentes auditions et cérémonies programmées par
                la dite association, le jeune talent marocain eu l'opportunité en 1998 de participer à la troisième
                session du festival national des choristes à Fès, et décrocha la première place à l'échelle nationale.
                En outre pour montrer sa sollicitude à cet art imprenable et jouissif, ce jeune ingénieur ne cessa de
                s'exprimer avec habileté et dextérité lors des différents festivals de la musique sacrée ou soufis
                organisés dans le royaume ou ailleurs.
              </p>

              <p className="mb-4">
                En 2007 ce praticien innovateur s'ingénia et obtint son laissez–passer pour représenter le Royaume du
                Maroc aux éliminatoires "Choristes Charika" dans sa deuxième édition aux Emirat Arabes Unis, se classa
                en deuxième position et eut l'occasion de faire la connaissance de plusieurs stars internationales ce
                que lui permit de franchir toutes les frontières et d'ouvrir les différents horizons artistiques par la
                création d'une formation chevronnée de maîtres instrumentistes et choristes intitulée 'IKHWANE AL FANE"
                "les frères d'arts" qui veille sur l'intégration de la musique Sacrée et du chant soufi sans nuire ou
                toucher au fond historique et de cet art ancestral et éternel.
              </p>

              <p>
                En 2014, il est nommé ambassadeur de la musique sacrée lors de son passage au Palais des beaux arts à
                Bruxelles. C'est aussi l'année de la sortie de son album intitulé (nuit soufie frères d'arts) qui s'est
                placé premier des charts.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

