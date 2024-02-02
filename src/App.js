import { useState } from 'react';
import './App.css';
import Netflixtopseries from './movieList';

export default function App(){
  const [Filtered,setFiltered]=useState([])
  function Extract(e){
    setFiltered((ex)=>[...e])
  }
  return (
    <>
    <Header Extract = {Extract}/>
    <Content />
    </>
  )
}
function Header({Extract}){
  return(
    <div id='heading-bar'>
      <SearchBar Extract ={Extract} />

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
    <input placeholder='Search movie . . .' onChange={(e)=>Searchfuc(e.target.value)}/>
    </>
  )
}
function Content(){
  const [Name,setName]=useState("")
  const [Image,setImage]=useState("")
  const [Description,setDescription]=useState("")
  const [Rating,setRating]=useState(null)

  return(
    <div id='main-container'>
      <Listofmovie setName={setName} setDescription={setDescription} setImage={setImage} setRating={setRating}/>
      <Moviedetail name={Name} image={Image} description={Description} rating={Rating}/>
    </div>
  )
}
function Listofmovie({setName,setDescription,setImage,setRating}){
  return(
    <div id='container-1'>
      {
      
      Netflixtopseries.map((e)=> < ListofmovieItems image = {e.img} series = {e.series} description={e.description} Rating={e.Rating} setName={setName} setImage={setImage} setDescription={setDescription} setRating={setRating}/>)
      }
      
    </div>
  )
  }
function ListofmovieItems({image,series,description,Rating,setName,setDescription,setImage,setRating}){

  function updateCont(){
    setName(series)
    setDescription(description)
    setImage(image)
    setRating(Rating)


  }
  return (
    <div className='series-container' onClick={updateCont}>
      <img src={image} alt={series}/>
      <span>{series}</span>
    </div>
  )
}
function Moviedetail({name,image,description,rating}){
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
            <button>Add Watch list</button>
          </div>
        </div>

      </div>

    </div>
  )
}