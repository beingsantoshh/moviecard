import React from 'react';

function Card(props) {

    return (
        <>
            <div className='all-cards'>
                <div className='column'>
                    <div className='hover14'>
                        <img src={props.imgsrc} className="card-img-top" />
                        <div className='card-info'>
                            <h3 id='demo01'>Ranking :
                                {props.ranking}
                                <h2 className='card_heading'>Title : {props.title}</h2>
                            </h3>
                            <p className='year'>Year : {props.year}</p>
                            <p className='card_distibutor'>Distributor : {props.distributor}</p>
                            <p className='card_amount'>Amount : {props.amount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Card;