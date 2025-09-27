import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import './Card.css';

// Import project images
import EpicDoorImg from '../../Images/Project_Images/EpicDoor.png';
import BlenderDonutImg from '../../Images/Project_Images/Cookies2.png';
import PhotoshopImg from '../../Images/Project_Images/SodaCan.png';
import CartSmashImg from '../../Images/Project_Images/RampCrash2.png';
import WVQuestRegistration from '../../Images/Project_Images/RegistrationWVQuest.PNG';
import WeatheredHomeImg from '../../Images/Project_Images/WeatheredHome.png';
import DawnOfAlinaImg from '../../Images/Project_Images/DawnOfAlinaLarge.JPG';
import AppalachianSeedCardImg from '../../Images/Project_Images/AppalachianSeedLaunch.png';
import EscapeRoomImg from '../../Images/Project_Images/EscapeRoom.png';


// Reusable Project Card Component - REMOVED SIZE CONSTRAINTS
function ProjectCard({ image, title, description, link, altText }) {
  return (
    <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component={Link}
        height="320"
        to={link}
        image={image}
        alt={altText || title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="large" 
          component={Link} 
          to={link}
          aria-label={`Learn more about ${title}`}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

// Escape Room Card (Depths of the Temple)
export default function EscapeRoomCard() {
  return (
    <ProjectCard
      image={EscapeRoomImg}
      title="Depths of the Temple"
      description="Unreal Engine 5.5"
      link="/EscapeRoom"
      altText="Depths of the Temple Escape Room Project"
    />
  );
}

// Epic Door Card
export function EpicDoorCard() {
  return (
    <ProjectCard
      image={EpicDoorImg}
      title="Epic Door Project"
      description="Unreal Engine 5.4"
      link="/EpicDoor"
      altText="Epic Door Cinematic Project"
    />
  );
}

// Weathered Home Card
export function WeatheredHomeCard() {
  return (
    <ProjectCard
      image={WeatheredHomeImg}
      title="A Weathered Home"
      description="Unreal Engine 5.5"
      link="/WeatheredHome"
      altText="A Weathered Home Game Project"
    />
  );
}

// Dawn of Alina Card
export function DawnOfAlinaCard() {
  return (
    <ProjectCard
      image={DawnOfAlinaImg}
      title="Dawn of Alina"
      description="Unity"
      link="/DawnOfAlina"
      altText="Dawn of Alina Unity Game"
    />
  );
}

// WV Quest Card
export function WVQuestCard() {
  return (
    <ProjectCard
      image={WVQuestRegistration}
      title="WV Quest"
      description="Unity - Capstone Project"
      link="/WVQuest"
      altText="WV Quest Museum App"
    />
  );
}

// Blender Projects Card
export function BlenderProjectsCard() {
  return (
    <ProjectCard
      image={BlenderDonutImg}
      title="Blender Projects"
      description="Blender 3D"
      link="/BlenderProjects"
      altText="Blender 3D Projects"
    />
  );
}

// Photoshop Projects Card
export function PhotoshopProjectsCard() {
  return (
    <ProjectCard
      image={PhotoshopImg}
      title="Photoshop Projects"
      description="Adobe Photoshop"
      link="/PhotoshopProjects"
      altText="Photoshop Design Projects"
    />
  );
}

// Cart Smash Card
export function CartSmashCard() {
  return (
    <ProjectCard
      image={CartSmashImg}
      title="Cart Smash"
      description="Unity - 2024 Global Game Jam"
      link="/CartSmash"
      altText="Cart Smash Game Jam Project"
    />
  );
}

// Appalachian Seed Card
export function ApplachianSeedCard() {
  return (
    <ProjectCard
      image={AppalachianSeedCardImg}
      title="Appalachian Seed-A-Pult"
      description="Unity - 2023 Global Game Jam"
      link="/SeedAPult"
      altText="Appalachian Seed-A-Pult Game"
    />
  );
}