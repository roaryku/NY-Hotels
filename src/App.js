import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [hotels, setHotels] = useState(data);
  const [showText, setShowText] = useState(false);
  

  return (
    <div>
      <div className='container'>
        <h1>NYC top {hotels.length} hotels</h1>
      </div>

      {hotels.map((item => {
        const {id, hotelName, description, image, source, showMore} = item;

        const removeHotel = (id) =>{
        let newHotel = hotels.filter((hotel) => hotel.id !==id);
        setHotels(newHotel)
        }
 
        const showTextClick = (item) => {
          item.showMore = !item.showMore
          setShowText(!showText)
        }
        
        return(
          <div key={id}>
            <div className='container'>
              <h2>{id} - {hotelName}</h2>
            </div>

            <div className='container'>
              <p>{showMore ? description : description.substring(0, 220) + "..."}
              <button onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button>
              </p>
            </div>

            <div className='container'>
              <img src={image} alt="NY" width="500px"/>
            </div>

            <div className='container'>
              <p>{source}</p>
            </div>

            <div className='container'>
              <button className='btn' onClick={() => removeHotel(id)}>Remove</button>
            </div>
          </div>
        )
      }))}
      <div className='container'>
        <button className='btn cta' onClick={() => setHotels([])}>Delete All</button>
      </div>
    </div>
  );
}

export default App;
