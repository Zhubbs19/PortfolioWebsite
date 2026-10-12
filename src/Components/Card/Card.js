import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
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
import QuestSystemCardImg from '../../Images/Project_Images/QuestSystem/CardImage.png';
import DataTypesCardImg from '../../Images/Project_Images/DataTypesMod/DataTypesCard.png';
import ReactorLevelCardImg from '../../Images/Project_Images/ReactorLevel/ReactorLevel.png';

function ProjectCard({ image, title, pitch, tags = [], link, altText, imageFit, imageBg }) {
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
            {pitch}
          </Typography>
          {tags.length > 0 && (
            <Box className="card-tags" component="ul" aria-label="Role and technologies">
              {tags.map(tag => (
                <li key={tag}><Chip label={tag} size="small" variant="outlined" /></li>
              ))}
            </Box>
          )}
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
      pitch="First-person temple escape with a rotating-pillar puzzle, a pickup torch and collapsing platforms, all scripted in Blueprints."
      tags={["Solo project","Unreal Engine 5","Blueprints"]}
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
      pitch="Vault-style door opening cinematic built for an engine pipelines and practices course."
      tags={["Cinematic","Unreal Engine 5","Course project"]}
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
      pitch="Group proof of concept: prep and repair your home before an earthquake, dust storm and forest fire."
      tags={["Group project","Unreal Engine 5","Maya"]}
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
      pitch="3D action-adventure prototype with an inventory system I implemented. Development was discontinued after the fall 2022 session."
      tags={["Prototype","Unity","Programmer"]}
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
      pitch="Museum app where visitors scan exhibit QR codes to play minigames. Built with the West Virginia State Museum."
      tags={["Seven-person capstone","Unity","Firebase"]}
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
      pitch="Blender donut animation and a milk-and-cookies render."
      tags={["Blender 3D"]}
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
      pitch="Soda can mockup built in Photoshop."
      tags={["Adobe Photoshop"]}
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
      pitch="3D physics game: launch a shopping cart off a ramp and keep your items inside. Made for the 2024 Global Game Jam."
      tags={["Game jam","Unity","Programmer"]}
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
      pitch="2D WebGL game about launching a seed onto fertile soil, made in the 2023 Global Game Jam."
      tags={["Game jam","Unity","Programmer"]}
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
      pitch="Community walking-navigation app with live hazard alerts and accessibility pins. Paper prototype to live backend in two sprints."
      tags={["Flutter","Google Maps","Live demo"]}
      link="/StepAhead"
      altText="StepAhead community walking navigation app"
      imageFit="contain"
      imageBg="#1a252f"
    />
  );
}

export function BPQuestSystemCard() {
  return (
    <ProjectCard
      image={QuestSystemCardImg}
      title="Blueprint Quest Creator and Tracking System"
      pitch="Reusable tool for designers to author quests with custom givers, prerequisites and completion rules, with an in-game quest UI."
      tags={["Designer & developer","Unreal Engine 5","Blueprints"]}
      link="/BPQuestSystem"
      altText="Quest System Project"
    />
  );
}

export function ReactorLevelDesignCard() {
    return (
    <ProjectCard
      image={ReactorLevelCardImg}
      title="Reactor Level Design"
      pitch="First-person horror level in an abandoned power plant: three encounters, a boss fight and a flashlight-battery mechanic."
      tags={["Level design","Unreal Engine 5","Course project"]}
      link="/ReactorLevelDesign"
      altText="Level Design"
    />
  );
}

export function ModelingDioramaCard() {
  return (
    <ProjectCard
      image={AppalachianSeedCardImg}
      title="Modeling Diorama"
      pitch="3D diorama modeled in Maya and Substance, assembled in Unreal Engine 5."
      tags={["Maya","Substance","Unreal Engine 5"]}
      link="/ModelingDiorama"
      altText="Modeling Diorama Project"
    />
  );
}

export function DataTypesModCard() {
  return (
    <ProjectCard
      image={DataTypesCardImg}
      title="Data Types Mod"
      pitch="Minecraft mod that teaches programming data types with Redstone-style integer, float and string systems."
      tags={["In development","Java","NeoForge"]}
      link="/MCDataTypesMod"
      altText="Data Types Mod"
    />
  );
}
