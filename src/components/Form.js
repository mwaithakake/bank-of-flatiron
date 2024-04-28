function Form(){
    return(
<form className="input-group mb-3">
<input type="text" className="form-control" placeholder="Date" aria-label="Username"/> 
<input type="text" className="form-control" placeholder="Description" aria-label="Username"/>
<input type="text" className="form-control" placeholder="Category" aria-label="Username"/>
<input type="text" className="form-control" placeholder="Amount" aria-label="Username"/>
<button type="submit" className=""> Add Transaction</button>
</form>



    )
}

export default Form