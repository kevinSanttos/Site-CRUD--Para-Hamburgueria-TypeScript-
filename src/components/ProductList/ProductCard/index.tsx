import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { iProduct } from '../../../contexts/@types';
import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext/CartContext';


const ProductCard = ({id, img, name, category, price}: iProduct) => {

  const {addCart, setTotalPrice, totalPrice} = useContext(CartContext)

  function addProduct_toCart(){
    
    const newproduct: iProduct = {
      id: id,
      name: name,
      category: category,
      price: price,
      img: img
    }
    
    addCart(newproduct)
    setTotalPrice(totalPrice + newproduct.price)
  }
  return(
    <StyledProductCard>
    <div className='imageBox'>
      <img src={img} alt='Hamburguer' />
    </div>
    <div className='content'>
      <StyledTitle tag='h3' $fontSize='three'>
        {name}
      </StyledTitle>
      <StyledParagraph className='category'>{category}</StyledParagraph>
      <StyledParagraph className='price'>R${price.toFixed(0)},00</StyledParagraph>
      <StyledButton $buttonSize='medium' $buttonStyle='green' onClick={addProduct_toCart}>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>
  )

};

export default ProductCard;
