import React, { Component} from 'react';
import axios from 'axios';
import ItemView from './ItemView';
import ReactPaginate from 'react-paginate';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Table.css';

class Table extends Component{
    
    state = {
        photos: [],
        perPage: 12,
        currentPage: 0,
        offset: 0,
        search: '',
        sol: 100,
    }

    componentDidMount() {
        this.getNasaInfo();
    }

    getNasaInfo = () => {
        const { search } = this.state;

        const { sol } = this.state;

        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}x&api_key=RV7EafhAxjrVWub5RMxxeqUiFhg5YlecKWwdCXFM`)
            .then(({data}) => {
                let slice;
                let pagesData;
                if (search.length > 0)  {
                    const rows = data.photos;
                    slice = rows.filter((row) =>    {
                        return row.sol.toString().includes(search.toString());
                    });
                    pagesData = [...slice]
                } else {
                    slice = data.photos;
                    pagesData = data.photos
                }
                slice = slice.slice(this.state.offset, this.state.offset + this.state.perPage);
                this.setState({
                    photos: slice,
                    pageCount: Math.ceil(pagesData.length/this.state.perPage)
                });
                console.log(data);
            }).catch()
    }

    renderPhotos = ({ id,img_src, earth_date, rover }) => <ItemView  ID={id} Image={img_src} 
                                            Date={earth_date} RoverName={rover.name}/>
    

    handlePageClick = (e) =>    {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getNasaInfo();
        });
    }

   handleSearch = (e) =>    {
       const value = e.target.value;
       this.setState({ search: value, currentPage: 0, sol: value});
       this.handlePageClick({ selected: 0});
       this.getNasaInfo();
   }
    
    
    render()    {
        const { photos } = this.state;
        return(    
            <div className='table-body'>


                <div className='search-bar'>
                    <form className='form'>
                        <FaSearch className='search-icon' />
                        <input className="input"  type="search" placeholder="SOl" onChange={this.handleSearch}></input>
                    </form>

                    <div className='search-label'>
                        <label>Change the SOL # to retrieve images from different days on Mars!</label>
                    </div>
                </div>
                
                <div className='item-table'>
                    
                    {photos.map(this.renderPhotos)}    
                    <ReactPaginate 
                        previousLabel={<FaArrowLeft style={{ color: 'var(--header)' }}/>}
                        nextLabel={<FaArrowRight style={{ color: 'var(--header)' }} />}
                        breakLabel={"..."}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={4}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"pg-active"}
                    />
                </div>
            </div>
        );
    }
        
}

export default Table;

