import React from "react"
import ExpenseForm from './Component/ExpenseForm';
import ExpenseList from './Component/ExpenseList';
import Header from "./Component/Header";

function App() {
  return (
   <>
   <Header />
   <ExpenseForm />
   <ExpenseList />
   </>
  );
}

export default App;
