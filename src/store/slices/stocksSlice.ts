import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Stock {
  symbol: string;
  price: number;
  change: number;
}

interface StocksState {
  watchlist: Stock[];
  selectedStock: Stock | null;
}

const initialState: StocksState = {
  watchlist: [],
  selectedStock: null,
};

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<Stock>) => {
      state.watchlist.push(action.payload);
    },
    removeFromWatchlist: (state, action: PayloadAction<string>) => {
      state.watchlist = state.watchlist.filter(stock => stock.symbol !== action.payload);
    },
    setSelectedStock: (state, action: PayloadAction<Stock | null>) => {
      state.selectedStock = action.payload;
    },
    updateStockPrice: (state, action: PayloadAction<{ symbol: string; price: number; change: number }>) => {
      const stock = state.watchlist.find(s => s.symbol === action.payload.symbol);
      if (stock) {
        stock.price = action.payload.price;
        stock.change = action.payload.change;
      }
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, setSelectedStock, updateStockPrice } = stocksSlice.actions;
export default stocksSlice.reducer;