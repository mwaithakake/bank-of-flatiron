import Row from "./Row"


function Table({transaction}){
   return(
        <>
<table className="table">
    <thead>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
        </tr>
        </thead>
        <tbody>
       <Row transaction={transaction}/>
      </tbody>
</table>
</>
    )}


export default Table
