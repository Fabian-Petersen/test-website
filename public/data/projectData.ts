import projectImages from "@/public/images/projectImages";
import skillsIconImages from "../icons/skill-icons";
import { v4 as uuidv4 } from "uuid";

export type ProjectCardDataType = {
  id?: string;
  projectTitle: string;
  language: string;
  category: string;
  description: string;
  image?: string;
  websiteLink: string;
  githubLink: string;
  singlePage: {
    title: string;
    aim: string;
    description: string;
    challenges: string[];
    skills: string[];
    images: string;
  };
};

const {
  teaProject,
  toursProject,
  comingSoon,
  cocktailsProject,
  githubProject,
  pendingProject,
} = projectImages;

const projectsCardData: ProjectCardDataType[] = [
  {
    id: uuidv4(),
    projectTitle: "cocktails-masters",
    language: "react",
    category: "front-end",
    description: "Everything you need to know about your favourite cocktail",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/cocktail-project-screenshot.jpg",
    websiteLink: "https://fabian-portfolio-cocktail-project.netlify.app",
    githubLink: "https://githubLink.com/fabian-petersen/cocktail-api-project",
    singlePage: {
      title: "cocktail-master",
      aim: "The aim of this project was to create a single page application that uses the cocktailDB API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      skills: ["html", "css", "javascript", "react"],
      images: "",
      challenges: [
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
        "Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
        "Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
      ],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "githubLink Users",
    language: "react",
    category: "frontEnd",
    description: "Search for your favoutrite user on the githubLink site",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/github-users-project.svg",
    websiteLink:
      "https://fabian-portfolio-react-githubLink-users.netlify.app/login",
    githubLink:
      "https://githubLink.com/fabian-petersen/react-githubLink-users-search-app.git",
    singlePage: {
      title: "github-users",
      aim: "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
      description:
        "In this project i used the githubLink API to get the information of the users.",
      images: "",
      skills: ["html", "css", "javascript", "react"],
      challenges: [
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
        "Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
        "Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
      ],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "Creative Tours",
    language: "javascript",
    category: "front-end",
    description:
      "Search for your favoutrite destination and book with us for a memorable holiday.",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/tours.jpg",
    websiteLink: "",
    githubLink: "https://githubLink.com/fabian-petersen/natours",
    singlePage: {
      title: "tours-project",
      aim: "Design a website that showcases the best tours in the world",
      description:
        "The project does not use any framework e.g. React. The project was created in in my early stages as a developer to learn vanilla sematic HTML, CSS (with SCSS) and JavaScript.",
      images: "",
      challenges: [
        "In this project the biggest challenge was to create a responsive website that works on all devices.",
      ],
      skills: ["html", "css", "javascript"],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "Tea Brewery",
    language: "react",
    category: "front-end",
    description: "The most exquisite tea range in the world",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/tea.jpeg",
    websiteLink: "https://tea-brewery.netlify.app/",
    githubLink: "https://githubLink.com/Fabian-Petersen/tea-shop-app",
    singlePage: {
      title: "tea-shop-project",
      aim: "Basic Project to learn Javascript, HTML and CSS",
      description:
        "This is the first and most basic website I have build with React. All the data is stored within array objects and mapped over to display the different sections based on the hardgithubLinkd data. The css are done with styled components with fairly basic animations e.g. text movement in the X directions, object scaling and background image tranisioning over the product cards. The section id's was used to navigate bewteen the pages",
      images: "",
      challenges: [
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
        "Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
        "Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
      ],
      skills: ["html", "css", "javascript", "react"],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "comfy-sloth",
    language: "react",
    category: "front-end",
    description: "Random e-commerce store for your favourite items",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/comingSoon.jpg",
    websiteLink: "",
    githubLink: "",
    singlePage: {
      title: "comfy-sloth-project",
      aim: "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      challenges: [
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
        "Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
        "Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
      ],
      skills: ["html", "css", "javascript", "react", "githubLink"],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "Vehicle Booking App",
    language: "react",
    category: "front-end",
    description:
      "Booking App for the department of transport - University of the Western Cape",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/comingSoon.jpg",
    websiteLink: "",
    githubLink: "",
    singlePage: {
      title: "uwc-logistics-project",
      aim: "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
      description:
        "In this project i used the Supabase Backend API with a PostgresSQL Database",
      images: "",
      challenges: [
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis. Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
      ],
      skills: ["html", "css", "javascript", "react"],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "Web Scraping App",
    language: "python",
    category: "back-end",
    description:
      " - Web Scraping App using AI to get the latest news and updates",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/comingSoon.jpg",
    websiteLink: "",
    githubLink: "",
    singlePage: {
      title: "ai-web-scraping-project",
      aim: "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
      description:
        "In this project i used the Python with the BeautifulSoup4 and Selenium libraries to scrape the web for the latest news and updates. The app uses a simple AI to get the latest news and updates.",
      images: "",
      challenges: [
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
        "Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
        "Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
      ],
      skills: ["streamlit", "python", "githubLink"],
    },
  },
  {
    id: uuidv4(),
    projectTitle: "Burger Fast Food App",
    language: "python",
    category: "DevOps",
    description: "",
    image:
      "https://fabian-portfolio-project-images.s3.af-south-1.amazonaws.com/comingSoon.jpg",
    websiteLink: "",
    githubLink: "",
    singlePage: {
      title: "Burger Fast Foods",
      aim: "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
      images: "",
      description:
        "In this project the best practices of devOps were used. The Front-End is build with HTML, CSS and JavaScript. The Back-End is build with Python and the app is deployed on AWS with the use of Terraform. The Front End is the work of a third party front-end developer from Youtube.",
      skills: ["terraform", "python", "aws", "githubLink"],
      challenges: [
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
        "Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. In turpis.",
        "Ut non enim eleifend felis pretium feugiat. Praesent venenatis metus at tortor pulvinar varius.",
      ],
    },
  },
];

export default projectsCardData;
