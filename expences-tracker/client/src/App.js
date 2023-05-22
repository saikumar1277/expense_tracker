import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpance from "./components/IncomeExpance";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpance />
      </div>
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
