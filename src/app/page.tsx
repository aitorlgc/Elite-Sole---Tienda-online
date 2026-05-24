import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import FeaturedDishes from '@/components/sections/FeaturedDishes'
import Menu from '@/components/sections/Menu'
import About from '@/components/sections/About'
import Gallery from '@/components/sections/Gallery'
import Reservations from '@/components/sections/Reservations'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import GoldDivider from '@/components/ui/GoldDivider'
import { menuCategories, featuredDishes } from '@/data/menu'
import { galleryImages } from '@/data/gallery'
import { testimonials } from '@/data/testimonials'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedDishes dishes={featuredDishes} />
      <GoldDivider className="bg-deep-black py-6" />
      <Menu categories={menuCategories} />
      <GoldDivider className="bg-charcoal py-6" />
      <About />
      <Gallery images={galleryImages} />
      <GoldDivider className="bg-charcoal py-6" />
      <Reservations />
      <GoldDivider className="bg-deep-black py-6" />
      <Testimonials testimonials={testimonials} />
      <Contact />
      <Footer />
    </main>
  )
}
