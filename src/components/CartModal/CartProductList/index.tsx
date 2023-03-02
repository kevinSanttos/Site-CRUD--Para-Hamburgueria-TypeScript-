import CartProductCard from './CartProductCard';
import { useContext } from 'react';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../contexts/CartContext/CartContext';
import { iProduct } from '../../../contexts/@types';

const CartProductList = () => {
  
  
  const {productsCart, deleteAll, totalPrice} = useContext(CartContext)

  return (
    <StyledCartProductList>
      <ul>
        {
          productsCart?.map((product: iProduct)=> {
            return <CartProductCard  key={product.id} id={product.id} img={product.img} name={product.name} category={product.category} price={product.price} />
          })
        }
      </ul>
    

    <div className='totalBox'>
      <StyledParagraph>
        <strong>Total</strong>
      </StyledParagraph>
      <StyledParagraph className='total'>R${totalPrice.toFixed(0)},00</StyledParagraph>
    </div>
    <StyledButton $buttonSize='default' $buttonStyle='gray' onClick={deleteAll}>
      Remover todos
    </StyledButton>
  </StyledCartProductList>
  )
  
};

export default CartProductList;
