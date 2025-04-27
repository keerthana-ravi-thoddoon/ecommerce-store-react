import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import idlipodi from '../assets/idlipodi.jpg'

const products = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  name: `Product ${i + 1}`,
  image: idlipodi,  
  price: (i + 1) * 10,
}));


type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

type Props = {
  onAddToCart: (id: number) => void;
};

const ProductList = ({ onAddToCart }: Props) => {
  return (
    <Grid container spacing={2}>
      {products.map((product: Product) => (
        <Grid key={product.id} size={{xs:12, sm:6, md:4, lg:3}}>
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;