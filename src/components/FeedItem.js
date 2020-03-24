import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles(theme => ({
//     paper: {
//         marginTop: '15px',
//         width: '80%',
//         padding: '5px',
//         paddingLeft: '5%',
//         maxWidth: '800px'
//     }
// }));

class FeedItem extends Component {
    
    render() {
        return (
            
                <Paper style={{ margin: 16, padding: 16 }}>
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                        <h2>{this.props.title}</h2>
                    </a>
                    <h5>{this.props.description}</h5>
                </Paper>
        )
    }
}

export default FeedItem;


