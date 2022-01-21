import React from 'react';
import './ItemView.css';
import HandleFavItems from './HandleFavItems'


const ItemView = ({ID, Image, Date, RoverName}) => {

    return (
        <div key={ID} className='item-view'>
            <div className='image'>
                <img src={Image} alt={ID} className='photo'>
                </img>
            </div>

            <div className="card-info">
                <div className="data">
                    <label>Earth Date of Capture: {Date}</label>
                    <label>Captured by  the {RoverName} Rover</label>
                </div>

                <div className='icon'>
                <HandleFavItems id={ID} image={Image} date={Date} rover={RoverName}/>
                </div>
            </div>
        </div>
    )

}
export default ItemView;
