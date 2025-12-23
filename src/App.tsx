import { useEffect, useState } from 'react'
// @ts-ignore
import Lenis from 'lenis'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Preloader from './components/ui/Preloader'
import CinematicHero from './components/sections/CinematicHero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Stats from './components/sections/Stats'
import Expertise from './components/sections/Expertise'
import Vision from './components/sections/Vision'
import StaticBanner from './components/sections/StaticBanner'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import AIChatWidget from './components/ui/AIChatWidget'

function App() {
    const [showPreloader, setShowPreloader] = useState(true);
    const [contentReady, setContentReady] = useState(false);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    const handlePreloaderComplete = () => {
        setShowPreloader(false);
        setTimeout(() => setContentReady(true), 100);
    };

    return (
        <div className="bg-navy-900 min-h-screen text-white overflow-hidden selection:bg-gold-500/30 selection:text-gold-200">
            {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

            {contentReady && (
                <>
                    <Navbar />
                    <AIChatWidget />
                    <main>
                        <CinematicHero />
                        <About />
                        <Stats />
                        <Services />
                        <Expertise />
                        <Vision />
                        <StaticBanner />
                        <Testimonials />
                        <Contact />
                    </main>
                    <Footer />
                </>
            )}
        </div>
    )
}

export default App
