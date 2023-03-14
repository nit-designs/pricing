import React from 'react'
import './App.css';

export default function App() {
  const data = [ 
       {      plan :"FREE",      price: "$0",      month: "/month",      accesstick :"✔",      accessfalse :"❌",      user :"Single User",      memory :"5GB Storage",      duration :"Unlimited Public Projects",      ca: "Community Access",      up :"Unlimited Private Projects",      support:"Dedicated Phone Support",      domain:"Free Subdomain",      reports:"Monthly Status Reports"    }, 
       {      plan:"PLUS",      price :"$9",      month :"/month",      accesstick:"✔",      accessfalse:"❌",      user:"5 User",      memory :"50GB Storage",      duration :"Unlimited Public Projects",      ca:"Community Access",      up :"Unlimited Private Projects",      support:"Dedicated Phone Support",      domain:"Free Subdomain",      reports:"Monthly Status Reports"    },   
       {      plan :"PRO",      price:"$49",      month:"/month",      accesstick:"✔",      accessfalse:"❌",      user:"Unlimited User",      memory :"150GB Storage",      duration :"Unlimited Public Projects",      ca:"Community Access",      up :"Unlimited Private Projects",      support:"Dedicated Phone Support",      domain:"Unlimited Free Subdomain",      reports:"Monthly Status Reports"    }      ] 

  return (
    <div className="App">
      {data.map((item)=> {
        return <Repeated
          key={item.plan}
          plan={item.plan}
          price={item.price}
          month={item.month}
          accesstick={item.accesstick}
          accessfalse={item.accessfalse}
          user={item.user}
          memory={item.memory}
          duration={item.duration} 
          ca={item.ca}
          up={item.up} 
          support={item.support}
          domain={item.domain}
          reports={item.reports}
        />
      })}
    </div>
  );
}

function Repeated(props){
  let cardClass = '';

  if (props.plan === 'FREE') {
    cardClass = 'card-1';
  } else if (props.plan === 'PLUS') {
    cardClass = 'card-2';
  } else if(props.plan === 'PRO'){
    cardClass = 'card-3';
  }
  return(
    <div className={`card ${cardClass}`}>
      <h5>{props.plan}</h5>
      <h2>{props.price}<span>{props.month}</span></h2>
      <hr></hr>
      <p className='user'>{props.accesstick}<span>{props.user}</span></p>
      <p>{props.accesstick}<span>{props.memory}</span></p>
      <p>{props.accesstick}<span> {props.duration}</span></p>
      <p>{props.accesstick}<span>{props.ca}</span></p>
      <p className="up">{props.accessfalse}<span> {props.up}</span></p>
      <p className="sup">{props.accessfalse}<span>{props.support}</span></p>
      <p className="domain">{props.accessfalse} <span>{props.domain}</span></p>
      <p className="report">{props.accessfalse}<span>{props.reports}</span></p> 
      <button className="btn">BUTTON</button>
      </div>
  )
}
