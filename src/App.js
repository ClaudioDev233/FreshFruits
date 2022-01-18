import { useState, useEffect} from 'react'
import './App.css';



function App() {

  const imgFruit = [ 
    {
      nome: "Apple",
      imagem: "https://i1.wp.com/www.felizmelhoridade.com.br/wp-content/uploads/2018/04/Ma%C3%A7%C3%A3-%E2%80%93-Formas-de-comer-e-indica%C3%A7%C3%B5es.jpg?fit=1024%2C978&ssl=1"
    }
  ]
  

const [fruits, setFruit] = useState([])  

useEffect(() => {
   
  const proxy = "https://secret-reef-88782.herokuapp.com/" // proxy para resolver problema de CORS 
  const url = "https://www.fruityvice.com/api/fruit"

  async function fetchFruit(){
    const response = await (await fetch(`${proxy}${url}/all`)).json()
    setFruit(response)
  }
  fetchFruit()
},[])

  /* const frutaFitrada = imgFruit.filter(fruitImg => fruit.name === fruitImg.nome) */

  return (
    <div className="App">
      {fruits.map( fruit => {
        return <>
        <p>{fruit.name}</p>
        {imgFruit.filter(fruitImg => fruit.name === fruitImg.nome).length ? 
        <img src={imgFruit.filter(fruitImg => fruit.name === fruitImg.nome)[0].imagem}></img>
        : 
        <>
        </>
          
        }
        
        </>
      })}
    </div>
  );
}

export default App;
