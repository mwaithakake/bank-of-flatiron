import { useState } from 'react';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Search from './components/Search';
import Form from './components/Form';

function App() {
  const arr = [
    {
    
        date : "13th April",
        description : "Withdraw",
        category : "Income",
        amount: "3000"

    },
    {
    date : "12th April",
    description : "Deposit",
    category : "Hospital",
    amount: "5000"
    }, 

    {
      date : "9 April",
      description : "Produce",
      category : "Income",
      amount: "3000"
      },
      {
        date : "20th March",
        description : "Cash-in",
        category : "Enoyment",
        amount: "3000"
        }


]

const [transaction , setTransactions] = useState(arr)






  return (
    <div className="App">
      <Header/>
      <Search transaction = {transaction} setTransactions = {setTransactions} arr = {arr}/>
      <Form/>
     <Table transaction = {transaction}/>
      
    </div>
  );
}

export default App;
