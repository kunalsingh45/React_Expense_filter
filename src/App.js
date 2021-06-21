import React, { useEffect, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import Expenses from './components/Expenses' 
import NewExpense from './components/NewExpense';
import Layout from './layout/Layout';

// const INITIAL_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   }
// ];


function App() {
  
  const [expenses,setExpenses] = useState([])

  useEffect(()=>{
    
    async function fetchData() {
      const response = await fetch('https://react-http-f3275-default-rtdb.firebaseio.com/Expenses.json')
      const data = await response.json(response);
      const transformedExpense= [];
        for (const key in data) {
          const expenseObj = {
            id: key,
            ...data[key],
          }
          transformedExpense.push(expenseObj)
        }
        transformedExpense.map(data=> data.date=new Date(data.date))
        setExpenses(transformedExpense)
    }
    fetchData();
  },[])
  
  const addExpenseHandler = async(expense) =>{
    const response = await fetch('https://react-http-f3275-default-rtdb.firebaseio.com/Expenses.json',{
      method:'POST',
      body:JSON.stringify(expense)
  })
  await response.json(response);
  }

  
  return (
    <div >
      <Layout />
      <Switch>
      <Route path='/' exact>
          <Redirect to='/filter-expense' />
        </Route>
        <Route path='/add-expense' >
        <NewExpense onAddExpense={addExpenseHandler}/>
        </Route>
        <Route path='/filter-expense' >
        <Expenses items={expenses} />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
