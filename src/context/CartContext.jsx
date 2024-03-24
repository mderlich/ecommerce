import { createContext, useEffect, useState } from "react";

// Creamos el contexto
export const CartContext = createContext(null);

// Creamos el provider
export const CartContextProvider = ({ children }) => {

    // ************************************************
    // useState
    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)


    // ************************************************
    // Agrega items al carrito
    const addItem = (item, quantity) => {

        // Copia del cart...
        const cartCopy = [...cart];
        // verificamos si el item ya se encuentra en el carro
        const index = cartCopy.findIndex(product => product.id === item.id)

        // si se encuentra en el carrito, lo modificamos...
        if (index != -1) {
            cartCopy[index].quantity = cartCopy[index].quantity + quantity;
            cartCopy[index].subtotal = cartCopy[index].price * cartCopy[index].quantity;
            setCart(cartCopy);
        }
        // y si no se encuentra, lo añanidmos
        else {

            const newItem = {
                ...item,
                quantity,
                subtotal: item.price * quantity
            }

            setCart([...cart, newItem])
        }


    }
    // --------------------------

    // ************************************************
    // Remueve items del carrito
    const removeItem = (id) => {

        const cartFiler = cart.filter(item => item.id !== id);
        setCart(cartFiler)

    }

    // ************************************************
    // Limpiar el carrito
    const clearCart = () => {
        setCart([])
    }
    // --------------------------


    // Carrito / TotalItems ************************************************
    const handleTotalItems = () => {
        const newTotalItems = cart.reduce((acum, item) => acum + item.quantity, 0);
        setTotalItems(newTotalItems);
    }
    // Carrito / TotalPrice ************************************************
    const handleTotalPrice = () => {
        const newTotalPrice = cart.reduce((acum, item) => acum + item.subtotal, 0);
        setTotalPrice(newTotalPrice);
    }
    // Carrito / Actualizacion *********************************************
    useEffect(() => {
        handleTotalItems();
        handleTotalPrice();
    }, [cart])
    // --------------------------


    const objectValues = {
        cart,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        clearCart,
    }

    return <CartContext.Provider value={objectValues}>{children}</CartContext.Provider>
}