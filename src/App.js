import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';

function App() {

  const [links] = useState([
    "Women's", "Men's", "On the Street", "The catwalk", "AdWatch", "About"
])
  
  return (
    <div className="App">
      <Header links={links} />
      <Article/>
      <Footer links={links}/>
    </div>
  );
}

export default App;
