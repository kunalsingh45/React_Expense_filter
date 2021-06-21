import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const [addExpFlag, setAddExpenseFlag] = useState(false)
    const saveExpenseDataHandler = (saveExpenseData)=>{
        const expenseData = {
            ...saveExpenseData,
        }
        props.onAddExpense(expenseData);
    }

    const changeExpenseFlagHandler = () =>{
        setAddExpenseFlag(!addExpFlag)
    }


    if(!addExpFlag){
        return (<div className="new-expense">
            <button type="submit" onClick={changeExpenseFlagHandler}>Add New Expense</button>
    </div>)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancelExpenseAdd = {changeExpenseFlagHandler}/>
        </div>
    )
}

export default NewExpense;