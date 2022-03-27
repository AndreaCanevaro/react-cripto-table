import './App.css';
import TableCoins from './components/TableCoins';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {useEffect, useState} from "react"

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
    .then(response => response.json())
      .then(data => setCoins(data));
    }

  useEffect(() => {
  getData()    
  }, [])

  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <input type="text" placeholder="Search a Coin" className="form-control bg-dark text-light border-0 mt-4 text-center" onChange={e => setSearch(e.target.value)}/>
        <TableCoins coins={coins} search={search} />
      </div>
      <Footer />

    </div>
  );
}

export default App;
