import React from "react"


function Row({transaction}){
 const rows = transaction.map((transaction) =>  {
return (
       
        <tr>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
        </tr>
       
)})
return (
     <div>
     {rows}
     </div>
)}

export default Row