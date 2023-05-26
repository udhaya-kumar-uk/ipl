import React, { useEffect, useState } from 'react';
import '../App.css'
import Datatable from '../Component/Datatable.js';
import Modal from '../PlayerModal/Modal.js';



function getstorage(key){
  let data=null;
  try {
    data=JSON.parse(localStorage.getItem(key))
  } catch (error) {
    console.log(error)
  }
  return data;
}

 const playermock={
    PLAYERNAME: '',
    COUNTRYNAME:'',
    PLAYERTEAM: '',
    JERSEYNUMBER:0, 
    SKILLS: [],
    ACTIONAMOUNT:0,
 }
export default function Team() {

  const [players,setplayers]=useState([])
  const [player, setplayer] = useState(playermock);

  useEffect(()=>{
   
    setplayers(getstorage("players"))
    
    return ()=>{} 
  },[])

  console.log(player,players)

  function handlestorage(data=[]){
      try {
          localStorage.setItem("players", JSON.stringify(data))
      } catch (error) {
        console.log(error)
      }
  }

  function handleinput(e) {
    const { id, value,type } = e.target;
    let playerdatacopy = { ...player, };
    if (type === "checkbox") {
       if (playerdatacopy["SKILLS"].indexOf(id) > -1) {
        playerdatacopy["SKILLS"] = playerdatacopy["SKILLS"].filter(
          (s) => s !== id
        );
      } else {
        playerdatacopy["SKILLS"].push(id);
      }
    } else {
      playerdatacopy[id] = value;
    }
   
    setplayer(playerdatacopy);
  }
  function handleaddplayer(e) {
   
    if (e) {
         let playerscopy = [];
        playerscopy.push(player);
        setplayers(playerscopy);
        console.log(players)
      try {
        let players=JSON.parse(localStorage.getItem("players"))
        if(players){
          players.push(player)
          setplayer(playermock)
          handlestorage(players) 
          setplayers(getstorage("players"))
        }

      } catch (error) {
        console.log(error)
      }
     
    }
  }
  function handledelete(name=""){
     let playerdatacopy=[...players,]
     playerdatacopy=playerdatacopy.filter((player)=>player.PLAYERNAME !==name)
     setplayers(playerdatacopy)
    }

  return (
  
      
  
<div className="container-main">
    <div >
    <div > 
        
        <img className='image-container'
         
          src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2019/03/Tata-IPL.jpg?fit=1200%2C675&ssl=1"
          alt="team banner"
        />
      </div>
    </div>
      <div>
      <div className='table'>
        <div className="row mb-4 p-3">
          <div className="col-6">
            <h1 className='h-tag'>
              PLAYERS TABLE
           </h1>
          </div>
          <div className="col-6 d-flex flex-row-reverse">
            <Modal
            data={player} 
            handlechange={handleinput} 
            handlesubmit={handleaddplayer} />
          </div>
        </div>
        <Datatable data={players} handledelete={handledelete} />
      </div>
     
      </div>
     
    </div> 
    
  );
}
  


// <div className="container-main">
//     <div className='left-container' >
//     <div className="image-container">
        
//         <img
         
//           src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2019/03/Tata-IPL.jpg?fit=1200%2C675&ssl=1"
//           alt="team banner"
//         />
//       </div>
//     </div>
//       <div className='right-container'>
//       <div className='container-main'>
//         <div className="row mb-4 p-3">
//           <div className="col-6">
//             <h1 className='h-tag'>
//               PLAYERS TABLE
//            </h1>
//           </div>
//           <div className="col-6 d-flex flex-row-reverse">
//             <Modal
//             data={player} 
//             handlechange={handleinput} 
//             handlesubmit={handleaddplayer} />
//           </div>
//         </div>
//         <Datatable data={players} handledelete={handledelete} />
//       </div>
     
//       </div>
     
//     </div> 