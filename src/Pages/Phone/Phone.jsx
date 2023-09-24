import  { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SinglePhoneCard from './SinglePhoneCard';

const Phone = () => {
    const phones = useLoaderData()
    const {id}   = useParams()
    const [phone, setPhones] = useState({})

    useEffect(() =>{
        const findPhones = phones?.find(phone => phone.id === id)
        
        setPhones(findPhones)

    },[id,phones])
    
    return (
        <div> 
            <SinglePhoneCard phone={phone}></SinglePhoneCard>
        </div>
    );
};

export default Phone;