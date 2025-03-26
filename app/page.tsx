import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Music from "@/components/music"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <About />
      <Music />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

