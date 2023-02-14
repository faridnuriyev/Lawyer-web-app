import './App.css';
import './components/reset.css'
import { Route, Routes } from 'react-router-dom';
import Product from './components/rooting/Product';
import Pricing from './components/rooting/Pricing';
import Contact from './components/rooting/Contact';
import NotFound from './components/rooting/NotFound';
import Layout from './components/rooting/Layout';

 
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
