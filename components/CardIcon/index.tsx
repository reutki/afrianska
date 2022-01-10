import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
export const CardIcon=(props)=>{
    return(

<Card >
<CardActionArea>

    <CardMedia 
    component="img"
    alt={props.alt}
    height={props.height}
    image={props.image}    
    
    />
    </CardActionArea>
    </Card>
    )
}