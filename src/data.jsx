import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/e-commerce.png";
import Work2 from "./assets/hydra.png";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project.jpg";
import Work6 from "./assets/project-6.jpg";
import Work7 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Mohamed",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Hammad",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Egyption",
  },
  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },
  {
    id: 7,
    title: "Phone : ",
    description: "+01009812748",
  },
  {
    id: 6,
    title: "Address : ",
    description: "Cairo",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+01009812748",
  },

  {
    id: 8,
    title: "Email : ",
    description: "mohamedhammaddeveloper@gmail.com",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "Arabic, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "5+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "14+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "82+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "4+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: " 7-2019 - 3-2020",
    title: ".Net Developer <span>(Desktop Developer )</span>",
    company: " Meddile East ",
    desc: "applications",
    item1:
      "- Brainstormed development ideas based on technical know-how, project goals, and market trends",
    item2:
      "- Optimized designs by conducting thorough tests and incorporating feedback from stakeholders",
    item3:
      "- Evaluated system performance and sought out opportunities to incorporate modern design elements ",
    item4:
      "- Delivered projects on time and in line with specifications outlined by project managers",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: " 1-2021 - Current",
    title: ".NET Developer",
    company: " Horus Technical Solutions <span>(own business)</span> ",
    desc: "",
    item1:
      "- Optimized designs by conducting thorough tests and incorporating feedback from stakeholders.",
    item2:
      "- took requirements from design through to implementation both independently and team Collaborated with colleagues to solve problems and come up with creative solutions.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: " 6-2022 -  3-2023",
    title: ".NET Developer",
    company: "Emax IT",
    desc: "",
    item1:
      "- The important thing that I was assigned to do in the project is to test and clean up the codes after getting them from the developers.",
    item2:
      "- I'm building some services that developers need in different places within the project. I am currently developing a set of tools, including one for measuring the strength of connection to application servers.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: " 2023-7-1 - 2024-2-1",
    title: ".Net Developer [ASP.Net backend]",
    company: "Development Solutions",
    desc: "",
  },
];

export const skills = [
  {
    id: 1,
    title: "C#",
    percentage: "100",
  },
  {
    id: 17,
    title: "(Entity Framework , Linq To SQL)",
    percentage: "95",
  },
   {
    id: 16,
    title: "Debuging ",
    percentage: "95",
  },
  {
    id: 13,
    title: `(MVC, Repository, MVVM,\nMVP, OOP) Patterns`,
    percentage: "90",
  },

  {
    id: 10,
    title: "WinForms",
    percentage: "90",
  },
    {
    id: 14,
    title: "Clean Code",
    percentage: "90",
  },
   {
    id: 19,
    title: "Solid Principle",
    percentage: "90",
  },
{
    id: 21,
    title: "Problem Solving",
    percentage: "85",
  },
   {
    id: 12,
    title: "Rest Api",
    percentage: "85",
  },
  {
    id: 2,
    title: "SQL Server",
    percentage: "80",
  },

  {
    id: 4,
    title: "Xaml",
    percentage: "80",
  },

  {
    id: 7,
    title: "WPF",
    percentage: "80",
  },
  
  {

    id: 11,
    title: "DevExpress",
    percentage: "80",
  },
 


 

  {
    id: 18,
    title: " Code Testing",
    percentage: "80",
  },
 
  {
    id: 20,
    title: "Tailwind Framework",
    percentage: "60",
  },
  {
    id: 8,
    title: "Xamarin",
    percentage: "60",
  },
  {
    id: 15,
    title: "Xamarin",
    percentage: "60",
  },
    {
    id: 9,
    title: "blazor",
    percentage: "60",
  },
   {
    id: 3,
    title: "Javascript",
    percentage: "60",
  },
  {
    id: 5,
    title: "Html",
    percentage: "60",
  },
 {
    id: 6,
    title: "CSS",
    percentage: "50",
  },
 
 

];

export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: "ERP System (LotusERP)",
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Photo',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: "Language : ",
          desc: "C# , winForms , DevExpress , Sql Server , ADO.NET",
        },
        {
          icon: <FiExternalLink />,
          title: "Preview : ",
          desc: "https://youtu.be/-d-sXT2sekU?si=1enkRGo4OUdxzuka",
        },
      ],
    },

    {
      id: 2,
      img: Work2,
      title: "EL-Dalel POS",
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Website',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: "Language : ",
          desc: "C# , WPF , Xaml , Sql Server , Material Design",
        },
        {
          icon: <FiExternalLink />,
          title: "Preview : ",
          desc: "",
        },
      ],
    },

    {
      id: 3,
      img: Work3,
      title: "EmployeeS (HR App)",
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Video',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: "Language : ",
          desc: "C# , WinForms , SqlExpress , Devexpress",
        },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: '',
        },
      ],
    },

    {
      id: 4,
      img: Work4,
      title: "COPLET (CV Sorter)",
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Video',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: "Language : ",
          desc: " C# , Wpf , Xaml , Sql Server , Material Design",
        },
        // {
        //   icon: <FiExternalLink />,
        //   title: 'Preview : ',
        //   desc: '',
        // },
      ],
    },

    {
      id: 5,
      img: Work5,
      title: "profitdaily (Telegram Employee Services)",
      details: [
        // {
        //   title: 'Project : ',
        //   desc: 'Website',
        // },
        // {
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: "Language : ",
          desc: " C# , Wpf , Xaml , Sql Server , Material Design",
        },
        // {
        //   title: 'Preview : ',
        //   desc: '',
        // },
      ],
    },

    {
      id: 6,
      img: Work6,
      title: " Telegram Bot",
      details: [
        // {
        //   icon: <FiFileText />,
        //   title: 'Project : ',
        //   desc: 'Photo',
        // },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: "Language : ",
          desc: " C# , Rest Api , Sql Server",
        },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dibble.com',
        },
      ],
    },

    {
      id: 7,
      img: Work7,
      title: "Shutter ( Managing a photography studio)",
      details: [
        {
          icon: <FaCode />,
          title: "Language : ",
          desc: " C# , Rest Api , Sql Server",
        },
        {
          // icon: <FiExternalLink />,
          // title: 'Preview : ',
          // desc: 'www.dibble.com',
        },
      ],
    },
  ],
  details = [
    {
      icon: <FaCode />,
      title: "Language : ",
      desc: " C# , Rest Api , Sql Server",
    },
  ];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
