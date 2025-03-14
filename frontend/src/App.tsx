
import './App.css'
import BowlerList from './BowlerList'

function Header(){
  return(
    <>
    <h1>!!!Bowling Time!!!</h1>
    <h4>Hey Yall, it's Barbara & David
    Fournier, and we are so excited to annouce the new Bowling teams!</h4>
    </>
  )
}


function App() {


  return (
    <>
      <Header />
      <BowlerList />
    </>
  )
}

export default App
