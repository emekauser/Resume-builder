import { EMAIL, GITHUB, PHONE } from "@/app/globalConstants";
import { TEMPLATES_ENUM } from "../../../types";
import { Icons } from "../../../components/asset";
import { title } from "process";

const { DownloadIcon, OuLineEmailIcon } = Icons;

export const schoolCVData = {
  templateDetail: {
    templateType: TEMPLATES_ENUM.Traditional,
    // templateColor: '#c95daa',
    templateColor: "#4966b4"
  },

  name: "Emeka Nwobodo",
  mainSkill: " Senior Software Engineer (AI/ML, LLM)",
  contacts: [
    // {
    //   iconType: PHONE,
    //   link: 'tel:=+447856932791',
    //   label: '+447856932791',
    // },
    // {
    //   iconType: PHONE,
    //   link: 'tel:=+2347062809435',
    //   label: '+2349096472738', // +2347062809435
    // },
    // {
    //   iconType: PHONE,
    //   link: "tel:=+2348137779209",
    //   label: "+2348137779209" // +2347062809435
    // },
    // {
    //   iconType: EMAIL,
    //   link: 'mailto:georgeonyeka98@gmail.com', // mailto:nwobodogeorge98@gmail.com
    //   label: 'georgeonyeka98@gmail.com', // 'nwobodogeorge98@gmail.com',
    // },
    {
      iconType: EMAIL,
      link: "mailto:nwobodoemeka44@gmail.com", // mailto:nwobodogeorge98@gmail.com
      label: "nwobodoemeka44@gmail.com" // 'nwobodogeorge98@gmail.com',
    },

    // {
    //   iconType: PORTFOLIO,
    //   link: 'https://callmegeorge.vercel.app/',
    //   label: 'Portfolio site',
    // },

    {
      iconType: GITHUB,
      link: "https://github.com/emekauser",
      label: "emekauser"
    }
    // {
    //   iconType: ADDRESS,
    //   link: '',
    //   label: '40, Whatley end cranfield bedfordshire united kingdom',
    // },
  ],
  professionalSummary: `<p>I am an <strong>Senior Software Engineer </strong> specializing in the full lifecycle of <strong>AI/ML and SaaS Applications</strong>, from design to deployment. My passion is creating intelligent systems that deliver impactful results and improve the user experience.</p>`,
  skills: [
    {
      skillType: "Programming Skills",
      skillSet: {
        programming_languages:
          "Javascript, Node.js, Typescript, Python, Java, Elixir, SQL, HTML, CSS.",
        artificial_intelligence:
          "AI/ML, MLOps, TensorFlow, PyTorch, Large Language Model, RAG, AI Agents, Vector DB, MCP, Prompt Engineering, Langchain, HuggingFace",
        "frameworks_&_libraries":
          "React, Nest.js, Express.js, Django, Spring Framework, Phoenix",
        database:
          "PostgreSQL, MYSQL, Mongodb, MSSQL, Elasticsearch, ChromaDB, Redis",
        build_tools: "Maven, NPM, Gradle, Babel, Webpack, Yarn, Pip",
        testing:
          "Unit test, integration test, End to end test, React testing library, Junit, unittest, ExUnit, mocha and chai",
        deployment_tools:
          "Git, Nginx, Docker, Kubernetes, Jenkins, Circle CI, Ansible",
        Event_Streaming_Platforms: "Kafka, Amazon Kinesis",
        cloud_platforms: "AWS, Azure, Google cloud",
        software_development:
          "Rest API, GraphQL, OOP, Functional Programming, Async Programming, MVC, Webhooks, Websocket, Auth, Oauth",
        collaboration: "Zoom, Slack, Jira"
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
    {
      id: 2,
      title: "Senior Full Stack  and AI Engineer",
      duration: "Dec/2020 - Current", // for school
      company: {
        name: "Recapped inc",
        description: "",
        location: "New York, US (Remote)",
        achievements: [],
        technologies: [
          "Python",
          "Next.js (React)",
          "TypeScript",
          "FastApi",
          "AI/ML",
          "Tensorflow",
          "LLM",
          "HuggingFace Model inference package",
          "Prompt Engineering",
          "RAG",
          "Vector DB",
          "Postgres",
          "CRM integration",
          "ElasticSearch",
          "OAuth",
          "Kubernetes",
          "Docker",
          "Github Actions",
          "AWS"
        ],
        link: ""
      },

      desc: `<ul class="editor-module__kjU1fG__bulletList">
       <li class="editor-module__kjU1fG__list"><p>Develop Sales Manager <strong> AI Agent </strong> that guilds sales on every deal. This increases Sales by 40%.</p></li>
      <li class="editor-module__kjU1fG__list"><p>Develop <strong> Document processing pipeline</strong> which help users to analyze and extract content from documents.</p></li>
      <li class="editor-module__kjU1fG__list"><p>Implement <strong>Retrieval Augmented Generation (RAG)</strong> techniques to enhance AI capabilities.</p></li>
      <li class="editor-module__kjU1fG__list"><p>Optimise application for speed by 100x, resource utilisation,&nbsp;security (Pen. test and SOC 2), &amp; reliability.</p></li>
      <li class="editor-module__kjU1fG__list"><p>Implement unit and integration testing.</p></li>
     
      </ul>`
      // desc:`<ul class="editor-module__kjU1fG__bulletList"><li class="editor-module__kjU1fG__list"><p>Develop web application <strong>using Java</strong> &amp; <strong>spring framework</strong>.</p></li><li class="editor-module__kjU1fG__list"><p>Optimise application for speed, resource utilisation,&nbsp;security, &amp; reliability.</p></li><li class="editor-module__kjU1fG__list"><p>Implement automated testing.</p></li><li class="editor-module__kjU1fG__list"><p>Develop web application user-facing using <strong>Thymeleaf, jsp </strong>and<strong> JSTL</strong></p></li><li class="editor-module__kjU1fG__list"><p>Participate in code reviews, architecture discussions, and technical planning.</p></li><li class="editor-module__kjU1fG__list"><p>Collaborate with cross-functional teams, including product managers, designers, and QA engineers.</p></li></ul>`,
      // desc: `<ul class="editor-module__g5V4bG__bulletList"><li class="editor-module__g5V4bG__list"><p>Develop web application using java &amp; spring framework.</p></li><li class="editor-module__g5V4bG__list"><p>Optimise application for speed, resource utilisation &amp; reliability.</p></li><li class="editor-module__g5V4bG__list"><p>Implement automated testing.</p></li><li class="editor-module__g5V4bG__list"><p>Code reviews and refactoring.</p></li></ul>`
      // desc:`<ul class="editor-module__kjU1fG__bulletList"><li class="editor-module__kjU1fG__list"><p>Develop web application using java &amp; spring framework.</p></li><li class="editor-module__kjU1fG__list"><p>Optimise application for speed, resource utilisation,&nbsp;security, &amp; reliability.</p></li><li class="editor-module__kjU1fG__list"><p>Implement automated testing.</p></li><li class="editor-module__kjU1fG__list"><p>Participate in code reviews, architecture discussions, and technical planning.</p></li><li class="editor-module__kjU1fG__list"><p>Collaborate with cross-functional teams, including product managers, designers, and QA engineers.</p></li></ul>`
      //   [
      //     'Develop web application using java & spring framework',
      //     'Optimize application for speed, resource utilization & reliability',
      //     'Implement automated testing',
      //     'Code reviews and refactoring',
      //   ],
    },
    {
      id: 2,
      company: {
        name: "Open Packaging Network ",
        description: "",
        location: "Zug, Switzerland (Remote)",
        achievements: [],
        technologies: [
          "Node.js",
          "React",
          "TypeScript",
          "Express.js",
          "REST",
          "AI/ML",
          "scikit-learn",
          "Mongo DB",
          "OAuth",
          "Jenkins",
          "Google Cloud Platform",
          "Git"
        ],
        link: ""
      },
      title: "Senior Full-Stack Developer and ML Engineer",
      duration: "Feb/2017 - Nov/2020",
      // duration: 'Jan 2021 - Jan 2023',
      desc: `<ul class="editor-module__kjU1fG__bulletList">
      <li class="editor-module__kjU1fG__list"><p>Use <strong>Machine learning</strong> for product recommendation engine, thereby increasing packaging materials sales by 100%. </p></li>
      <li class="editor-module__kjU1fG__list"><p>Create ML processing pipeline.</p></li>
      <li class="editor-module__kjU1fG__list"><p>Write clean, maintainable, and efficient code following best practices.</p></li>
      <li class="editor-module__kjU1fG__list"><p>Troubleshoot, debug, and resolve software issues in a timely manner.</p></li></ul>`
      // desc:`<ul class="editor-module__kjU1fG__bulletList"><li class="editor-module__kjU1fG__list"><p>Migrate application written in <strong>emberJS</strong> to <strong>ReactJS.</strong></p></li><li class="editor-module__kjU1fG__list"><p>Develop, maintain, and optimize full-stack applications using <strong>React</strong> on the front end and robust backend services with <strong>Spring Framework</strong> and .<strong>Net Core </strong>following RESTful API design.</p></li><li class="editor-module__kjU1fG__list"><p>Write clean, maintainable, and efficient code following best practices.</p></li><li class="editor-module__kjU1fG__list"><p>Troubleshoot, debug, and resolve software issues in a timely manner</p></li></ul>`
      // desc:`<ul class="editor-module__kjU1fG__bulletList"><li class="editor-module__kjU1fG__list"><p>Migrate application written in <strong>emberJS</strong> to <strong>ReactJS.</strong></p></li><li class="editor-module__kjU1fG__list"><p>Architect and develop responsive, high-performance frontend applications using <strong>React.js</strong> and robust backend services using J<strong>ava, spring framework</strong> and <strong>C#</strong> with RESTful API design</p></li><li class="editor-module__kjU1fG__list"><p>Ensure code quality through comprehensive testing, code reviews, and adherence to best practices</p></li><li class="editor-module__kjU1fG__list"><p>Optimize application for speed and scalability.</p></li><li class="editor-module__kjU1fG__list"><p>Troubleshoot, debug, and resolve software issues in a timely manner</p></li></ul>`
      // desc:`<ul class="editor-module__kjU1fG__bulletList"><li class="editor-module__kjU1fG__list"><p>Migrate application written in emberJS to ReactJS.</p></li><li class="editor-module__kjU1fG__list"><p>Architect and develop responsive, high-performance frontend applications using React.js and robust backend services using java, spring framework and C# with RESTful API design</p></li><li class="editor-module__kjU1fG__list"><p>Ensure code quality through comprehensive testing, code reviews, and adherence to best practices</p></li><li class="editor-module__kjU1fG__list"><p>Optimize application for speed and scalability.</p></li><li class="editor-module__kjU1fG__list"><p>Troubleshoot, debug, and resolve software issues in a timely manner.</p></li></ul>`
      // desc: `<ul class="editor-module__g5V4bG__bulletList"><li class="editor-module__g5V4bG__list"><p>Migrate application written in emberJS to ReactJS.</p></li><li class="editor-module__g5V4bG__list"><p>Develop web application using java &amp; spring framework.</p></li><li class="editor-module__g5V4bG__list"><p>Translate wire-frames and designs into good quality code.</p></li><li class="editor-module__g5V4bG__list"><p>Optimize application for speed and scalability.</p></li><li class="editor-module__g5V4bG__list"><p>Fixed bugs &amp; memory leaks.</p></li></ul>`
      // desc:`<ul class="editor-module__kjU1fG__bulletList"><li class="editor-module__kjU1fG__list"><p>Migrate application written in emberJS to ReactJS.</p></li><li class="editor-module__kjU1fG__list"><p>Architect and develop responsive, high-performance frontend applications using React.js and robust backend services using java, spring framework and C# with RESTful API design</p></li><li class="editor-module__kjU1fG__list"><p>Ensure code quality through comprehensive testing, code reviews, and adherence to best practices</p></li><li class="editor-module__kjU1fG__list"><p>Optimize application for speed and scalability.</p></li><li class="editor-module__kjU1fG__list"><p>Fixed bugs &amp; memory leaks.</p></li><li class="editor-module__kjU1fG__list"><p>Troubleshoot, debug, and resolve software issues in a timely manner.</p></li></ul>`
      //   [
      //     'Migrate application written in emberJS to ReactJS',
      //     'Develop web application using java & spring framework',
      //     'Translate wire-frames and designs into good quality code',
      //     'Optimize application for speed and scalability',
      //     'Fixed bugs & memory leaks',
      //   ],
    },
    {
      id: 3,
      company: {
        name: "Techie planet",
        description: "",
        // location: "Lagos, Nigeria",
        achievements: [],
        technologies: [
          "Java",
          "Python",
          "Django",
          "Spring boot",
          "REST",
          "MySQL",
          "MVC",
          "Git"
        ],
        link: ""
      },
      title: "Senior Software Developer",
      duration: "Jun/2016 - Jan/2017", // school
      desc: `<ul class="editor-module__kjU1fG__bulletList">
      <li class="editor-module__kjU1fG__list"><p>Improve legacy code as well as writing new functionalities from scratch.</p></li>
        <li class="editor-module__kjU1fG__list"><p>Write clean, maintainable, and efficient code following best practices.</p></li>
      <li class="editor-module__kjU1fG__list"><p>Troubleshoot, debug, and resolve software issues in a timely manner.</p></li></ul>`
      // desc: `<ul class="editor-module__g5V4bG__bulletList"><li class="editor-module__g5V4bG__list"><p>Develop web application user-facing using react.js.</p></li><li class="editor-module__g5V4bG__list"><p>Collaborates and work closely with other team members across the globe.</p></li><li class="editor-module__g5V4bG__list"><p>Improve legacy code as well as writing new functionalities from scratch.</p></li><li class="editor-module__g5V4bG__list"><p>Deploy software application server</p></li></ul>`

      //   [
      //     'Develop web application user-facing using react.js',
      //     'Collaborates and work closely with other team members across the globe',
      //     'Improve legacy code as well as writing new functionalities from scratch',
      //     'Deploy software application server',
      //   ],
    },
    {
      id: 4,
      title: "Full Stack Software Developer ",
      duration: "Jan/2016 - May/2016",
      company: {
        name: "Maars crypto search",
        description: "",
        location: "Toronto, Canada",
        achievements: [],
        technologies: [
          "Python",
          "Django",
          "EVM",
          "Tron Blockchain",
          "MySQL",
          "React",
          "Elasticsearch"
        ],
        link: ""
      },
      desc: `<ul class="editor-module__kjU1fG__bulletList"><li class="editor-module__kjU1fG__list"><p>Develop, maintain, and optimize Maars blockchain applications</p></li>
      <li class="editor-module__kjU1fG__list"><p>Collaborate with designers, product managers, and other developers to create seamless user experiences.</p></li>
      <li class="editor-module__kjU1fG__list"><p>Design and implement RESTful APIs and integrate third-party services.</p></li>
      <li class="editor-module__kjU1fG__list"><p>Document technical processes, system architecture, and development workflows.</p></li></ul>`
      // desc:`<ul class="editor-module__kjU1fG__bulletList"><li class="editor-module__kjU1fG__list"><p>Develop, maintain, and optimize full-stack applications using <strong>React</strong> on the front end and <strong>Express.js</strong> on the back end.</p></li><li class="editor-module__kjU1fG__list"><p>Collaborate with designers, product managers, and other developers to create seamless user experiences.</p></li><li class="editor-module__kjU1fG__list"><p>Write clean, maintainable, and efficient code following best practices.</p></li><li class="editor-module__kjU1fG__list"><p>Design and implement RESTful APIs and integrate third-party services.</p></li><li class="editor-module__kjU1fG__list"><p>Work closely with DevOps to manage deployments and infrastructure-related tasks.</p></li><li class="editor-module__kjU1fG__list"><p>Document technical processes, system architecture, and development workflows.</p></li></ul>`
      // desc: `<ul class="editor-module__g5V4bG__bulletList"><li class="editor-module__g5V4bG__list"><p> Build user interfaces using using ReactJS.</p></li><li class="editor-module__g5V4bG__list"><p> Build backend and APIs services using Express framework.</p></li><li class="editor-module__g5V4bG__list"><p> Improve software performance &amp; speed.</p></li><li class="editor-module__g5V4bG__list"><p>Deploy software application server.</p></li></ul>`,
    }
  ],
  eduction: [
    {
      school: "Yaba College of Technology",
      cert: "Diploma in Computer Science",
      duration: "Jan/2016 – Jan 2019"
    }
    // {
    //   school: 'Great Trinity College',
    //   cert: 'West African Senior School Certificate (WASSC)',
    //   duration: 'Feb/2002 – Sep/2008',
    // },
    // {
    //   school: 'Jimoh Ojorah Primary School 2',
    //   cert: 'Primary School leaving Certificate (PSLC)',
    //   duration: 'Mar/1996 – Dec/2001',
    // },
  ],
  projects: [
    {
      title: "Recapped inc (AI powered sales collaboration platform)",
      link: "https://www.recapped.io/"
    },
    {
      title: "FP Dashboard (Family planing dashboard)",
      link: "https://fpdashboard.ng/"
    },
    {
      title: "Elanol App (Messaging application)",
      link: "https://apkpure.com/elanol/com.elano.app"
    }
  ],
  certification: [
    {
      school: "Allstars Computer Institute",
      cert: "Diploma in Computer Engineering and Networking",
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
