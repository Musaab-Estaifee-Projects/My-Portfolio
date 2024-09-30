export const navItems = [
  { name: "Home", link: "/" },
  { name: "Mindset", link: "#mindset" },
  { name: "Projects", link: "#projects" },
  { name: "Work Exp", link: "#workExperience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize dynamic client partnerships, cultivating open dialogue to ensure clarity, trust, and shared success.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full filter blur-sm brightness-50",
    titleClassName: "justify-end",
    img: "/desktopWallpaper.webp",
    spareImg: "/b4.svg",
  },
  {
    id: 2,
    title: "I’m highly adaptable to time zone differences in communication.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,

    title: "My Current Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech visionary with an obsession for development excellence.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building powerful solutions, Code by Code",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Excited to create something extraordinary together?",
    description: "",
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
    title: "Dev-OverFlow",
    des: "A community-driven platform for asking and answering programming questions, collaborating, and sharing knowledge with developers worldwide, with an optional AI answer generation.",
    img: "/Devoverflow.webp",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/c.svg",
      "/openAI.svg",
      "/mongodb.ico",
    ],
    link: "https://dev-overflow-musaab-estaifee-projects-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Pharmacy Management System - PMS",
    des: "An application with sub-pharmacist management, role-based access control, multi-method payment processing, stock management, and robust reporting for sales and purchases.",
    img: "/PMS.webp",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "lar.svg",
      "/syncfusion.ico",
      "/mysql.svg",
    ],
    link: "https://github.com/MUS-ES/Pharmacy-Management-System",
  },
  {
    id: 3,
    title: "Animated Apple Iphone 3D Website - 3D Model",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects. contains video carousel, and a 3D model for the iPhone.",
    img: "/iPhone.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://iphone15proshowcase-musaab.netlify.app/",
  },
  {
    id: 4,
    title: "Dalila-Tourism Booking Platform",
    des: "A responsive platform that streamlines tour bookings with guides and offices, featuring tour requests, cancellations, inquiries, and user ratings/reviews.",
    img: "/Dalila.webp",
    iconLists: [
      "/html.svg",
      "/css.svg",
      "/js.svg",
      "/bootstrap.ico",
      "/lar.svg",
    ],
    link: "", // TO_DO:
  },
];

export const projectsGallery = [
  {
    id: 1,
    projectImg: "/movingCards/home-hero.webp",
    projectName: "DevOverFlow",
    projectPageName: "Home",
    imgClassName: "",
    description:
      "Connect with fellow developers! Utilize local and global search, advanced filtering, and pagination to navigate effortlessly.",
  },
  {
    id: 2,
    projectImg: "/movingCards/ask-question-hero.webp",
    projectName: "DevOverFlow",
    projectPageName: "Ask a Question",
    imgClassName: "",
    description:
      "Ask a programming question and get answers from the DevOverFlow community. Whether you're stuck on a coding problem or seeking advice.",
  },
  {
    id: 3,
    projectImg: "/movingCards/question-hero.webp",
    projectName: "DevOverFlow",
    projectPageName: "Question Details",
    imgClassName: "",
    description:
      "Answer, Upvote, Downvote, Save a quesetion to your colloection, Generate AI Answer, and so many more",
  },
  {
    id: 4,
    projectImg: "/movingCards/community-hero.webp",
    projectName: "DevOverFlow",
    projectPageName: "Community",
    imgClassName: "",
    description:
      "Connect with amazing minds on DevOverFlow. Explore user's profile, check their reputation, statistics, and more.",
  },
  {
    id: 5,
    projectImg: "/movingCards/profile-hero.webp",
    projectName: "DevOverFlow",
    projectPageName: "Profile",
    imgClassName: "",
    description:
      "Explore the profile of a DevOverFlow user. View their reputation, account details, statistics, followed tags, and badges earned in the community.",
  },
  {
    id: 6,
    projectImg: "/movingCards/saved-questions-hero.webp",
    projectName: "DevOverFlow",
    projectPageName: "Saved Questions",
    imgClassName: "",
    description:
      "View your saved questions on DevOverFlow. Keep track of important discussions and enhance your learning experience.",
  },
  {
    id: 7,
    projectImg: "/movingCards/tags-hero.webp",
    projectName: "DevOverFlow",
    projectPageName: "All Tags",
    imgClassName: "",
    description:
      "Explore all tags available on DevOverFlow, see the number of questions and followers for each tag, also a short description for each tag.",
  },
  {
    id: 8,
    projectImg: "/movingCards/trending-questions-hero.webp",
    projectName: "DevOverFlow",
    projectPageName: "Trending Questions",
    imgClassName: "",
    description:
      "Explore the most impactful and engaging questions trending right now on DevOverflow. Dive into the latest insights from developers worldwide.",
  },
  {
    id: 9,
    projectImg: "/movingCards/tag-hero.webp",
    projectName: "DevOverFlow",
    projectPageName: "Tag's Questions",
    imgClassName: "",
    description:
      "Explore questions related to a specific tag on DevOverFlow. Engage with the community by asking and answering questions, and use tags to clarify your question",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Junior Software Engineer",
    desc: "As a Junior Software Engineer, I actively pursued self-directed learning and hands-on projects to sharpen my technical skills and deepen my understanding of software development from Planning, Analysis, Design, Implementation, Testing, Maintenance, Refactoring, and Deployment, Regardless of the Software Architecture used. I focused on learning the MERN stack, applying my knowledge of React.js and Next.js to create dynamic web applications. Through personal projects like DevOverflow, I demonstrated my ability to design and implement scalable solutions, troubleshoot issues, and adopt best practices in coding. This experience has equipped me with a strong foundation in software engineering principles and a passion for continuous improvement.",
    className: "md:col-span-2 !p-5",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Front-End Web Application Dev",
    desc: "As a Front-End Web Application Developer, I have successfully built over five projects utilizing core web technologies, including HTML, CSS, JavaScript, Bootstrap, React, and Tailwind CSS. My experience includes implementing responsive designs and interactive features, leveraging JavaScript animation libraries like GSAP to enhance user engagement. Additionally, I have a strong understanding of UI/UX principles, which enables me to create intuitive and visually appealing user interfaces. My proficiency in Next.js further enhances my ability to develop seamless and dynamic web applications, ensuring optimal performance and user experience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "In my role as a Freelance Web Developer, I successfully developed the front-end for the Dalila-Tourism Booking Platform, enhancing the booking process for tours with guides and tourist offices. Collaborating closely with a small team, including a back-end developer and a project manager, I gained valuable insights into project dynamics. This experience allowed me to refine my soft skills, such as effective client communication and task management, while ensuring timely delivery of project milestones using Trello. Working in this collaborative environment not only strengthened my technical abilities but also fostered strong teamwork and communication skills essential for successful project execution.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Back-End Developer Intern",
    desc: "As a Back-End Developer Intern, I utilized my knowledge of the MERN stack to develop robust and scalable web applications. In my project, DevOverflow, I implemented Server Actions in Next.js to enhance data management and streamline interactions between the front-end and back-end. This role allowed me to optimize server-side performance, integrate user authentication, and ensure efficient data flow, all while deepening my understanding of modern development practices and agile methodologies. Additionally, I learned the best practices and tricks of the deployment process using various hosting platforms like Netlify and Vercel, further enhancing my skills in delivering high-quality applications.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/musaab-estaifee",
  },
  {
    id: 2,
    img: "/wha.svg",
    link: "https://wa.me/963997650309",
  },
  {
    id: 3,
    img: "/gmail.svg",
    link: "mailto:eng.musaab.estaifee@gmail.com",
  },
];
