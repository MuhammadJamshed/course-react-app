import { products } from '../src/Data'


import react from 'react'
import Home from './pages/home/Home';


function App() {

  return (
    <div className="container">

      <Home products={products} />
    </div>

  );
}

export default App;
