import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import TodayIcon from '@mui/icons-material/Today';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import { red } from '@mui/material/colors';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppointmentForm from '../client/appointmentTrying';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Service() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [appointment, setAppointment] = React.useState(false);

 
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Service name"
        subheader="Time of service."
      />
      <CardMedia
        component="img"
        height="194"
        image="/assets/img.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Your description.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="set an appointment">
           <TodayIcon onClick={(e)=> setAppointment(!appointment)} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            texttttttttttttttttttttttttttt.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    {appointment && <AppointmentForm appointment={appointment}></AppointmentForm>}
    </>
   
  );
}
