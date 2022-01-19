import { useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/pages/cart';
import Home from './components/pages/home';



function App() {

  const imgFruit = [ 
    {
      nome: "Apple",
      imagem: "https://i1.wp.com/www.felizmelhoridade.com.br/wp-content/uploads/2018/04/Ma%C3%A7%C3%A3-%E2%80%93-Formas-de-comer-e-indica%C3%A7%C3%B5es.jpg?fit=1024%2C978&ssl=1"
    },
    {
      nome: "Apricot",
      imagem:"https://image.freepik.com/free-photo/fresh-yellow-apricots-isolated-white_114579-10486.jpg"
    },
    {
      nome: "Banana",
      imagem: "https://image.freepik.com/free-photo/delicious-banana_144627-5374.jpg"
    },
    { 
      nome: "Blackberry",
      imagem: "https://media.istockphoto.com/photos/closeup-of-two-fresh-blackberry-with-leaves-picture-id173612468?k=20&m=173612468&s=612x612&w=0&h=jY790aT-6qVXYaOXN0mfJrgA7MVQhrCvPn12EtYSAcI="
    },
    {
      nome: "Blueberry",
      imagem: "https://5285.cdn.simplo7.net/static/5285/sku/e-liquids-Eliquid-Blueberry-1520861399941.png"
    },
    {
      nome: "Cherry",
      imagem: "https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    
    },
    {
      nome:"Durian",
      imagem: "https://sc04.alicdn.com/kf/Ue008601b2707478782509ac5e631b72ez.jpg"
    },
    { 
      nome: "Fig",
      imagem: "https://www.collinsdictionary.com/images/full/fig_116934664.jpg"
    },
    {
      nome: "Gooseberry",
      imagem: "https://www.collinsdictionary.com/images/full/gooseberry_152140109.jpg"
    } , 
    {
      nome: "Grapes",
      imagem: "https://media.istockphoto.com/photos/green-grape-isolated-on-white-background-picture-id489520104?k=20&m=489520104&s=612x612&w=0&h=n1_B8jn9fb4dQibPhkXftNpjKA4Rvrjp_ttgj6sq5jY="
    } , 
    {
      nome: "Guava",
      imagem: "https://img.myloview.com.br/fotomurais/isolated-green-guava-with-pink-flesh-one-whole-fruit-and-a-half-isolated-on-white-background-with-clipping-path-700-194992948.jpg"
    } , 
    {
      nome: "Kiwi",
      imagem: "https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/kiwi[1]-1000x1000.jpg"
    } , 
    {
      nome: "Lemon",
      imagem: "https://media.istockphoto.com/photos/lemon-fruit-with-half-and-leaves-isolated-on-white-picture-id466175634?k=20&m=466175634&s=170667a&w=0&h=-Cs9hdtGw8DCtScwxbG0jLG0qvLaSL9ZIa26cSJNYr4="
    } , 
    { 
      nome: "Lime",
      imagem: "https://static.libertyprim.com/files/familles/lime-large.jpg?1569491474",
    },
    { 
      nome: "Lingonberry",
      imagem: "https://www.seeds-gallery.shop/7697-large_default/lingonberry-or-cowberry-seed.jpg",
    },
    { 
      nome: "Lychee",
      imagem: "https://xflavors.net/uploads/thumbs/produtos/HbSHT8Fry1slGEShO6g3KIn3l24GnyWhwGBqUA3u.jpeg",
    },
    { 
      nome: "Mango",
      imagem: "https://xflavors.net/uploads/thumbs/produtos/XfLmVQaU5rbzkvqJZcebK5fgMgPweEcPZt56A72K.jpeg",
    },
    { 
      nome: "Melon",
      imagem: "https://groceries.morrisons.com/productImages/558/558743011_0_640x640.jpg?identifier=8817740c45e1421c37fac9d4cdc76bb3",
    },
    {
      nome: "Orange",
      imagem:"https://media.istockphoto.com/photos/orange-picture-id185284489?k=20&m=185284489&s=170667a&w=0&h=e8ZoHukToTFk2s0EqVBiZxdCs1EIKNGzT865MKU45Es=",
    },
    {
      nome: "Papaya",
      imagem:"https://fortatacadista.vteximg.com.br/arquivos/ids/161329-1000-1000/MAMAO-PAPAYA-KG---631906.jpg?v=637437445857270000",
    },
    {
      nome: "Passionfruit",
      imagem:"https://media.istockphoto.com/photos/yellow-maracuya-isolated-on-white-background-picture-id1135509167?k=20&m=1135509167&s=612x612&w=0&h=jF9_4Xuzf2Jc3-hbag88nSWmHqTEcU147qnsQPMOvXo=",
    },
    {
      nome: "Pear",
      imagem:"https://media.istockphoto.com/photos/green-yellow-pear-fruits-isolated-on-white-picture-id1131349074?k=20&m=1131349074&s=612x612&w=0&h=ZZ9mP7lwqGKY8Mh154_H1U9jtPhk_P4kIIDt25F7EsA=",
    },
    {
      nome: "Persimmon",
      imagem:"https://www.collinsdictionary.com/images/full/persimmon_346893077.jpg",
    },
    {
      nome: "Pineapple",
      imagem:"https://www.collinsdictionary.com/images/full/pineapple_124985672.jpg",
    },
    {
      nome: "Raspberry",
      imagem:"https://i.pinimg.com/736x/1e/92/df/1e92df0c37ec92ddd9685d858bdf862b.jpg",
    },
    {
      nome: "Strawberry",
      imagem: "https://www.crodapersonalcare.com/croda_image_downloads.ashx?fn=Personalcare_0_strawberry-shutterstock_771314446.jpg&mn=personalcare&w=768&xr=0&yr=0&xfp=6&yfp=6&hash=FDA6E5C93BDE278AA0B30F90EF2A401519C138999FEC74AA&t=7"
    },
    {
      nome: "Tomato",
      imagem:"https://saklaplants.com/wp-content/uploads/2021/10/128-tomato.jpg",
    },
    {
      nome: "Watermelon",
      imagem:"https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon.jpg",
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

  return ( <>
    <div className="App">
      {fruits.map(fruit => console.log(fruit.name))}
      {fruits.map( fruit => {
        return <>
        <p>{fruit.name}</p>
        {imgFruit.filter(fruitImg => fruit.name === fruitImg.nome).length ? 
        <img className="fruit__image" src={imgFruit.filter(fruitImg => fruit.name === fruitImg.nome)[0].imagem} alt={fruit.name}></img>
        : 
        <>
        </>
          
        }
        </>
      })}
    </div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="cart" element={<Cart/>}></Route>
    </Routes>
    </>
  );
}

export default App;
