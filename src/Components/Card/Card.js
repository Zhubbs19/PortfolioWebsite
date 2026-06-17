import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
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
import StepAheadImg from '../../Images/Project_Images/StepAhead/StepAhead_Logo.png';

function ProjectCard({ image, title, description, link, altText, imageFit, imageBg }) {
  return (
    <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea
        component={Link}
        to={link}
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
      >
        <CardMedia
          component="div"
          sx={{
            height: 320,
            backgroundImage: `url(${image})`,
            backgroundSize: imageFit || 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: imageBg || 'transparent',
          }}
          role="img"
          aria-label={altText || title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ pointerEvents: 'none' }}>
          <Button
            variant="contained"
            size="large"
            tabIndex={-1}
            aria-hidden="true"
          >
            Learn More
          </Button>
        </CardActions>
      </CardActionArea>
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

export function StepAheadCard() {
  return (
    <ProjectCard
      image={StepAheadImg}
      title="StepAhead"
      description="Community Navigation App - Flutter · Claude Code"
      link="/StepAhead"
      altText="StepAhead community walking navigation app"
      imageFit="contain"
      imageBg="#1a252f"
    />
  );
}

export function QuestSystemCard() {
  return (
    <ProjectCard
      image={AppalachianSeedCardImg}
      title="Quest System"
      description="Unreal Engine 5 - Blueprint"
      link="/BPQuestSystem"
      altText="Quest System Project"
    />
  );
}

export function ModelingDioramaCard() {
  return (
    <ProjectCard
      image={AppalachianSeedCardImg}
      title="Modeling Diorama"
      description="Maya / Substance / Unreal Engine 5"
      link="/ModelingDiorama"
      altText="Modeling Diorama Project"
    />
  );
}

export function DataTypesModCard() {
  return (
    <ProjectCard
      image={AppalachianSeedCardImg}
      title="Data Types Mod"
      description="Minecraft Java / NeoForge"
      link="/MCDataTypesMod"
      altText="Data Types Mod"
    />
  );
}
