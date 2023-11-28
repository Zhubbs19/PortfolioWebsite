//#region imports
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
import EndlessJumpImg from '../../Images/endlessjump.png';
import HighBytesOSImg from '../../Images/HighBytes.png';
import DonutImg from '../../Images/Donut.jpg';
//#endregion

//#region Appalachian Seed Launch
export default function ApplachianSeedCard() {
  return (
    <Card className='Card' sx={{minWidth: 400, minHeight: 500}}>
      <CardMedia className='CardMedia'
        sx={{ height: 400 }}
        component="img"
        image={AppalachianSeedLaunchImg}
        title="Appalachian Seed-A-Pult"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
        Appalachian Seed-A-Pult
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
          Game Development, Mon River Games Global Game Jam 2023
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="large" variant='contained' href='#SeedAPult'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion

//#region WV Quest
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
        <Button className='button' size="large" variant='contained' href='#WVQuest'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion

//#region Dawn of Alina
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
        Mon River Games Summer 2022 and Fall 2023 Sessions
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="large" variant='contained' href='#DawnOfAlina'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion

//#region Endless Jump
export function EndlessJumpCard() {
  return (
    <Card className='Card' sx={{minWidth: 400, minHeight: 500}}>
      <CardMedia className='CardMedia'
        sx={{ height: 400 }}
        component="img"
        image={EndlessJumpImg}
        title="Endless Jump"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
          Endless Jump
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
          Mon River Games, Advanced Game Design Course
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="large" variant='contained' href='#EndlessJump'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion

//#region High-Bytes OS
export function HighBytesOSCard() {
  return (
    <Card className='Card' sx={{minWidth: 400, minHeight: 500}}>
      <CardMedia className='CardMedia'
        sx={{ height: 400 }}
        component="img"
        image={HighBytesOSImg}
        title="Endless Jump"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
          High-Bytes OS
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
          CS 450 - Operating Systems Sturctures Group Project
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="large" variant='contained' href='#HighBytesOS'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion

//#region High-Bytes OS
export function CS470MenuCard() {
  return (
    <Card className='Card' sx={{minWidth: 400, minHeight: 500}}>
      <CardMedia className='CardMedia'
        sx={{ height: 400 }}
        component="img"
        image={EndlessJumpImg}
        title="Endless Jump"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
        Python Tinkter Menu
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
          CS 470 Menu Project written in Python and Tkinter
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="large" variant='contained' href='#EndlessJump'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion

//#region Blender 3D Models
export function BlenderProjectsCard() {
  return (
    <Card className='Card' sx={{minWidth: 400, minHeight: 500}}>
      <CardMedia className='CardMedia'
        sx={{ height: 430 }}
        component="img"
        image={DonutImg}
        title="Blender Donut"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
        Blender Projects
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
          Blender 3D Modeling Projects
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="large" variant='contained' href='#BlenderProjects'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion