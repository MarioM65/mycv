import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Header />
      <About />
      <Skills />
      <Footer />
      
    </main>
  )
}
