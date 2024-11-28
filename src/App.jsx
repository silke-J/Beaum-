import { useRoutes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Produkts';
import ProductDetails from './pages/produktdetails/ProduktDetails';

function App() {

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/about", element: <About /> },
    { path: "/product/:id", element: <ProductDetails/> },
    { path: "/contact", element: <Contact /> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
      <Footer />
    </div>
  );
}

export default App;