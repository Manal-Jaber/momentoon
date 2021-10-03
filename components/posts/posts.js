import launch from "../../assets/pics/Posts/launch.jpg";
import parkerSun from "../../assets/pics/Posts/parker-sun.gif";
import venusFlyby from "../../assets/pics/Posts/VenusFlyby.mp4";
export const posts = [
  {
    id: 0,
    type: "image",
    src: launch,
    text: "Today I start my Journey to the sun!",
    caption: "My Journey to the Sun",
    date: "12-08-2018",
  },
  {
    id: 1,
    type: "video",
    src: venusFlyby,
    text: "Parker Solar Probe Successfully Performs Venus Flyby",
    caption: "Venus Flyby",
    date: "03-10-2018",
  },
  {
    id: 2,
    type: "image",
    src: parkerSun,
    text: "Bring Guinness! We are breaking a record to be the closest spacecraft to the sun!",
    caption: "Closest Spacecraft to Sun",
    date: "29-10-2018",
  },
];
