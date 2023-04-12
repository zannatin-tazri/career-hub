import React, { useEffect, useState } from 'react';
import './JobCategories.css'
import JobCategory from '../JobCatery/JobCategory';


const JobCategories = () => {
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        fetch('jobCategory.json')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div className='job-category-container'>
            <h2 className='category-title'>Job Category List</h2>
                <small className='category-description'>Explore thousands of job opportunities with all
                 the information you need. Its your future</small>
            <div className='job-category'>
                
                {
                    categories.map(category=> <JobCategory
                    key={category.id}
                    category={category}
                    ></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategories;