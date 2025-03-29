// Card.js - Holds the info for all cards on my site.
// Material UI used for this all card-related function as well as for the buttons on the cards.

//#region imports
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css'
import AppalachianSeedLaunchImg from '../../Images/Project_Images/AppalachianSeedLaunch.png';
import WVQuestImg from '../../Images/Project_Images/WVQuest.PNG';
import DawnOfAlinaImg from '../../Images/Project_Images/DawnOfAlina.JPG';
import DonutImg from '../../Images/Project_Images/Donut.jpg';
import SodaCanImg from '../../Images/Project_Images/SodaCan.png';
import CartSmashImg from '../../Images/Project_Images/RampCrash2.png';
import EpicDoorImg from '../../Images/Project_Images/EpicDoor.png';
import EscapeRoomImg from '../../Images/Project_Images/EscapeRoom.png';
//#endregion

//#region Escape Room
export default function EscapeRoomCard() {
  return (
    <Card className='Card' sx={{ minWidth: 400, minHeight: 500, maxHeight: 700, maxWidth:500 }}>
      <CardMedia className='CardMedia'
        sx={{ height: 470 }}
        component="img"
        image={EscapeRoomImg}
        title="Escape Room"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
          Depths of the Temple
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
        Unreal Engine 5.5     
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="large" variant='contained' href='#EscapeRoom'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion

//#region Epic Door
export function EpicDoorCard() {
  return (
    <Card className='Card' sx={{ minWidth: 400, minHeight: 500, maxHeight: 700, maxWidth:500 }}>
      <CardMedia className='CardMedia'
        sx={{ height: 470 }}
        component="img"
        image={EpicDoorImg}
        title="Epic Door"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
          Epic Door Project
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
        Unreal Engine 5.4       
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="large" variant='contained' href='#EpicDoor'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion

//#region Appalachian Seed Launch
export function ApplachianSeedCard() {
  return (
    <Card className='Card' sx={{ minWidth: 400, minHeight: 500, maxHeight: 700, maxWidth:500 }}>
      <CardMedia className='CardMedia'
        sx={{ height: 470 }}
        component="img"
        image={AppalachianSeedLaunchImg}
        title="Appalachian Seed-A-Pult"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
          Appalachian Seed-A-Pult
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
        2023 Global Game Jam, Unity Engine        
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
    <Card className='Card' sx={{ minWidth: 400, minHeight: 500, maxHeight: 700, maxWidth:500 }}>
      <CardMedia className='CardMedia'
        sx={{ height: 470 }}
        component="img"
        image={WVQuestImg}
        title="WV Quest"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
          WV Quest
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
          WV State Musuem Capstone Project
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
    <Card className='Card' sx={{ minWidth: 400, minHeight: 500, maxHeight: 700, maxWidth:500 }}>
      <CardMedia className='CardMedia'
        sx={{ height: 470 }}
        component="img"
        image={DawnOfAlinaImg}
        title="Dawn of Alina"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
          Dawn of Alina
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
          Mon River Games Prototype, Unity Engine
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="large" variant='contained' href='#DawnOfAlina'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion

//#region Blender 3D Models
export function BlenderProjectsCard() {
  return (
    <Card className='Card' sx={{ minWidth: 400, minHeight: 500, maxHeight: 700, maxWidth:500 }}>
      <CardMedia className='CardMedia'
        sx={{ height: 470 }}
        component="img"
        image={DonutImg}
        title="Blender Donut"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
          Blender Projects
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
          Blender 3D Modeling Tutorial Project
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="large" variant='contained' href='#BlenderProjects'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion

//#region Photoshop Card
export function PhotoshopProjectsCard() {
  return (
    <Card className='Card' sx={{ minWidth: 400, minHeight: 500, maxHeight: 700, maxWidth:500 }}>
      <CardMedia className='CardMedia'
        sx={{ height: 470 }}
        component="img"
        image={SodaCanImg}
        href='#PhotoshopProjects'
        title="Soda Can Mockup Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
        Soda Can Mockup Poster
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
        Adobe Photoshop Project
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="large" variant='contained' href='#PhotoshopProjects'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion
//#region Cart Smash Card
export function CartSmashCard() {
  return (
    <Card className='Card' sx={{ minWidth: 400, minHeight: 500, maxHeight: 700, maxWidth:500 }}>
      <CardMedia className='CardMedia'
        sx={{ height: 470 }}
        component="img"
        image={CartSmashImg}
        href='#CartSmash'
        title="Cart Smash"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize="28px" fontWeight="bold">
          Cart Smash
        </Typography>
        <Typography variant="body" color="black" fontSize="20px">
          2024 Global Game Jam, Unity Engine
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='button' size="large" variant='contained' href='#CartSmash'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
//#endregion