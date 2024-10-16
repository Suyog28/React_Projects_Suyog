import './App.css'
import ScroreCard from './components/ScroreCard'
import Card from './components/Card'
function App() {


  return (
    <div className='section'>
      <ScroreCard />
      <Card age={[17, 3, 18]} />
    </div>
  )
}

export default App
