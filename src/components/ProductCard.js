// Joe

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProductCard = (props) => {

    const { product } = props;

    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={product.img_url}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {product.artist}
            </Typography>
            
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Purchase
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
            <Typography variant="body2" color="textSecondary" component="p" >
                {product.price}
            </Typography>
        </CardActions>
        </Card>
    );
    }

export default ProductCard;