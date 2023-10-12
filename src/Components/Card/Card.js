import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css'

import AppalachianSeedLaunchImg from '../../Images/AppalachianSeedLaunch.png';
import WVQuestImg from '../../Images/WVQuest.PNG';
import DawnOfAlinaImg from '../../Images/DawnOfAlina.JPG';

export default function ApplachianSeedCard() {
  return (
    <Card className='Card' sx={{minWidth: 400, minHeight: 500}}>
      <CardMedia className='CardMedia'
        sx={{ height: 400 }}
        component="img"
        image={AppalachianSeedLaunchImg}
        title="Appalachian Seed Launch"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
          Appalachian Seed Launch
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
          Game Development, Mon River Games Global Game Jam 2023
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" href='SeedAPult'>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export function WVQuestCard() {
  return (
    <Card className='Card' sx={{ minWidth: 400, minHeight: 500}}>
      <CardMedia className='CardMedia'
        sx={{ height: 400 }}
        component="img"
        image={WVQuestImg}
        title="WV Quest"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
          WV Quest
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
          Game Development, WV State Musuem Capstone Project
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" href='WVQuest'>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export function DawnOfAlinaCard() {
  return (
    <Card className='Card' sx={{minWidth: 400, minHeight: 500}}>
      <CardMedia className='CardMedia'
        sx={{ height: 400 }}
        component="img"
        image={DawnOfAlinaImg}
        title="Dawn of Alina"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
          Dawn of Alina
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
          Game Development, WV State Musuem Capstone Project
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" href='DawnOfAlina'>Learn More</Button>
      </CardActions>
    </Card>
  );
}