import React from 'react'
import Banner from '../Components/Banner'
import UserCard from '../Components/About/UserCard'
const user = [
    {
    name:'Tanuj Malhotra',
    role:'Business + Strategy <br/> Worked with multiple startups <br/> scaling things from scratch',
    imgPath: '/img/tanuj.png'
    },
    {
        name:'Nidhi Nakrani',
        role:'Blockchain | Web3 | Security <br/> 400+ Smart Contract Audited 250+ Deployed',
        imgPath: '/img/nidhi.png'
    },
    {
        name:'Jatin Deswal',
        role:'Tech + Operation <br/> Expertise in Full Stack | DevOps | <br/> ML /DL/AI | Solution Architect',
        imgPath: '/img/jatin.png'
    },
]
function About() {
  return (
    <>
        <Banner color="#095959" />
        <section className='container my-5'>
            <h3 className='text-center fw-bold'>Meet Us</h3>
            <div className='row'>
                {
                    user.map((value)=>{
                        return(
                            <div className='col col-lg-4'>
                                <UserCard key={value.name} {...value} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}

export default About