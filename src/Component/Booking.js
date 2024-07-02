import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import Seatbook from './Seatbook';

function Booking() {


    let rec = [

        { id : 1 , image: require('./image/Movie2.jpg'), title: 'kalki', span: 'U/A', li: 'Hindi,Tamil,Telgu Movie', btn: 'Book Ticket' },
        { id : 2 , image: require('./image/Movie5.webp'), title: 'mr. & mrs. mahi', span: 'U/A', li: 'Hindi,Tamil,Telgu Movie', btn: 'Book Ticket' },
        { id : 3 , image: require('./image/Movie10.jpg'), title: 'jamkudi', span: 'U/A', li: 'Hindi,Tamil,Telgu Movie', btn: 'Book Ticket' },
        { id : 4 , image: require('./image/Movie11.jpg'), title: 'chandu champion', span: 'U/A', li: 'Hindi,Tamil,Telgu Movie', btn: 'Book Ticket' },
        { id : 5 , image: require('./image/18.jpg'), title: 'jnu', span: 'U/A', li: 'Hindi,Tamil,Telgu Movie', btn: 'Book Ticket' },
        { id : 6 , image: require('./image/17.jpg'), title: 'bad boys', span: 'U/A', li: 'Hindi,english Movie', btn: 'Book Ticket' },
        { id : 7 , image: require('./image/Movie14.jpg'), title: 'munjya', span: 'U/A', li: 'Hindi,Tamil,Telgu Movie', btn: 'Book Ticket' },
        { id : 8 , image: require('./image/20.jpg'), title: 'trisha on the rocks', span: 'U/A', li: 'gujrati', btn: 'Book Ticket' },

    ]

    return (
        <>


            <div className="section">
                <div className="logo">
                    <div className="img_logo">
                        {/* <img src={require('./image/lo.webp')} alt="" /> */}
                    </div>
                    <div className="button">
                        <Button variant="primary">List</Button>
                    </div>
                </div>

                <div className="baner">
                    <div className="baner_text">
                        <h3>Movie List</h3>
                        <p>this is the movie list page for surat </p>
                    </div>
                    {/* <img src={require('./image/bener.jpg')} alt="" /> */}
                </div>

                <div className="row">
                    {
                        rec.map((v) => {
                            return (
                                <>
                                    <Card style={{ width: '23rem' }} className='card' >

                                        <img src={v.image} />
                                        <Card.Body>
                                            <Card.Title className='card_title'>{v.title}</Card.Title>
                                            <Card.Text className='card_text'>
                                                <span>{v.span}</span>
                                                <li>{v.li}</li>
                                            </Card.Text>
                                            <Link to={`/ticket/${v.id}`}>
                                                <Button variant="primary" className='btn'>{v.btn}</Button>
                                            </Link>
                                        </Card.Body>

                                    </Card >
                                </>
                            )
                        })

                    }
                </div>
            </div>
        </>
    );
}

export default Booking;
