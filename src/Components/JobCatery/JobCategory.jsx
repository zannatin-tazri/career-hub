import React from 'react';
// import icons from '../../Icons'

const JobCategory = (props) => {
    const {jobCategory,availableJobs,logo}=props.category;
    console.log(props)
    return (
        <div>
            <img src={logo} alt="" />
            <h5>{jobCategory}</h5>
            <small>{availableJobs} Jobs Available</small>
        </div>
    );
};

export default JobCategory;