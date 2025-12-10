import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"

import '@/styles/globals.css'



export default function HomePage() {
  return (
    <div className="min-h-screen  bg-background">
          
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />


  
     
      </main>
      
      {/* <Footer /> */}
    </div>
  )
}
