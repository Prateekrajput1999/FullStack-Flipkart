import { Product_data } from "../db"

const product_arr = [...Product_data.Grocery,
    ...Product_data.Fashion,
    ...Product_data.Mobile,
    ...Product_data.Electronics,
    ...Product_data.Home,
    ...Product_data.Appliances,
    ...Product_data.Toys,
]

const ifMatches = (str1, str2) => {
    let i 
    let j

    for(i=0;i<str1.length;i++) {
        let indx = i;
        for(j=0;j<str2.length;j++, indx++) {
            if(str1[indx] !== str2[j]) break;
        }
        if(j===str2.length) return true;
    }
    return false
}


export const searchFunction = (text) => {
    const newText = text.trim()


    if(newText === '')    return []    
      

    const filteredArr = product_arr.map((obj) => {
        if(ifMatches(obj.title.toLowerCase(),newText.toLowerCase())) return obj
    }).filter(obj => obj!=undefined)


    return filteredArr
}