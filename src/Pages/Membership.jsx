import React from 'react'
import Banner from '../Components/Banner'
import BenefitCard from '../Components/Membership/BenefitCard'

const benefits= [
    {
        text:'Exclusive Discounts',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z"/></svg>',
    },
    {
        text:'Early access to new products',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>',
    },
    {
        text:'Personalized recommendations',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-400q-50 0-85-35t-35-85q0-22 7-41.5t21-35.5q-4-10-6-21t-2-22q0-38 20.5-67.5T374-751q20-23 47-36t59-13q32 0 59 13t47 36q33 14 53.5 43.5T660-640q0 11-2 22t-6 21q14 16 21 35.5t7 41.5q0 50-35 85t-85 35H400Zm0-80h160q17 0 28.5-12t11.5-28q0-7-2.5-13t-7.5-12q-11-13-14.5-25.5T572-594q0-16 4-27.5t4-18.5q0-12-7-22t-18-15q-9-4-16.5-9T525-699q-5-6-16.5-13.5T480-720q-17 0-28.5 8T435-698q-6 7-13.5 12t-16.5 9q-11 5-18 15t-7 22q0 7 4 18.5t4 27.5q0 11-3.5 23.5T370-545q-5 6-7.5 12t-2.5 13q0 16 11.5 28t28.5 12ZM160-80v-112q0-34 17.5-62.5T224-298q62-31 126-46.5T480-360q66 0 130 15.5T736-298q29 15 46.5 43.5T800-192v112H160Zm80-80h480v-32q0-11-5.5-20T700-226q-54-27-109-40.5T480-280q-56 0-111 13.5T260-226q-9 5-14.5 14t-5.5 20v32Zm240 0Zm0-320Z"/></svg>',
    },
    {
        text:'Special events',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>',
    },
]
function Membership() {
  return (
    <>
        <Banner color="#FF739C" />
        <section className='container mt-3'>
            <div className='row'>
                <h3 className='col-12'>Explore Membership Benefits</h3>
                <div className='row scroller my-2'>
                    {
                        benefits.map((value)=>{
                            return(
                                <BenefitCard {...value} key={value.text} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Membership