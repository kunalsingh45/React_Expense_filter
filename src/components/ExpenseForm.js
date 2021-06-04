import React,{useState} from 'react';
import  './ExpenseForm.css'

const ExpenseFrom = (props) =>{
    const [expenseTitle,setExpenseTitle] = useState('') 
    const [expenseAmount,setExpenseAmount] = useState('') 
    const [expenseDate,setExpenseDate] = useState('') 

    const titleHandler = (event) =>{
        setExpenseTitle(event.target.value)
    }
    const amountHandler = (event) =>{
        setExpenseAmount(event.target.value)
    }
    const dateHandler = (event) =>{
        setExpenseDate(event.target.value)
    }
    const submitHnandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title:expenseTitle,
            amount:expenseAmount,
            date:new Date(expenseDate)
        }
        props.onSaveExpenseData(expenseData)
        setExpenseTitle("")
        setExpenseAmount("")
        setExpenseDate("")
    }

    const cancelAddHandler =  () =>{
        props.onCancelExpenseAdd()
    }
    return (
            <form onSubmit={submitHnandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>
                            Title
                        </label>
                        <input type="text" value={expenseTitle} onChange={titleHandler}/>
                    </div>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>
                            Amount
                        </label>
                        <input type="number" min="0.01" step="0.01" onChange={amountHandler} value={expenseAmount}/>
                    </div>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>
                            Date
                        </label>
                        <input type="date"  min="2019-01-01" max="2022-01-01" onChange={dateHandler} value={expenseDate}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={cancelAddHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
    )
}

export default ExpenseFrom;