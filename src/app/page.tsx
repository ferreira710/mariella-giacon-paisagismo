import About from '@/components/about'
import Banner from '@/components/banner'
import Contact from '@/components/contact'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Logo from '@/components/logo'
import Purpose from '@/components/purpose'
import ScrollTop from '@/components/scroll-top'
import Services from '@/components/services'

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main id="home" className="mb-auto flex flex-col pt-16">
        <Logo />
        <Banner />
        <About />
        <Purpose />
        <Features />
        <Services />
        <Contact />
        <ScrollTop />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
