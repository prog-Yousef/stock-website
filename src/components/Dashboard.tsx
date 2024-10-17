import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import StockChart from './StockChart';
import Watchlist from './Watchlist';
import StockSearch from './StockSearch';

const Dashboard: React.FC = () => {
  const selectedStock = useSelector((state: RootState) => state.stocks.selectedStock);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Stock Chart</h2>
        {selectedStock ? (
          <StockChart stock={selectedStock} />
        ) : (
          <p>Select a stock to view its chart</p>
        )}
      </div>
      <div>
        <StockSearch />
        <Watchlist />
      </div>
    </div>
  );
};

export default Dashboard;