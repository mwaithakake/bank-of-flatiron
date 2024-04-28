import React from "react";

function Search({transaction,setTransactions,arr}) {

  function handleSearch(event){
    const hint = event.target.value
    if (hint.length > 0) {
        const filter = transaction.filter((transaction) => {
            return transaction.description.toLowerCase().includes(hint.toLowerCase())
        })
        if (filter.length > 0) {
        setTransactions([...filter])
        }
      
    }else {
        setTransactions([...arr])
    }
  
  
   }



  return (
    <div className="m-4"  >
      <input className="form-control form-control-sm" type="text" placeholder="Search your Recent Transactions" onChange= {handleSearch}/>
    </div>
  );
}

export default Search








      
     
