export  function Cart({playClick}){
    return (
        <>
        <img src="img/play-list.png" alt="play-list" id="play-list" onClick={playClick} />
        </>
    )
}

export  function CartItems({Play,itemCart}){
    return <>
    <div id="add-card-items" style={Play?{display:"block"}:{display:"none"}}>
        {
            itemCart.map(e=><Cartelements name={e.name} image ={e.image}/>)
        }


    </div>
    </>
}
function Cartelements({name,image}){
    return <>
    <div id="cart-elements">
        <img src={image} alt={name}/>
        <span>{name}</span>
    </div>
    </>
}
