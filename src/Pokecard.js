import React from 'react';
import './Pokecard.css';

const APIImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


const Pokecard = (props) => {
    let Pokeimg = `${APIImg}${props.id}.png`;
    return (
        <div className="PokeCard">
            <div className="Pokecard-name">{props.name}</div>
            <img className="Pokecard-img" src={Pokeimg}/>
            <div className="Pokecard-type">Type: {props.type}</div>
            <div className="Pokecard-exp">EXP: {props.exp}</div>
        </div>
    )
}

export default Pokecard;
