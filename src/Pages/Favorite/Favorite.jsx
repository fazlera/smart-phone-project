import { useEffect, useState } from "react";
import SinglePhoneCard from "../Phone/SinglePhoneCard";

const Favorite = () => {
    const [favorite, setFavorite] = useState([])
    const [notFound, setNotFound] = useState(false)
    const [isShow  , setIsShow]   = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {

        const getStoredItem = JSON.parse(localStorage.getItem('favorite'))
        

        if(getStoredItem){
            setFavorite(getStoredItem)
            const total = getStoredItem.reduce((preValue,currentValue) => preValue + currentValue.price,0)
            setTotalPrice(total)
        }
        else{
            setNotFound('No Data Found')
        }
       
    },[])
    console.log(favorite);

    const handleDelete = () => {
        localStorage.clear()
        setFavorite([])
        setNotFound('No Data Found')
    }

  
    return (
        <div>
            {notFound ? <p className="flex items-center justify-center text-6xl font-bold h-[80vh]">{notFound}</p> : 
            
           <div>
            {favorite.length > 0 ? <button onClick={handleDelete} className="px-5 py-2 rounded-lg bg-red-400 flex justify-center">Delete All</button> :''}
            <div>
                 <h1 className="text-4xl font-bold mt-10 mb-10 ">Total Price : {totalPrice} $</h1>
                </div>    
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 h-60">
                {
                    isShow ? favorite.map(phone => <SinglePhoneCard key={phone.id} phone={phone}></SinglePhoneCard>) 
                    :
                    favorite.slice(0,2).map(phone => <SinglePhoneCard key={phone.id} phone={phone}></SinglePhoneCard>)
                }
                
               <div className="">
               <button onClick={() => setIsShow(!isShow)} className="px-5 py-2 rounded-lg bg-green-400 flex justify-center">{isShow ? 'See Less' : 'See More'}</button>
               </div>
               
            </div> 
            
           
           </div>
           

           
           }
        </div>
    );
};

export default Favorite;