import React from 'react'


export default function Datatable({data=[],handledelete=(name)=>{}}){
        
  return(
    <table className=" container table table-hover  border border-2">
    <thead>
      <tr className="border  fs-5">
        <th className="border" scope="col">Position</th>
        <th className="border " scope="col">Player Name</th>
        <th className="border" scope="col">Country Name</th>
        <th className="border" scope="col">Select Team</th>
        <th className="border" scope="col">Jersey Number</th>
        <th className="border" scope="col">Role</th>
        <th className="border" scope="col">Action Amount</th>
      </tr>
    </thead>
  
          {data ? data.map((player,index) =>(
            <tbody>   <tr className="border  fs-5" key={`datatable-players-${index}`}>
           <th className="border" scope="row">{index+1}</th>
           <td className="border" >{player.PLAYERNAME}</td> 
           <td className="border">{player.COUNTRYNAME}</td>
           <td className="border">{player.PLAYERTEAM}</td>
           <td className="border">{player.JERSEYNUMBER}</td>  
           <td className="border">
            {player.SKILLS.map((s,i)=>(<span 
       
           key={`player-skills-${player.PLAYERNAME}-skills`}  
           class="badge bg-light text-dark"
           >
            {s}
            </span>
            ))}</td>
           <td className="border">{player.ACTIONAMOUNT}</td>
           <td><button 
                className='btn btn-sm btn-danger'
                onClick={()=>(handledelete(player.PLAYERNAME))}   
             >delete</button></td>
           
         </tr>
         </tbody>
        )): <td>players not found</td>}
  
  </table>
  )
}