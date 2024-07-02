import React, { useState } from 'react'
import Kalki from './image/Movie2.jpg'
import Kalkibg from './image/kalki-bg.jpg'
import jhamkudi from './image/Movie10.jpg'
import Mahi from './image/Movie5.webp'
import chandu from './image/Movie11.jpg'
import munjya from './image/Movie14.jpg'
import jnu from './image/18.jpg'
import bb from './image/17.jpg'
import trisha from './image/20.jpg'




import { useParams } from 'react-router-dom'


const Seatbook = () => {

    const { id } = useParams()
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Kalki 2898 AD',
            img: Kalki,
            bg: Kalkibg,
            vietype: '2d,4DX,3D',
            time: '3h 1m',
            ua: 'UA',
            type: 'Action,Thriller',
            date: '27 Jun , 2024',
        },
        {
            id: 2,
            name: 'Mahi',
            img: Mahi,
            bg: Kalkibg,
            vietype: '2d',
            time: '2h 40m',
            ua: 'UA',
            type: 'sport',
            date: '31 may , 2024',
        },
        {
            id: 3,
            name: 'Jhamkudi',
            img: jhamkudi,
            bg: Kalkibg,
            vietype: '2d',
            time: '2h 32m',
            ua: 'UA',
            type: 'comedy,horror,mystery',
            date: '31 may , 2024',
        },
        {
            id: 4,
            name: 'CHANDU CHAMPION',
            img: chandu,
            vietype: '2d',
            time: '2h 33m',
            ua: 'UA',
            type: 'biography,drama,sport',
            date: '14 Jun , 2024',
        },
        {
            id: 5,
            name: 'jnu',
            img: jnu,
            bg: Kalkibg,
            vietype: '2d',
            time: '2h 50m',
            ua: 'UA',
            type: 'Action,Thriller',
            date: '21 Jun , 2024',
        },
        {
            id: 6,
            name: 'bad boys',
            img: bb,
            bg: Kalkibg,
            vietype: '2d,3D',
            time: '2h 11m',
            ua: 'UA',
            type: 'Action,Thriller',
            date: '30 Jun , 2024',
        },
        {
            id: 7,
            name: 'munjya',
            img: munjya,
            vietype: '2d,4DX,3D',
            time: '2h 3m',
            ua: 'UA',
            type: 'comedy,horror',
            date: '27 Jun , 2024',
        },
        {
            id: 8,
            name: 'trisha on the rocks',
            img: trisha,
            vietype: '2d',
            time: '2h 21m',
            ua: 'UA',
            type: 'comedy',
            date: '27 Jun , 2024',
        }
    ])

    const movie = data.find(item => item.id === parseInt(id))
    return (
        <>
            <div className="d-flex p-5">
                <div className="wid">
                    <img src={movie.img} width={'250px'} alt="" />
                </div>
                <div className="w-49">
                    <h1>{movie.name}</h1>
                    <ul>
                        <li> <h4>{movie.ua}</h4></li>
                        <li><h4>{movie.type}</h4></li>
                        <li><h4>{movie.date}</h4></li>
                        <li><h4>{movie.vietype}</h4></li>
                        <li><h4>{movie.time}</h4></li>
                       <a href="/sites"> <button className='x'>BOOK TICKETS</button></a>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Seatbook
