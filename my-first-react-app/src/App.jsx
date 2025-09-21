import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
    const items = [
        {id:1, name:'About'},
        {id:2, name:'Skills'},
        {id:3, name:'Contact'},
    ];
  return (
    <>
        <Header text="Hello"/>
        <Menu data = {items}>
            <p>Основний контент сторінки розташований тут.</p>
        </Menu>
    </>
  )
}

export default App
