import {
  ADDRESS,
  EMAIL,
  GITHUB,
  PHONE,
  PORTFOLIO
} from "@/app/globalConstants";
import { TEMPLATES_ENUM } from "../../../types";
import { Icons } from "../../../components/asset";

const { DownloadIcon, OuLineEmailIcon } = Icons;

export const cvData = {
  templateDetail: {
    templateType: TEMPLATES_ENUM.Traditional,
    // templateColor: '#c95daa',
    templateColor: "#4966b4"
  },

  name: "George Nwobodo",
  mainSkill: " Senior Software Engineer",
  contacts: [
    // {
    //   iconType: PHONE,
    //   link: 'tel:=+447856932791',
    //   label: '+447856932791',
    // },
    {
      iconType: PHONE,
      link: "tel:=+2347062809435",
      label: "+2347062809435"
    },
    {
      iconType: EMAIL,
      link: "mailto:nwobodogeorge98@gmail.com",
      label: "nwobodogeorge98@gmail.com"
    },

    // {
    //   iconType: PORTFOLIO,
    //   link: 'https://callmegeorge.vercel.app/',
    //   label: 'Portfolio site',
    // },

    {
      iconType: GITHUB,
      link: "https://github.com/Georgedev2",
      label: "Georgedev2"
    }
    // {
    //   iconType: ADDRESS,
    //   link: '',
    //   label: '40, Whatley end cranfield bedfordshire united kingdom',
    // },
  ],
  // professionalSummary: `Hard-working Senior Software Engineer with a passion for creating
  // elegant solutions in the least amount of time. Looking for growth
  // opportunities to try new technologies and grow my technical skill set in
  // a team-based atmosphere.`,
  professionalSummary: `I am a Senior Software Engineer with ability to design, develop, and maintain high-performance software solutions. I have extensive experience in software development, strong problem-solving abilities, and a deep understanding of modern programming languages, frameworks, and architectures.`,
  skills: [
    {
      skillType: "Programming Skills",
      skillSet: {
        programming_languages:
          "Html, CSS, Javascript, Java, Typescript, Python, SQL, NoSQL query language, Bash, zhs, C#",
        frameworks_libraries:
          "React, Next, Nestjs, Vue, React Native, Spring Framework, Express.js, Django, .Net Core, ASP.NET core, ASP.NET",
        cloud_platforms: "AWS, Azure, Google cloud",
        database: "PostgreSQL, MYSQL, Mongodb, SQLite,  Microsoft SQL server",
        build_tools: "Maven, NPM, Gradle, Babel, Webpack",
        deployment_tools:
          "Git, Nginx, Docker, Kubernetes, Jinkins, Circle CI, Ansible, Grafana"
      }
    }
  ],
  strength: {
    strengthSet: {
      communication:
        "Open-minded, outgoing & patient in conversation with others",
      leadership: "Self-motivated, Time Management, Problem solving."
    }
  },
  workHistory: [
    // {
    //   id: 1,
    //   company: {
    //     name: 'Recapped',
    //     description: '',
    //     location: '',
    //     achievements: [],
    //     link: '',
    //   },
    //   title: 'Senior Software Engineer',
    //   duration: 'Jan 2024 - Current',
    //   companyDescription: '',
    //   desc: [
    //     'Application & infrastructure planning, testing and development',
    //     'Develop web application using spring framework',
    //     'On-call, incident response and incident management',
    //     'Develop new features and also improved existing features to optimize performance',
    //     'Fix bugs, reduces System latency and thereby increase throughput',
    //     'Ensure proper fault tolerance, while creating software design for new features',
    //   ],
    // },
    {
      id: 2,
      title: "Senior Java Engineer",
      duration: "Dec/2021 - Current", // for school
      // duration: 'Feb 2023 - Current',// use this official
      company: {
        name: "Pagatech limited",
        description: "",
        location: "Lagos, Nigeria",
        achievements: [],
        link: ""
      },
      desc: [
        "Develop web application using java & spring framework",
        "Optimize application for speed, resource utilization & reliability",
        "Implement automated testing",
        "Code reviews and refactoring"
      ]
    },
    {
      id: 40,
      company: {
        name: "DigitalOcean ",
        description: "",
        location: "New York, US",
        achievements: [],
        link: ""
      },
      title: "Senior Full-Stack Developer",
      duration: "Jan/2020 - Nov/2021",
      // duration: 'Jan 2021 - Jan 2023',
      desc: [
        "Migrate application written in emberJS to ReactJS",
        "Develop web application using java & spring framework",
        "Translate wire-frames and designs into good quality code",
        "Optimize application for speed and scalability",
        "Fixed bugs & memory leaks"
      ]
    },
    {
      id: 3,
      company: {
        name: "Founder & Lighting",
        description: "",
        location: "London, United Kingdom",
        achievements: [],
        link: ""
      },
      title: "Senior Front-End Developer",
      // duration: 'Jan 2019 - Dec 2021',
      duration: "Jan/2019 - Dec/2019", // school
      desc: [
        "Develop web application user-facing using react.js",
        "Collaborates and work closely with other team members across the globe",
        "Improve legacy code as well as writing new functionalities from scratch",
        "Deploy software application server"
      ]
    },
    {
      id: 4,
      title: "Middle Full-Stack Developer",
      duration: "Jan/2015 - Dec/2018",
      company: {
        name: "SoftTech",
        description: "",
        location: "Lagos, Nigeria",
        achievements: [],
        link: ""
      },
      desc: [
        "Build user interfaces using using ReactJS",
        "Build backend and APIs services using Express framework",
        "Improve software performance & speed",
        "Deploy software application server"
      ]
    }
  ],
  eduction: [
    {
      school: "Enugu State University Of Science & Technology",
      cert: "Bsc Chemical Engineering",
      duration: "Jan/2009 – Nov/2014"
    },
    {
      school: "Great Trinity College",
      cert: "West African Senior School Certificate (WASSC)",
      duration: "Feb/2002 – April/2008"
    },
    {
      school: "Jimoh Ojorah Primary School 2",
      cert: "Primary School leaving Certificate (PSLC)",
      duration: "March/1996 – Dec/2001"
    }
  ],
  projects: [],
  certification: [
    {
      school: "magaByte Academy",
      cert: "Software development full time with competency in html, css, javascript, java & sql",
      completed: "Nov 2010"
    }
  ],
  hobbies: ["Reading", "Watching documentaries", "Hanging out with friends"]
};

export const cvActions = [
  {
    label: "Download",
    Icon: DownloadIcon,
    iconSize: "1.5rem",
    status: "not_available"
  },
  {
    label: "Email",
    Icon: OuLineEmailIcon,
    iconSize: "1.3rem",
    status: "available"
  }
];
