import React from 'react';
import { useParams,useLoaderData } from 'react-router-dom';

const ViewDetail = ({detail}) => {
    
    const data=useLoaderData();
    console.log(data)
    // console.log(detail);
    const{description,education,email,experience,phone,responsibilities,title,salary,location}=detail;
    
    return (
        <div>
           <p></p>
        </div>
    );
};

export default ViewDetail;