import PhoneCard from "./PhoneCard";

const Phones = ({phones}) => {
    // console.log(Phones);
    return (
        <div>
            <h1 className='text-2xl text-center font-bold mt-5'>Our All Category Phones Collection</h1>
            <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    phones?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;