import React from 'react';
import './ItemView.css';
import HandleFavItems from './HandleFavItems';


function ItemView({ID, Image, Date, RoverName, isFav})  {
    

    

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

                {/*<FaHeart id="icon-heart" className={isFav ? 'icon-heart' : 'icon-heart-active'} onClick={handleChange}/>*/}
                <HandleFavItems id={ID} image={Image} date={Date} rover={RoverName} isFav={isFav}/>
                </div>
            </div>
        </div>
    )

}
export default ItemView;
