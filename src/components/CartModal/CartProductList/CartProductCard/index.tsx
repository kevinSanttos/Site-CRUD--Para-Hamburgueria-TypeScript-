import { MdDelete } from 'react-icons/md';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { iProduct } from '../../../../contexts/@types';
import { useContext } from 'react';
import { CartContext } from '../../../../contexts/CartContext/CartContext';

const CartProductCard = ({id, img, name, category, price}: iProduct) => {


  const {removeCart, setTotalPrice, totalPrice} = useContext(CartContext)
  return(
    <StyledCartProductCard>
    <div className='imageBox'>
      <img src={img} alt='Hamburguer' />
    </div>
    <div className='contentBox'>
      <StyledTitle tag='h3' $fontSize='three'>
        {name}
      </StyledTitle>
      <button type='button' aria-label='Remover' onClick={()=> {
        removeCart(id)
        setTotalPrice(totalPrice - price)
      }}>
        <MdDelete size={24} />
      </button>
    </div>
  </StyledCartProductCard>

  )
 
};

export default CartProductCard;
