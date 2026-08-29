import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'
import { Hero } from './components/sections/Hero'
import { SobreNosotros } from './components/sections/SobreNosotros'
import { Servicios } from './components/sections/Servicios'
import { Menciones } from './components/sections/Menciones'
import { Testimonios } from './components/sections/Testimonios'
import { Footer } from './components/sections/Footer'
import { ScrollToTop } from './components/ui/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-ebony">
      <Header />
      <Sidebar />
      <main className="lg:pl-[220px]">
        <Hero />
        <SobreNosotros />
        <Servicios />
        <Menciones />
        <Testimonios />
        <Footer />
      </main>
      <ScrollToTop />
    </div>
  )
}
