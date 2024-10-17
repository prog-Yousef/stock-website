import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToWatchlist } from '../store/slices/stocksSlice';
import { getStockQuote } from '../services/alpacaApi';
import { Search } from 'lucide-react';

const StockSearch: React.FC = () => {
  const [symbol, setSymbol] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const quote = await getStockQuote(symbol);
      dispatch(addToWatchlist({
        symbol,
        price: quote.last.price,
        change: ((quote.last.price - quote.open.price) / quote.open.price) * 100,
      }));
      setSymbol('');
    } catch (error) {
      console.error('Error searching for stock:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4">Search Stocks</h3>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          placeholder="Enter stock symbol"
          className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  );
};

export default StockSearch;