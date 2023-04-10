import React from 'react';
import { useState,useEffect } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import './FeaturedJobs.css'

const FeaturedJobs = () => {
    const [featuredJobs, setfeaturedJobs]=useState([]);

    useEffect(()=>{
        fetch('featuredJob.json')
        .then(res=>res.json())
        .then(data=>setfeaturedJobs(data));
    },[]);
    
    return (
        <div className='job-featured-container'>
            <h2>Featured Jobs</h2>
            <p className='sub-title'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='featured-job'>
                {
                    featuredJobs.map(featuredJob=><FeaturedJob
                    key={featuredJob.id}
                    featuredJob={featuredJob}
                    ></FeaturedJob>)
                }
              
            </div>
            <button className='see-all'>See All Jobs</button>
        </div>
    );
};

export default FeaturedJobs;