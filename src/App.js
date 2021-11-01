import React from 'react';
import Grid from './Grid';
import Count from './Count';
import './'

class App extends React.Component {
    render() {
        return (
            <div id = 'app'>
                <Count />
                <Grid />
            </div>
            
        )
    }
}

export default App;