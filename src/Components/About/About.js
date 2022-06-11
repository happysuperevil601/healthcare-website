import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-3xl text-green-600 my-3'>Green Life Diagnostic Centre </h1>
            <div className="lg:flex">
                <div className='h-60 m-5 p-5'>
                    <img className='w-full' src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='m-5 p-5 lg:w-1/2 lg:text-justify'>
                    <h1 className='font-md text-3xl text-white  bg-green-200 flex justify-start py-2 px-4 my-3' >Who We Are</h1>
                    <p><span className='text-green-600 text-xl font-lg'>Green Life </span> Diagnostic Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Green Life Diagnostic Centre Ltd. is one of the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.</p>
                    <br />

                    <p><strong>LEGAL STATUS</strong> Green Life Diagnostic Centre Ltd. is a private limited company registered with the Ministry of Health & Family Welfare, People’s Republic Govt. of Bangladesh having License No. 1278 &680.</p>
                </div>
            </div>
            <div className="lg:flex">
                <div className='m-5 p-5 lg:w-1/2 lg:text-justify ml-7  px-2 text-justify'>
                    <h1 className='font-md text-3xl text-green-600 flex justify-start  w-3/4' >Our Goal</h1>
                    <hr />
                    <p className='pt-5'> To establish a referral Diagnostic and Medical Services Centre.</p>
                    <h1 className='font-md text-3xl text-green-600 flex justify-start py-2  my-3 w-3/4' >Our Objective</h1>
                    <hr />
                    <ul className='py-3'>
                        <li><i class="text-green-600 fas fa-bullseye"></i> To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.</li>
                        <li><i class="text-green-600 fas fa-bullseye"></i> Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.</li>
                        <li><i class="text-green-600 fas fa-bullseye"></i> To promote Health Education & Medical Services.</li>
                        <li><i class="text-green-600 fas fa-bullseye"></i> Day care Centre for follow-up cardiac renal and oncology patients.</li>
                        <li><i class="text-green-600 fas fa-bullseye"></i> To build a full fledged specialized (Tertiary) Hospital.</li>
                        <li><i class="text-green-600 fas fa-bullseye"></i> Set up Satellite collection Centre.</li>
                    </ul>
                </div>

                <div className='h-60 m-5 p-5 mr-20 pr-10'>
                    <img className='w-full mx-5' src="https://media.istockphoto.com/photos/empty-luxury-modern-hospital-room-picture-id1298375809?b=1&k=20&m=1298375809&s=170667a&w=0&h=q0Pf0nTHR17Y8BcyS8pzfqWLa_HGwthP9qXvRMjanxg=" alt="" />

                </div>
            </div>
        </div >
    );
};

export default About;