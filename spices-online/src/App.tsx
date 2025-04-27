import { Box, Toolbar } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState<number[]>([]);

  const handleAddToCart = (id: number) => {
    setCart((prev) => [...prev, id]);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header />

      <Toolbar />

      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '200px', borderRight: '1px solid gray' }}>
          <Sidebar />
        </Box>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <ProductList onAddToCart={handleAddToCart} />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default App;
