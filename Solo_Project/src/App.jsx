
import './App.css'
import Badges from './components/Badges'
import Banners from './components/Banners'
import Cards from './components/Cards';
import { colorArray, bannerArray, cardArray } from "./Data"



function App() {


  return (
    <>
      <div className='container-item'>
        {
          colorArray.map((item) => (
            <Badges color={item} key={item} />
          ))
        }
      </div>
      <div className='container-ban'>
        {
          bannerArray.map((item) => (
            <Banners title={item.title} text={item.text} status={item.status} icon={item.icon} key={item} />
          ))
        }
      </div>

      <div className='container-card'>
        {
          cardArray.map((item) => (
            <Cards cardTitle={item.cardTitle} cardText={item.cardText} iconCard={item.iconCard} key={item} />
          ))
        }
      </div>
    </>
  )
}

export default App
