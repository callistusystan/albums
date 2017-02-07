// import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

// Make a component

class AlbumList extends Component {
    // initialize the component state
    state = { albums: [] };

    // const { textStyle, viewStyle } = styles;
    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.json())
            .then((responseData) => {
                // update state with response data
                this.setState({ albums: responseData });
            });
    }

    renderAlbums() {
      return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />
      );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
              {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
