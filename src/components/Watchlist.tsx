import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFromWatchlist, setSelectedStock } from '../store/slices/stocksSlice';
import { X } from 'lucide-react';

const Watchlist: React.FC = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state: RootState) => state.stocks.watchlist);

  const handleRemove = (symbol: string) => {
    dispatch(removeFromWatchlist(symbol));
  };

  const handleSelect = (stock: any) => {
    dispatch(setSelectedStock(stock));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-6">
      <h3 className="text-xl font-bold mb-4">Watchlist</h3>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <ul>
          {watchlist.map((stock) => (
            <li key={stock.symbol} className="flex justify-between items-center mb-2 p-2 hover:bg-gray-100 rounded">
              <button onClick={() => handleSelect(stock)} className="flex-grow text-left">
                <span className="font-bold">{stock.symbol}</span>
                <span className="ml-2">${stock.price.toFixed(2)}</span>
                <span className={`ml-2 ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
                </span>
              </button>
              <button onClick={() => handleRemove(stock.symbol)} className="text-red-500 hover:text-red-700">
                <X size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;