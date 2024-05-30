import React from 'react';
import { Element } from "react-scroll";
export default function Hosting(){
    const items =[
        {
            id:1,
            title:'Basic',
            para:'for very small businesses and freelancers',
            $:'$2.5/mo',
            ul:[
                'Disk Space: 500 M.B',
                'Bandwidth: 500 G.B',
                'SubDomains: Unlimited',
                'Parked Domains: Unlimited',
                'E-mail Accounts: Unlimited',
                'Cpanel (control panel): Yes',
                'Money Back Guarantee: 14 Days'
            ],
            footer:'You will have 1 Gift',
            border_bold:'13px solid #FF8502',
            color:'#FF8502',
            border:'1px solid #FF8502',
            font:'larger'
        },
        {
            id:2,
            title:'Pro',
            para:'for Individuals that need sharing vlogs or need huge portfolio.',
            $:'$5/mo',
            ul:[
                'Disk Space: 3000 M.B',
                'Bandwidth: 3 TERA',
                'SubDomains: Unlimited',
                'Parked Domains: Unlimited',
                'E-mail Accounts: Unlimited',
                'Cpanel (control panel): Yes',
                'Money Back Guarantee: 14 Days'
            ],
            footer:'1 Gift per/mo for year',
            border_bold:'13px solid #A512FF',
            color:'#A512FF',
            border:'1px solid #A512FF',
            font:'larger'
        },
        {
            id:3,
            title:'Business',
            para:'for Team that need sharing and reporting.',
            $:'$8/mo',
            discount:'5% discount during 2022',
            ul:[
                'Disk Space: 5000 M.B',
                'Bandwidth: 5 TERA',
                'SubDomains: Unlimited',
                'Parked Domains: Unlimited',
                'E-mail Accounts: Unlimited',
                'Cpanel (control panel): Yes',
                'Money Back Guarantee: 14 Days'
            ],
            footer:'3 Gifts per/mo for year',
            border_bold:'13px solid #72A926',
            color:'#72A926',
            border:'1px solid #72A926',
            font:'larger'
        },
        {
            id:4,
            title:'Enterprise',
            para:'for very small businesses and freelancers',
            $:'$12/mo',
            discount:'8% discount during 2022',
            ul:[
                'Disk Space: 10000 M.B',
                'Bandwidth: 10 TERA',
                'SubDomains: Unlimited',
                'Parked Domains: Unlimited',
                'E-mail Accounts: Unlimited',
                'Cpanel (control panel): Yes',
                'Money Back Guarantee: 14 Days'
            ],
            footer:'Just Call Us',
            border_bold:'13px solid #1C5EDD',
            color:'#1C5EDD',
            border:'1px solid #1C5EDD',
            font:'larger'
        },
    ]
    return(
        <Element id="hosting" className="host">
            <h1>Hosting Pricing</h1>
            <div className='hostings'>
                {items.map((item,id)=>{
                    return(
                        <div key={id} className='item' style={{ borderTop: item.border_bold, borderRadius: 8}}>
                            <h5 style={{fontSize:item.font}}>{item.title}</h5>
                            <p className='item_para'>{item.para}</p>
                            <div className='discount'>
                                <h4 style={{fontSize:item.font}}>{item.$}</h4>
                                <p>{item.discount}</p>
                            </div>
                            <ul>
                                {item.ul.map((li, index) => (
                                    <li key={index}>{li}</li>
                                ))}
                            </ul>
                            <div className="box" style={{border:item.border, borderRadius:10}}>
                                <h5 style={{color:item.color}}>{item.footer}</h5>
                            </div>  
                        </div>
                    )
                })}
            </div>
            <p className='paraHost'>
            Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.
            Go Online, choose your plan and Contact us on:contact@focal-x.com | +963 935 033 139
            </p>    
        </Element>
    )
}
