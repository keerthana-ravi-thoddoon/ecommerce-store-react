import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

type Props = {
  product: Product;
  onAddToCart: (id: number) => void;
};

const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography>${product.price}</Typography>
        <Button variant="outlined" onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
