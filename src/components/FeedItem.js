// import Paper from '@material-ui/core/Paper';

// // const useStyles = makeStyles(theme => ({
// //     paper: {
// //         marginTop: '15px',
// //         width: '80%',
// //         padding: '5px',
// //         paddingLeft: '5%',
// //         maxWidth: '800px'
// //     }
// // }));

// class FeedItem extends Component {
    
//     render() {
//         return (
            
//                 <Paper style={{ margin: 16, padding: 16 }}>
//                     <a href={this.props.url} target="_blank" rel="noopener noreferrer">
//                         <h2>{this.props.title}</h2>
//                     </a>
//                     <h5>{this.props.description}</h5>
//                 </Paper>
//         )
//     }
// }

// export default FeedItem;



import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

// const classes = useStyles();

const StyledCard = withStyles({
    root: {
        maxWidth: 345,
    },
  })(Card);

class FeedItem extends Component {

  render() {
    return (
        
        <StyledCard>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={this.props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
                Share
                </Button> */}
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </a>
            </CardActions>
        </StyledCard>
    );
  }
}

export default FeedItem;