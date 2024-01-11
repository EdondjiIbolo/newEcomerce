import { Routes, Route  } from 'react-router-dom'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { ProductCard } from './components/single-component/ProductCard'
import { ManCollection } from './components/ManCollection'
import { Collection } from './components/Collection'
import { WomenCollection } from './components/WomenCollection'
import { ProductDetail } from './components/single-component/ProductDetail'


function App() {


  return (
    <main className='container'>
      <Header className='container'/>
      <Routes>
        <Route path='/' element={<Collection />}/>
        <Route path='/detail/:id' element={<ProductDetail />} />
        <Route path='/men' element={<ManCollection />} />
        <Route path='/men/:id' element={<ProductDetail />} />
        <Route path='/women/:id' element={<ProductDetail />} />
        <Route path='/women' element={<WomenCollection />} />
        <Route path='/about' element={<WomenCollection />} />
      </Routes>
     
    </main>
    
  )
}

export default App
