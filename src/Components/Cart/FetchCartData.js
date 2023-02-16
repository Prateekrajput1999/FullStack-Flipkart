import axios from "axios";

const FetchCartData = async (userId) => {
    if(!userId) return [];
    
    const res = await axios.get(`https://fkipkart-react-app-default-rtdb.firebaseio.com/userData/${userId}.json`);
    const cartObj = await res?.data?.cartData

    let newCartData = [];
    for (const key in cartObj) {
        newCartData.push({
            title: cartObj[key].title,
            src: cartObj[key].src,
            dimension: cartObj[key].dimension,
            price: cartObj[key].price,
            qty: cartObj[key].qty,
            id: key
        })
    }
    
    return newCartData
}

export default FetchCartData