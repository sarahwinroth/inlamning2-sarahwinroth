import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import './shared/global/Style.css'
import { Footer } from './components/footer/Footer';
import { ProductsProvider } from './shared/provider/ProductsProvider';
import { ItemsInCartProvider } from "./shared/provider/ItemsInCartProvider";

function App() {
  return (
    <div className='app'>
      <ItemsInCartProvider>
        <ProductsProvider>
          <Routes>
            <Navigation />
          </Routes>
        </ ProductsProvider>
      </ItemsInCartProvider>
      <Footer/>
    </div>
  );
}

export default App;
