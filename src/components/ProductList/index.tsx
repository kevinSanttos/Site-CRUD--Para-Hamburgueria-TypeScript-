import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { iProduct } from '../../contexts/@types';

const ProductList = () => {

  const {products} = useContext(CartContext)

  return(
    <StyledProductList>
      {
        products?.map((product: iProduct) => {
         return  <ProductCard key={product.id} id={product.id} img={product.img} name={product.name} category={product.category} price={product.price}/>
        })
      }
    </StyledProductList>
  )
 
};

export default ProductList;
