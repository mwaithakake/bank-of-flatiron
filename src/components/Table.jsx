import Row from "./Row"



function Table(){
    // const transaction = [
    //     {
            
    //         date : "13th April",
    //         description : "Withdraw",
    //         category : "Income",
    //         amount: "3000"
    
    //     },
    //     {
    //     date : "12th April",
    //     description : "Withdraw",
    //     category : "Income",
    //     amount: "3000"
    //     }
    // ]


    

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
       <Row transaction={transaction} />
      </tbody>
</table>
</>
    )

}


export default Table