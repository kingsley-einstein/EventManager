import React, { Component } from 'react';

class Home extends Component {
    render() {
        this.state = {
            welcome: 'Hello world'
        };

        return(
            <div>
                {this.state.welcome}
            </div>
        );
    }
}

export default Home;