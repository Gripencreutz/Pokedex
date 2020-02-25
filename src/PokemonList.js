import React from 'react'

export default function PokemonList({ pokemon }) {
    return (
        <>
            <div className="pokeContainer">
                <h1>Pokédex</h1>
                {pokemon.map(p => (
                    <div key={p}>
                        <h4 >{p}</h4>
                    </div>
                ))}
            </div>
        </>
    )
}
