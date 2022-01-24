import React,{ Component } from 'react';
import { FaHeart } from 'react-icons/fa';
import "./HandleFavItem.css";

export default class HandleFavItems extends Component {

    constructor(props)  {
        super(props);
        

        this.state =    {
            fav: false,
            favItems: [],
        }

    }
    handleFav = () =>   {
        const fav = this.state.fav;
        this.setState({ fav: !fav, });
        if (!fav)   {
            this.addFavs();
        } else {
            this.deleteFavs();
        }       
    }

    addFavs() {
        let favItems  = this.state.favItems;
        let incomingInfo = [this.props.id, this.props.date, this.props.image, this.props.rover]
        favItems.push({incomingInfo});
        this.setState({favItems: favItems});
        console.log(this.state.favItems);
    }

    deleteFavs()    {
        let favItems = this.state.favItems;
        for (let item in favItems)  {
            let i = 0;
            if ( favItems[item][i] === this.props.id) {
                favItems.splice(favItems[i], 1);
            }
        }
    }

    render()    {

        return(
            <FaHeart id="icon-heart" className={this.state.fav ? 'icon-heart' : 'icon-heart-active'} onClick={this.handleFav}/>
        );
    }
}
