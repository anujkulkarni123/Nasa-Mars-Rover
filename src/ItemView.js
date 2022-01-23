import React, { useEffect, useState }from 'react';
import './ItemView.css';
import { FaHeart }  from 'react-icons/fa';
import HandleFavItems from './HandleFavItems';


function ItemView({ID, Image, Date, RoverName})  {
    
    const [isFav, setIsFav] = useState(false);

    function handleChange()    { 
        setIsFav(!isFav);
    }

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
