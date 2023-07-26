import React from 'react';
import { useParams } from 'react-router-dom';
import { RootState } from '../store/store';;
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductDetail: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const product = useSelector((state: RootState) =>
      state.products.products.find((p) => p.id === parseInt(productId))
    );
    const dispatch = useDispatch();
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    const handleAddToCart = () => {
      dispatch(addToCart({ ...product, quantity: 1 }));
    };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;