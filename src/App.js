
import './App.css';
import{useState, useEffect} from 'react'

function App() {
   // variable that holds our api call
  const url = 'https://dog.ceo/api/breeds/image/random';
  
  // initialize state
  const[dog, setDog] = useState([]);

  // function that performs the ajax call
  const getDog = async() =>{
    const response = await fetch(url);
    const data = await response.json();
    setDog(data);
  }
  
  // invoke call to use effect to run an effect once the component loads
  useEffect(() => {
    getDog();
  }, []);

  const handleClick = (e) => {
    getDog(e)
  }
  
  return (
    <div className="App">
     
     <h1>Random Dog Gen!</h1>
     
     <button onClick={()=> handleClick()} className="button-primary">Get Dog</button>
     
     <div className='img'>
      <img src={dog.message}/>
     </div>
    
    </div>
  );

}

export default App;
