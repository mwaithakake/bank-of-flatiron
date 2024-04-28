import { useState } from "react"

function Form({transaction,setTransactions}){
const  [Dataform , setData ] = useState ({
     date : "",
     description : "",
     category : "",
     amount :""

})

function submitForm(event){
      event.preventDefault()
     setTransactions([...transaction,Dataform])

    }
function handleChange(event){
console.log(event.target.value)
setData(
    {
        ...Dataform,

        [event.target.name] : event.target.value
    })
    
   console.log(Dataform)
}

 return(
<form onSubmit={submitForm} className="input-group mb-3">
<input type="date" className="form-control" onChange={handleChange} placeholder="Date" value={Dataform.date} name= "date" /> 
<input type="text" className="form-control" onChange={handleChange}placeholder="Description" value={Dataform.description} name= "description" />
<input type="text" className="form-control" onChange={handleChange}placeholder="Category" value={Dataform.category} name="category" />
<input type="text" className="form-control" onChange={handleChange}placeholder="Amount" value={Dataform.amount} name= "amount"/>
<button type="submit" className=""> Add Transaction</button>
</form>



    )
}

export default Form