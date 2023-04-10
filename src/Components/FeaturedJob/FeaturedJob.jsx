import React from 'react';
import './FeaturedJob.css'

const FeaturedJob = (props) => {
    console.log(props)
    const {company,logo,title,location,salary,employment_type,remoteOrOnSite}=props.featuredJob;
    return (
        <div className='job-info'>
            <img src={logo} alt="" />
            <p>{title}</p>
            <span className='company-name'>{company}</span>
            <div >
                <button className='job_type'>{remoteOrOnSite}</button>
                <button className='job_type'>{employment_type}</button>
            </div>
            <div className='location-salary'>
                <small>{location}</small> 
                <small className='salary'>Salary : {salary}</small>
            </div>
            <button className='btn-details'>View Details</button>
        </div>
    );
};

export default FeaturedJob;