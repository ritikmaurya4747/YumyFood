import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const url = "https://yumyfood.onrender.com"
  
  const [cartItems, setCartItems] = useState({});
  const [token,setToken] = useState("");
  const [food_list, setFoodList] = useState([])

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(url+'/api/cart/add',{itemId},{headers:{token}})
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(url+'/api/cart/remove',{itemId},{headers:{token}}) 
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // Fetch food list from API database
  const fetchFoodList = async () => {
    const response = await axios.get(url + '/api/food/list')
    setFoodList(response.data.data)
  }

  // page reload karne par add item reload na ho  show kare 
  const loadCartData = async (token) => {
    const response = await axios.post(url + '/api/cart/get',{},{headers:{token}});
    setCartItems(response.data.cartData)
  }

  // Reload hone par logout na ho
  useEffect(() => {
    async function loadData (){
      await fetchFoodList();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem('token'));
      }
    }
    loadData();
  },[])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
