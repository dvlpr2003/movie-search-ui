
export  function Cart({playClick}){
    return (
        <>
        <img src="img/play-list.png" alt="play-list" id="play-list" onClick={playClick} />
        </>
    )
}

export  function CartItems({Play,itemElements,remove}){
   
    
    return <>
    <div id="add-card-items" style={Play?{display:"block"}:{display:"none"}}>
        {
            itemElements.map(e=><Cartelements name={e.name} image ={e.image}  id ={e.id} remove={remove}/>)
        }


    </div>
    </>
}
function Cartelements({name,image,id,remove}){
   
    return <>
    <div id="cart-elements">
        <img src={image} alt={name}/>
        <span>{name}</span>
        <div id="cross-icon">
            <img src="img/cross.png" alt="cross"  onClick={()=>remove(id)}/>
        </div>
    </div>
    </>
}
