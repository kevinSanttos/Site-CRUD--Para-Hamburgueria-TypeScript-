import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { useContext } from 'react';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../contexts/CartContext/CartContext';

const ShopPage = () => {
const {openCloseModal} = useContext(CartContext)

  return(
    <StyledShopPage>
   {openCloseModal && <CartModal /> }
    <Header />
    <main>
      <StyledContainer containerWidth={1300}>
        <ProductList />
      </StyledContainer>
    </main>
  </StyledShopPage>
  )
  
};

export default ShopPage;
