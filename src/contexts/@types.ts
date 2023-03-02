
export interface iUserContext{
    registerUser: (data: iUserRegister) => Promise<void>;
    loginUser: (data: iUserLogin) => Promise<void>;
    logoutUser: ()=> void;
    user: iUser | null;
   
}

export interface iProviderProps {
    children: React.ReactNode
}

export interface iUserRegister{
    email: string;
    password: string; 
    confirmPassword?: string
    name: string
}
export interface iUserLogin{
    email: string;
    password: string
}
export interface iUser{
    email: string;
    id: number;
    name: string
}

export interface iCartContext{
    products: iProduct[] | null;
    openCloseModal: boolean;
    addCart: (product: iProduct) => void;
    productsCart: iProduct[] | null,
    SetOpenCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
    removeCart: (id: number) => void;
    deleteAll: ()=> void;
    totalPrice: number;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>
}

export interface iProduct{
    id: number;
    name: string;
    category: string;
    price: number;
    img: string
}




