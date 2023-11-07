import { Card } from "./types";
import firstTop from "./assets/images/1.1.png";
import firstBottom from "./assets/images/1.2.png";
import second from "./assets/images/2.png";
import third from "./assets/images/3.png";
import fourth from "./assets/images/4.png";
import fifth from "./assets/images/5.png";
import sixth from "./assets/images/6.png";

export const cards: Card[] = [
  {
    images: [firstTop, firstBottom],
    id: 1,
    title: "Photography",
    lists: ["Drone Photography", "Interiors", "Exteriors / Architectural"],
    paragraphs: [
      "Every photograph we produce finds the beauty in your property while serving as a profitable asset.",
    ],
  },
  {
    images: [second],
    id: 2,
    title: "Virtual Staging",
    paragraphs: [
      "Our staging will help you sell the potential of your space.",
      "We can work off of our own photography or photos you provide.",
    ],
  },
  {
    images: [third],
    id: 3,
    title: "Renderings",
    lists: ["Interiors ", "Exteriors"],
    paragraphs: [
      "Renderings are the gold standard in pre-construction marketing.",
    ],
  },
  {
    images: [fourth],
    id: 4,
    title: "Interactive Tours",
    lists: ["Matterport", "Video Walkthroughs"],
    paragraphs: [
      "Give your audience the ability to explore your property without requiring in-person travel.",
    ],
  },
  {
    images: [fifth],
    id: 5,
    title: "Floor Plans",
    lists: ["On-site Measure", "2D Floor Plans", "3D Floor Plans"],
    paragraphs: [
      "We produce laser-precise floor plans faster than any other service.",
    ],
  },
  {
    images: [sixth],
    id: 6,
    title: "Video",
    lists: ["Drone Cinematography", "Interiors", "Exteriors / Architectural"],
    paragraphs: [
      "Video content has higher engagement and will help your property stand out online.",
    ],
  },
];
