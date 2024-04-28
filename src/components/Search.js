import React from "react";
import { useState } from "react";

const {transaction , setTransactions} = useState([
    {
    
            date : "13th April",
            description : "Withdraw",
            category : "Income",
            amount: "3000"
    
        },
        {
        date : "12th April",
        description : "Withdraw",
        category : "Income",
        amount: "3000"
        }

    
      ])


      function handleSearch(event){
       const value = event.target.value
       const filter = transaction.filter((transaction) => {
           return transaction.description === value
       })
      }

     
      console.log(transaction)

    
    
      function Search() {
        return (
          <div className="m-4"  >
            <input className="form-control form-control-sm" type="text" placeholder="Search your Recent Transactions" onChange={handleSearch}/>
          </div>
        );
      }
      
      export default Search
