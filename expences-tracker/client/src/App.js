import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpance from "./components/IncomeExpance";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";
import Login from "./components/Login";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="container">
                  <Balance />
                  <IncomeExpance />
                </div>
                <TransactionList />
                <AddTransaction />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
