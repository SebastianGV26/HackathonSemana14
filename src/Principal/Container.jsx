import React from 'react'
import './Container.css'
import { Cards } from './Cards';
export const Container = ({dogs}) => {
    console.log(dogs);
    return (
        <main className='Container_main' id='lista_perros'>
            {
                dogs.map((dog) => (
                    <Cards dog = {dog} key = {dog.id}/>
                ))
            }
        </main>
    )
}