import React, { useEffect, useState } from 'react';
import { useParams,useLoaderData } from 'react-router-dom';
import './ViewDetail.css'

const ViewDetail = ({detail}) => {
    const {detailId}=useParams();
    
    const detailData=useLoaderData();
    console.log(detailData);
     
    const [jobDetail,setJobdetail]=useState([]);
    
    useEffect(()=>{
        const job=detailData.find((job)=>job.id==detailId);
        setJobdetail(job);
    },[detailData,detailId]);

     if(!jobDetail){
        return <div>Loading..</div>
     }
    // const{description,education,email,experience,phone,responsibilities,title,salary,location}=detail;
    
    return (
        <div>
            <h1 className='title'>Job Details</h1>
           {/* <p>{jobDetail.location}</p> */}
           <div className='details-container'>
            <div className='description'>
              <p><b>Description :</b>  {jobDetail.description}</p>
              <p><b> Job responsibilities : </b>{jobDetail.responsibilities}</p>
              <p><b> Educational requirements :</b><br></br> {jobDetail.education}</p>
              <p><b> Experience : </b>{jobDetail.experience}</p>
           </div>
           <div>
            <h3><b>Job Details</b></h3>
            <hr />
            <p> <b><img src="/src/images/Icons/Frame.png" alt="" />  Salary : </b>{jobDetail.salary}</p>
            <p><b><img src="/src/images/Icons/Frame-1.png" alt="" />  Job title : </b>{jobDetail.title}</p>
            <p><b>Contact Information</b></p>
            <hr />
            <p><b><img src="/src/images/Icons/Frame-2.png" alt="" /> Phone :</b> {jobDetail.phone}</p>
            <p><b><img src="/src/images/Icons/Frame-3.png" alt="" />  Email : </b>{jobDetail.email}</p>
            <p><b> <img src="/src/images/Icons/Frame-4.png" alt="" />  Address : </b>{jobDetail.location}</p>
            <button className='apply-btn'>Apply Now</button>
           </div>
           </div>
           
        </div>
    );
};

export default ViewDetail;