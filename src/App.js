import logo from './logo.svg';
import './App.css';
import { Addcolor } from './Addcolor';



export default function App() {
//   let userlist=[
//     {
//       pic:"https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
//       name : "Bala"
//     },
//     {
//       pic:"https://cdn6.f-cdn.com/files/download/38546484/28140e.jpg",
//       name : "Ragu"
//     }
// ];
  let userlist = [
    {
      subscription: "Free",
      cost:"$0/month",
      consumption :"✔ Single User",
      storage:"✔ 50GB Storage",
      usage:"✔ Unlimited Public Project",
      access:"✔ Community Access",
      unneccessary:"✘ Unlimited Private Project",
      device:"✘ Dedicated Phone Support",
      domain:"✘ Free Subdomain",
      report:"✘ Monthly Status Report"
    },
    {
      subscription: "Plus",
      cost:"$9/month",
      consumption :"✔ 5 User",
      storage:"✔ 50GB Storage",
      usage:"✔ Unlimited Public Project",
      access:"✔ Community Access",
      unneccessary:"✔ Unlimited Private Project",
      device:"✔ Dedicated Phone Support",
      domain:"✔ Free Subdomain",
      report:"✘ Monthly Status Report"
    },
    {
      subscription: "Pro",
      cost:"$49/month",
      consumption :"✔ Unlimited User",
      storage:"✔ 50GB Storage",
      usage:"✔ Unlimited Public Project",
      access:"✔ Community Access",
      unneccessary:"✔ Unlimited Private Project",
      device:"✔ Dedicated Phone Support",
      domain:"✔ Free Subdomain",
      report:"✔ Monthly Status Report"
    }
  ]

  return (
    <div className="App">
      {userlist.map((list)=>(
        <Pricecard sub = {list.subscription} cost = {list.cost}
        consume={list.consumption} storage={list.storage} usage={list.usage}
        access={list.usage} unneccessary={list.unneccessary}
        device={list.device} domain={list.domain} report={list.report}/>
      ))}
      {/* <Addcolor /> */}
    </div>
  );
}
function Pricecard({sub,cost,consume,storage,usage,access,unneccessary,device,domain,report}){
  const styles={
    backgroundColor:"white",
    boxShadow:"0 8px 12px 0px rgba(0, 0, 0, 0.2)",
    boxShadowTop:"5px",
    padding:"20px",
    borderRadius:"10px",
    marginBottom:"20px",
  }
  const styles1={
   
    border:"2px solid black",
    backgroundColor: "skyblue"
  }
  return(
    <div className='total' style={styles1}>
    <div style={styles} className='card'>
     <p color='textSecondary'>{sub}</p>
     <h2>{cost}</h2>
     <p className='size'>{consume}</p>
     <p className='size'>{storage}</p>
     <p className='size'>{usage}</p>
     <p className='size'>{access}</p>
     <p className='size'>{unneccessary}</p>
     <p className='size'>{device}</p>
     <p className='size'>{domain}</p>
     <p className='size'>{report}</p>
     <button className='primary-btn'>Button</button>
    </div>
    </div>
  )
}
