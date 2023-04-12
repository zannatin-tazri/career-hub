import React from 'react';
import './Banner.css';
import JobCategories from '../jobCategory/JobCategories';
import FeaturedJobs from '../featureJobs/FeaturedJobs';
import hardy from '../../images/hardy.png'

const Banner = () => {
    return (
       <div>
         <div className='banner'>
            <div className='banner-text'>
               <h1>One Step <br></br> Closer To Your <br></br>
                <span>Dream Job</span> </h1>
               <p>Explore thousands of job opportunities with all the information you need. Its your future.
                 Come find it. Manage all your job application from start to finish.</p>
                 <button className='banner-btn'>Get Started</button>
            </div>

            <div className='banner-img'>
                 <img src={hardy} alt="" />
            </div>

            
        </div>
        <JobCategories></JobCategories>
            <FeaturedJobs></FeaturedJobs>
       </div>
    );
};

export default Banner;