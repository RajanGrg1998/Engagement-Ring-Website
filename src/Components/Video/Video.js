import React, { Component } from 'react'
import Slider from 'react-slick'
import './Video.css'
import Shoe1 from '../../images/slider/shoe1.jpg'
import Shoe2 from '../../images/slider/shoe2.jpg'
import Shoe3 from '../../images/slider/shoe3.jpg'

export default class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
            });
        }

    render() {
        return (
            <>
                <div className='container-fluid p-0 m-0 bg-black'>
                    <div id="video-section">
                        <Slider
                            arrows={false}
                            swipe={false}
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                        >
                            <div className='container-fluid m-0 p-0'>
                                <img src={Shoe1} alt="" className='img-fluid vw-100'/>
                            </div>

                            <div className='container-fluid m-0 p-0'>
                                <img src={Shoe2} className='img-fluid vw-100' alt=""/>
                            </div>
                            <div className='container-fluid m-0 p-0'>
                                <img src={Shoe3} class="img-fluid vw-100" alt=""/>
                            </div>
                            <div className='container-fluid p-0 m-0'>
                            <img src={Shoe1} class="img-fluid vw-100" alt=""/>
                            </div>
                        </Slider>
                    
                    </div>
                    <div className="container padding bottomDiv">
                        <Slider 
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={3}
                        swipe={false}
                        swipeToSlide={false}
                        focusOnSelect={true}
                        >
                            <div class="container" >
                                <div class="card" >
                                    <img src={Shoe1} class="card-img-top" alt=""/>
                                </div>
                            </div>

                            <div class="container">
                                <div class="card" >
                                    <img src= {Shoe2} class="card-img-top" alt=""/>
                                </div>
                            </div>
                            <div class="container">
                                <div class="card" >
                                    <img src={Shoe3} class="card-img-top" alt=""/>
                                </div>
                            </div>
                            <div class="container">
                                <div class="card" >
                                    <img src={Shoe1} class="card-img-top" alt=""/>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </>
        )
    }
}
