import logo from './logo.svg';
import './App.css';
import Banner from './components/Header/Banner';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Office from './Pages/confirm/Office';
import Restaurant from './Pages/confirm/Restaurant';
import Menu from './components/Menu/Menu';
import Banner1 from './components/Banner1/Banner1';
import Product from './components/Product/Product';
import BestFood from './components/BestFood/BestFood';


function App() {
  return (
    <>
      <Banner />
      <Menu />
      <Banner1 />
      <Product />
      <BestFood />
      {/* <Restaurant />
      <Office />
      <Login />
      <SignUp /> */}
    </>
  );
}

export default App;
