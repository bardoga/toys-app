
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class About extends Component {
    state = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11,
        greatPlaceCoords: null
    };

    onSetCenter = ({ lat, lng }) => {
        console.log(lat, lng)
        this.setState({
            center: {
                lat,
                lng,
            }
        })
    }


    render() {
        return (
            <div style={{ height: '70vh', width: '70%', marginLeft:'auto',marginRight:'auto',marginTop:'2rem'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAJE4383I4f_Ab6GJBjt6-Gm_ULIDKjBGQ' }}
                    defaultCenter={this.state.center}
                    center={this.state.center}
                    defaultZoom={this.state.zoom}
                    onClick={this.onSetCenter}
                > 
                    <AnyReactComponent
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                        text="🐒"
                    />
                </GoogleMapReact>
                <p style={{ fontWeight: '700' }}>Our local shops</p>
                <button onClick={() => this.onSetCenter({lat:32.111767, lng:34.801361})} style={{ marginRight: '7px',fontSize:'1.2rem' }}>Tel Aviv</button>
                <button onClick={() => this.onSetCenter({lat:31.771959, lng:35.217018})} style={{ marginRight: '7px', fontSize:'1.2rem'}}>Jerusalem</button>
                <button onClick={() => this.onSetCenter({lat:30.610594, lng:34.801834})} style={{ marginRight: '7px', fontSize:'1.2rem'}}>Mitzpe Ramon</button>
            </div>
        );
    }
}
