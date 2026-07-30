import './App.css'
import SimpleList from "./components/ListOne";
import UserList from "./components/ListTwo";
import ProductListDemo from "./components/ListThree";
import CounterHook from "./components/HooksOne";

function App() {
  
  return (
    <>
      <SimpleList />
      <UserList />
      <ProductListDemo />

      <CounterHook/>
    </>
  )
}

export default App