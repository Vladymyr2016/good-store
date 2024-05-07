import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index />
          <Route path="cart" />
          <Route path="products/:producId" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
