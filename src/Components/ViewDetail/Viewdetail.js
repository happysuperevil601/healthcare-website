import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Viewdetail = () => {
    const { detailsId } = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState([]);
    useEffect(() => {
        fetch('/serviceDetail.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])
    useEffect(() => {
        const selectedService = serviceDetails.find(serviceDetail => serviceDetail.id == detailsId)
        console.log(selectedService, detailsId);

        setSingleService(selectedService)
    }, [detailsId, serviceDetails])
    console.log(singleService);
    console.log(detailsId);
    return (
        <div>
            <h2 className='font-md text-3xl text-white  bg-green-200 font-bold py-2 px-4 mb-3' > Details of {singleService?.name}  </h2>
            <div className='flex'>
                <div style={{ height: 400, }} className='m-5 p-5'> <img className='transform hover:scale-110' src={singleService?.picture} alt="" />
                </div>
                <div style={{ height: 400 }} className='m-5 p-5 w-1/2 text-justify'>
                    <p className='font-bold text-3xl text-white  bg-green-200 flex justify-start py-2 px-4 mb-3'>{singleService?.name}</p>
                    <p> <span className='text-green-600 font-bold'> Cost:</span> {singleService?.cost} BDT</p>
                    <p><span className='text-green-600 font-bold'>Consultant: </span> Dr.  {singleService?.consultant}</p>
                    <p>{singleService?.about}</p>
                </div>
            </div>


        </div>
    );
};

export default Viewdetail;