import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ViewDetail from '../ViewDetail/ViewDetail';

const SeeDetails = () => {
    
    const details=useLoaderData();
    // console.log(details);
    return (
        <div>
            <h1>Hello : {details.length}</h1>
            <div>
                {
                    details.map(detail=><ViewDetail
                    key={detail.id}
                    detail={detail}
                    ></ViewDetail>)
                }
            </div>
        </div>
    );
};

export default SeeDetails;