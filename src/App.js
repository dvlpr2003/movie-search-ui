import { useState } from 'react';
import './App.css';
import Netflixtopseries from './movieList';
import Logo from './logo';
import {Cart,CartItems} from './Cart';



export default function App(){
  const [Filtered,setFiltered]=useState([])
  const [Play,setPlay]=useState(false)
  const [itemCart,setitemCart]=useState([])
  
  let itemElements = itemCart
  function remove(id){
    setitemCart((e)=>e.filter((e)=>e.id !== id))
  }

  function Extract(e){
    setFiltered((ex)=>[...e])
  }
  function playClick(){ 
    setPlay(!Play)
    
  }


  return (
    <>
    <Header Extract = {Extract} playClick={playClick}/>
    <Content Filtered={Filtered} setitemCart={setitemCart} itemCart={itemCart}/>
    <CartItems  Play={Play} itemElements={itemElements} remove={remove}/>

    </>
  )
}
function Header({Extract,playClick}){
  return(
    <div id='heading-bar'>
      <Logo />
      <SearchBar Extract ={Extract} />
      <Cart playClick={playClick}/>

    </div>
  )
}
function SearchBar({Extract}){
  function Searchfuc(es){
    const x = Netflixtopseries.filter((e)=>e.series.startsWith(es))
    Extract(x)
  }
  return(
    <>
    <input placeholder='Search movie . . .' onChange={(e)=>Searchfuc(e.target.value)} id='searc-box'/>

    </>
  )
}
function Content({Filtered,setitemCart,itemCart}){
  const [Name,setName]=useState("")
  const [Image,setImage]=useState("")
  const [Id,setId]=useState(null)
  const [Description,setDescription]=useState("")
  const [Rating,setRating]=useState(null)

  return(
    <div id='main-container'>
      <Listofmovie setName={setName} setDescription={setDescription} setImage={setImage} setRating={setRating} Filtered={Filtered} setId={setId} />
      <Moviedetail name={Name} image={Image} description={Description} rating={Rating} setitemCart={setitemCart} itemCart={itemCart} Id = {Id}/>
    </div>
  )
}
function Listofmovie({setName,setDescription,setImage,setRating,Filtered,setId}){
  return(
    <div id='container-1'>
      {
      
      Filtered.map((e)=> < ListofmovieItems image = {e.img} series = {e.series} id={e.id} description={e.description} Rating={e.Rating} setName={setName} setImage={setImage} setDescription={setDescription} setRating={setRating} setId={setId}/>)
      }
      
    </div>
  )
  }
function ListofmovieItems({image,series,description,Rating,setName,setDescription,setImage,setRating,setId,id}){

  function updateCont(){
    setName(series)
    setDescription(description)
    setImage(image)
    setRating(Rating)
    setId(id)


  }
  return (
    <div className='series-container' onClick={updateCont}>
      <img src={image} alt={series}/>
      <span>{series}</span>
    </div>
  )
}
function Moviedetail({name,image,description,rating,setitemCart,itemCart,Id}){
  const ele ={name:name,image:image ,id:Id}

  function AdditemsCart(){
    let index = itemCart.findIndex(item => item.name === ele.name) ;
    if (index !== -1){
      setitemCart((e)=> [...e])
    }
    else {
      setitemCart((e)=> [...e,ele])

    }
    
    
  }
  return(
    <div id='container-2'>
      <div id='details' style={name ===""?{display:"none"}:{display:"block"}}>
        <div id='details-child'>
          <img src={image} alt={name}id='series-img'/>
          <span id='series-name'>{name}</span>
          <div id='imdb-container'>
            <img src="img/imdb.jpeg" alt='imdb' id='imdb'/>
            <span>{rating}</span>
          </div>
          <div id='details-description'>
            <span>{description}</span>
          </div>
          <div id='detail-btn-container'>
            <button onClick={AdditemsCart}>Add Watch list</button>
          </div>
        </div>

      </div>

    </div>
  )
}