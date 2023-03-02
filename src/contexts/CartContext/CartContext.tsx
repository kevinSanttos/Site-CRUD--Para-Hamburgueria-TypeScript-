import { createContext, useEffect, useState } from "react";
import { toast} from "react-toastify";
import { api } from "../../services/api";
import {iCartContext, iProviderProps, iProduct} from '../@types'

export const CartContext = createContext({} as iCartContext)

export const CartProvider = ({children} : iProviderProps) => {

    const [products, setProducts] = useState<iProduct[] | null>(null)
    const [productsCart, setProductsCart] = useState<iProduct[]>([])
    const [openCloseModal, SetOpenCloseModal] = useState<boolean>(false)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(()=> {
        async function getAllProducts() {
            const token = localStorage.getItem("@TOKEN")
            try {
                const response = await api.get("/products", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setProducts(response.data)
            } catch (error) {
                toast.error("Falha na renderização dos itens!")
            }
        }
        getAllProducts()

    }, [])

    function addCart(product: iProduct){
        setProductsCart([...productsCart, product])  
        toast.success("Item adicionado ao carrinho!")
    }
    function removeCart(id: number){
       const filteredCarts =  productsCart.filter((product) => product.id !== id  )
       setProductsCart(filteredCarts)
       toast.success("Item removido!")
    }
    function deleteAll(){
        setProductsCart([])
        setTotalPrice(0)
        toast.success("Todos os itens foram removidos!")
    }
    
    return(
        <CartContext.Provider value={{openCloseModal, SetOpenCloseModal, deleteAll, products, addCart, productsCart, removeCart, totalPrice, setTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}