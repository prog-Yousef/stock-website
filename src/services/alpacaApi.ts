import axios from 'axios';

const BASE_URL = 'https://paper-api.alpaca.markets';
const API_KEY = 'YOUR_ALPACA_API_KEY';
const API_SECRET = 'YOUR_ALPACA_API_SECRET';

const alpacaApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'APCA-API-KEY-ID': API_KEY,
    'APCA-API-SECRET-KEY': API_SECRET,
  },
});

export const getStockQuote = async (symbol: string) => {
  try {
    const response = await alpacaApi.get(`/v2/stocks/${symbol}/quotes/latest`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock quote:', error);
    throw error;
  }
};

export const getAccountInfo = async () => {
  try {
    const response = await alpacaApi.get('/v2/account');
    return response.data;
  } catch (error) {
    console.error('Error fetching account info:', error);
    throw error;
  }
};

// Add more API functions as needed

export default alpacaApi;