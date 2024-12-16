
import ProductCard from '@/components/FuniroFurniture'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import InspirationSection from '@/components/Inspiration'
import Products from '@/components/Products'
import Range from '@/components/Range'
import CheckOutPage from './CheckOutPage/page'


const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Range/>
      <Products/>
<InspirationSection/>
<ProductCard/>

    </div>
  )
}

export default HomePage
