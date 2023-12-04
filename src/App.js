import {React,useState} from "react";
import data from "./data"
import Tours from "./components/Tours";
const App = () => {
  const [tours,setTour]=useState(data);  
  
  function removeTour(id) // function for removing the cards
  {
      const newTours=tours.filter(tour=> tour.id !== id);
      setTour(newTours);
  }

  if(tours.length === 0)
  {
      return(
        <div className="refersh">
            <h2>No Tours Left</h2>
            <button className="refresh-btn" onClick={()=>setTour(data)}>Refresh</button>
        </div>
      );
  }
  return(
    <div className="App">
        <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
