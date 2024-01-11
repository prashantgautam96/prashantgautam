/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Prashant",
  logo_name: "<prashant>",
  nickname: "harry / picleric",
  full_name: "Prashant Gautam",
  subTitle:
    "An undergrad, Software Development Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1Ty0-51DZ72PE30kfJ2p1jjw9SHYCnDAi/view?usp=sharing",
  mail: "mailto:prashantgautam.275101@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/prashantgautam96",
  linkedin: "https://www.linkedin.com/in/prashant-gautam-4b3405210/",
  gmail: "prashantgautam.275101@gmail.com",
  twitter: "https://twitter.com/prashant_g96",
};

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating application backend in Node , Express & Springboot(JAVA)",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating new services using openly available packages",
        "⚡ Upgrading myself with the skills",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },

        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Technology,Jammu",
      subtitle: "Bachelor in Computer Science & Engineering",
      logo_path: "iitj.png",
      alt_name: "IITJ",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my bachelors Computer Science & Engineering.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.iitjammu.ac.in/",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internship. I've mostly done projects on my own and I am actively looking for internships/full time roles. I love learning the new technologies that come in my way.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Developer (Intern)",
          company: "Earnnest",
          company_url: "https://earnnest.me/",
          logo_path: "earnnest.jpeg",
          duration: "May 2023 - Nov 2023",

          location: "Remote",
          description: `Worked the position of Software Developer Intern, working remotely since June 2023, where I specialize in backend development using Node.js and the FeathersJS framework. My responsibilities include effectively managing databases using PostgreSQL and Sequelize ORM, resolving software issues, creating new services, and tackling various technical challenges
          We primarily used PostgreSql ,Sequelize ORM , NodeJS with FeathersJS Framework. 
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },

        {
          title: "Software Developer (Intern)",
          company: "Viztown",
          company_url: "https://www.viztown.in/",
          logo_path: "viztown.png",
          duration: "Mar 2023 - May 2023",
          location: "Remote",
          description: `Experienced working on both frontend and backend development, employing technologies such as React, Redux, Node.js, Prisma ORM, and PostgreSQL. In this capacity, I successfully resolved frontend issues, enhanced the user interface and experience, and optimized image rendering. Additionally, I addressed database-related challenges to maintain data consistency, demonstrating a profound understanding of all five of these critical technologies.`,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Website team lead",
          company: "Renao IITJMU",
          company_url: "https://www.renao.live/",
          logo_path: "renao.png",
          duration: "Sep 2021 - Present",
          location: "IIT Campus",
          description:
            "Developed the website for the annual cultural fest which solved the purpose of booking ticket , keeping track of events ,blogs for Annual fest of Indian Institute of Technology, Jammu by leading the team of 6 peoples.",
          color: "#FBBD18",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS & SpringBoot Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "prashant.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/prashant_g96",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "2",
      name: "TripBuddy",
      url: "https://github.com/kevalvavaliya/Adoptisity",
      description:
        "Developed a web application service to connect individuals seeking travel companionship. Utilized SpringBoot, SpringMVC, and SpringSecurity for robust backend functionality",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-html-5",
        },
        {
          name: "Springboot",
          iconifyClass: "logos-css-3",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Adoptisity",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/adoptisity",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url: "https://rajmahadevwala1.wixsite.com/adoptisity",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "0",
      name: "Automatic Time Table Generation System",
      url: "https://github.com/Aman-garg-IITian/Timetable-Generation-System",
      description:
        "A software that generates timetable schedule for university course with any conflict between the resources.",
      languages: [
        {
          name: "C++",
          iconifyClass: "bxl:c-plus-plus",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/keep-calm-and-carry-on",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
        {
          name: "Live Demo",
          url:
            "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "1",
      name: "Recommendation System",
      url: "https://github.com/prashantgautam96/Recommendation-System-MS",
      description:
        "Algorithm that recommend the movies user centric and content centric using KNN,Collaborative Filtering and Content-Based filtering and other NLP techniques ",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/kevalvavaliya/Yog4Life",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devfolio",
          url: "https://devfolio.co/projects/yoglife-b20d",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "3",
      name: "Blogs & Events Website",
      url: "https://github.com/prashantgautam96/kritash_",
      description:
        "Developed full-stack website using React for the frontend, Express & Node for the server-side and MongoDB for the database Collaborated with 2 other developers to refine specifications and design",
      languages: [
        {
          name: "Nodejs",
          iconifyClass: "logos-node",
        },
        {
          name: "Reactjs",
          iconifyClass: "logos-react",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/prashantgautam96/kritash_",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devfolio",
          url: "https://github.com/prashantgautam96/kritash_ui",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
    {
      id: "4",
      name: "Blogs & Events Website",
      url: "https://github.com/prashantgautam96/kritash_",
      description:
        "Developed full-stack website using React for the frontend, Express & Node for the server-side and MongoDB for the database Collaborated with 2 other developers to refine specifications and design",
      languages: [
        {
          name: "Nodejs",
          iconifyClass: "logos-node",
        },
        {
          name: "Reactjs",
          iconifyClass: "logos-react",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/prashantgautam96/kritash_",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devfolio",
          url: "https://github.com/prashantgautam96/kritash_ui",
          iconifyClass: "fluent:window-dev-edit-20-filled",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
