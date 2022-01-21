import React,{ Component } from 'react';
import { FaHeart, FaSadCry } from 'react-icons/fa';
import "./HandleFavItem.css";
import Cookies from 'js-cookie';

const isFavourite = false;

export default class HandleFavItems extends Component {

    

    constructor(props)  {
        super(props);
        this.state =    {
            fav: Cookies.get('fav'),
            favItems: [],
        }

    }

    setCookie() {

        Cookies.set('fav',isFavourite, { expires: 1 });

        if (Cookies.get('fav')) {
            Cookies.set('fav', false);
        }

        console.log(Cookies.get('fav'));

    }
    handleFav = () =>   {
        const fav = this.state.fav;
        this.setState({ fav: !fav, });
        if (!fav)   {
            this.addFavs();
            Cookies.set('fav', true);
            console.log(Cookies.get('fav'));
        } else {
            this.deleteFavs();
            Cookies.set('fav', false);
            console.log(Cookies.get('fav'));
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

    
    
    componentDidMount() {
        this.setCookie();
    }

    render()    {

        return(
            <FaHeart id="icon-heart" className={this.state.fav ? 'icon-heart' : 'icon-heart-active'} onClick={this.handleFav}/>
        );
    }
}
