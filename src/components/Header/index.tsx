import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../contexts/CartContext/CartContext';
import { UserContext } from '../../contexts/UserContext/UserContext';

const Header = () => {

 const {SetOpenCloseModal, openCloseModal} = useContext(CartContext)
 const {logoutUser} = useContext(UserContext)
  return(
    <StyledHeader>
    <StyledContainer containerWidth={1300}>
      <div className='flexGrid'>
        <img
          src={LogoKenzieBurguer}
          alt='Kenzie Burguer Logo'
          className='logo'
        />
        <nav className='nav' role='navigation'>
          <SearchForm />
          <div className='buttons'>
            <button
              type='button'
              onClick={() => {
                SetOpenCloseModal(!openCloseModal)
              }}
            >
              <MdShoppingCart size={28} />
            </button>
            <button type='button' onClick={()=> {
              logoutUser()
            }}>
              <MdLogout size={28} />
            </button>
          </div>
        </nav>
      </div>
    </StyledContainer>
  </StyledHeader>
  )
 
};

export default Header;
