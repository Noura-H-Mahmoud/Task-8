import React from 'react';
import { Element } from 'react-scroll';
export default function Services(){
    const services = [
        {
            title:'Disign',
            img:'./images/5.jpg',
            name:'C. Alaa Darwish',
            pattern:'https://focal-x.com/assets/img/ourservices/brandingpattren.png',
            border: '2px solid #FE8502'
        },
        {
            title:'Front-end',
            img:'./images/3.jpg',
            name:'C. Karam Mustafa',
            pattern:'https://focal-x.com/assets/img/ourservices/markrtingpattren.png',
            border: '2px solid #A512FF'
        },
        {
            title:'Back-end',
            img:'./images/4.jpg',
            name:'C. Ali Saleh',
            pattern:'https://focal-x.com/assets/img/ourservices/Developmentpattren.png',
            border: '2px solid #71AB26'
        },
        {
            title:'Full Stack',
            img:'./images/2.jpg',
            name:'C. Somar Kesen',
            pattern:'https://focal-x.com/assets/img/ourservices/b2bpattren.png',
            border: '2px solid #1C5EDD'
        },
        {
            title:'Marketing',
            img:'./images/5.jpg',
            name:'C. Alaa Darwish',
            pattern:'https://focal-x.com/assets/img/ourservices/brandingpattren.png',
            border: '2px solid #FE8502'
        },
        {
            title:'Flutter',
            img:'./images/1.jpg',
            name:'C. Ahmad Alghanim',
            pattern:'https://focal-x.com/assets/img/ourservices/markrtingpattren.png',
            border: '2px solid #A512FF'
        }
    ]
    return(
        <Element className='ourServices' id="Services">
            <h1>Our Services</h1>
            <div className='services'>
                {services.map((service, index)=>{
                    return(
                        <div key={index} className='card'>
                            <div className='image'>
                                <img src={service.img} alt="coach" />
                            </div>
                            <div className="h2">
                                <div>
                                    <h2 style={{ borderBottom: service.border }}>{service.title}</h2>
                                    <h3>{service.name}</h3>
                                </div>
                                <img src={service.pattern} alt="pattern" style={{width:'100px', height:'100px'}}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Element>
    )
}