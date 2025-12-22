import { useEffect } from 'react'
// @ts-ignore
import Lenis from 'lenis'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Expertise from './components/sections/Expertise'
import Vision from './components/sections/Vision'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

function App() {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <div className="bg-navy-900 min-h-screen text-white overflow-hidden selection:bg-gold-500/30 selection:text-gold-200">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Expertise />
                <Vision />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
