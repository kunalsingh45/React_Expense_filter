import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom'; 

const MainNavigation = () =>{

    return (<header className={classes.header}>
        <div className={classes.logo}>Expense Tracer</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/filter-expense'  activeClassName={classes.active}>All Expenses</NavLink>
                </li>
                <li>
                    <NavLink to='/add-expense'  activeClassName={classes.active}>Add New Expense</NavLink>
                </li>
            </ul>
        </nav>
    </header>)

}

export default  MainNavigation;