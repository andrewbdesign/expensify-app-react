import React from 'react'
import ExpenseListFrom from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseListFrom />
    </div>
)
export default ExpenseDashboardPage