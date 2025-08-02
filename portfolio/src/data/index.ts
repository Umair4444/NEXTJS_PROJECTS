export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Crafting immersive and high-performance web experiences.",
    description: "",
    // "I build modern, responsive, and intuitive UIs that enhance user engagement.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adaptable across time zones for smooth collaboration.",
    description: "",
    // "Effective communication and flexibility to meet project needs—anytime, anywhere.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack.",
    description: "",
    // "Constantly refining my skills in frontend development, animations, and AI-driven solutions.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Bridging creativity and technology.",
    description: "",
    // "Passionate about frontend innovation and the potential of Generative AI.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building interactive experiences with JavaScript animations.",
    description: "",
    // "Working with custom animation library to enhance UI dynamics.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s create something extraordinary together.",
    description: "",
    // "Open to exciting projects—whether it's a website, web app, or AI-powered experience.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Fundamental Web Projects – Leveraging HTML, CSS & JavaScript",
    des: "A collection of essential web projects, including forms, landing pages, and about sections, built with clean and responsive design principles.",
    img: "/p1.svg",
    iconLists: [
      "/html.svg",
      "/css.svg",
      "/ts.svg",
      "/javascript.svg",
      "/bootstrap.svg",
      "/wordpress.svg",
      "/figma.svg",
      "/netlify.svg",
    ],
    link: "/fundamental-web-projects",
  },
  {
    id: 2,
    title:
      "TypeScript Projects – Building with React & Next.js and using headless CMS",
    des: "Building  webapps with nextjs and using headless cms for content management with different libraries and framework",
    img: "/p2.svg",
    iconLists: [
      "/ts.svg",
      "/next.svg",
      "/tail.svg",
      "/sanity.svg",
      "/shadcn.svg",
      "/aceternity.svg",
      "/node.svg",
      "/vercel.svg",
    ],
    link: "/typescript-projects",
  },
  {
    id: 3,
    title: "Python Projects - Using UV and Streamlit",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: [
      "/python.svg",
      "/streamlit.svg",
      "/uv.svg",
      "/numpy.svg",
      "/pandas.svg",
    ],
    link: "/python-projects",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Umair's expertise in web development transformed our project. His attention to detail and creativity took our platform to the next level.",
    name: "Sophia Martinez",
    title: "CEO of TechNova Solutions",
    img: "/user.svg",
  },
  {
    id: 2,
    quote:
      "Working with Umair was an absolute pleasure. His ability to solve complex problems and implement innovative solutions was impressive.",
    name: "James Carter",
    title: "Product Manager at Elevate Digital",
    img: "/user.svg",
  },
  {
    id: 3,
    quote:
      "Umair delivered outstanding results with precision and efficiency. His technical skills and design sense created a seamless user experience.",
    name: "Isabella Reynolds",
    title: "Founder of Creative Pulse Agency",
    img: "/user.svg",
  },
  {
    id: 4,
    quote:
      "Umair's knowledge of modern development tools and frameworks helped us optimize our project. His problem-solving approach made a huge impact.",
    name: "David Thompson",
    title: "Lead Engineer at SwiftTech Labs",
    img: "/user.svg",
  },
  {
    id: 5,
    quote:
      "Umair's dedication and expertise were evident in every aspect of our project. He ensured that our website was both functional and visually appealing.",
    name: "Emma Wilson",
    title: "Marketing Director at BrightPath Media",
    img: "/user.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Saiket System",
    desc: "Worked on the development of a web-based platform using React.js and Next.js, improving UI interactivity and performance.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "C Programming",
    company: "Harvard University",
    desc: "Currently learning CS50 from Harvard University, taught by David Malan, to build a strong foundation in computer science and programming with C.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App & Web Developer",
    company: "Fiverr, Upwork, Freelancer, Guru",
    desc: "Developed custom mobile and web applications for clients, handling projects from initial concept to deployment. Specialized in Next.js, React, and eCommerce solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Gen AI Engineer",
    company: "GIAIC - Certified from Karachi University",
    desc: "Currently learning TypeScript and Python while exploring Generative AI technologies to build intelligent and innovative applications.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Umair4444",
  },
  {
    id: 2,
    img: "/fiverr.svg",
    link: "https://www.fiverr.com/users/umairkhan44s",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/umair-khan44",
  },
];
