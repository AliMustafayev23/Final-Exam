
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './companents/layout/footer';
import Header from './companents/layout/header';
import Add from './companents/pages/add';
import Detail from './companents/pages/detail';
import Home from './companents/pages/home';
import NoPage from './companents/pages/no page';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:_id" element={<Detail/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="*" element={<NoPage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
