import pirspic from './unstructured_content/img/thumbnail.jpg'
import pirsvid from './unstructured_content/img/pirsvid.mp4'
import hafcompic from './unstructured_content/img/hafcom.jpg'
import realpic from './unstructured_content/img/realpic.jpg'
import cpupic from './unstructured_content/img/cpupic.jpg'
import prodpic from './unstructured_content/img/prodcon.jpg'
import riddlePic from './unstructured_content/img/riddle.jpg'
import cssPic from './unstructured_content/img/cssNat.jpg'
import foodPic from './unstructured_content/img/fastfood.jpg'
import foodvid from './unstructured_content/img/fastfood.mp4'
import wefpic from './unstructured_content/img/encrypt.jpg'
import rasterpic from './unstructured_content/img/raster.jpg'
import whitehat from './unstructured_content/img/whitehat.jpg'
import cssvid from './unstructured_content/img/CSS Nature — Mozilla Firefox 2024-06-14 08-57-09.mp4'
import rastervid from './unstructured_content/img/Raster — Mozilla Firefox 2024-06-24 09-29-34.mp4'
import cpuvid from './unstructured_content/img/CPU Scheduling Algorithm Visualizer - CSAV — Mozilla Firefox 2024-06-07 10-11-13.mp4'
import riddlevid from './unstructured_content/img/Riddle_🐅_🐐_🥬_—_Mozilla_Firefox_2023_04_16_01_23_21.mp4'
import prodvid from './unstructured_content/img/Producer and Consumer Simulator — Mozilla Firefox 2024-06-07 10-13-33.mp4'
import hafcomvid from './unstructured_content/img/HAFCOM Design Build Deliver — Mozilla Firefox 2024-06-10 09-12-05.mp4'
import perpic from './unstructured_content/img/percPic.png'
import geezIR from './unstructured_content/img/GeezRetr.png'
let projectRepo = [
  {
    __id: "0",
    title: "Geez Document Retrieval System",
    link: "geezsearch.streamlit.app",
    picUrl: geezIR,
    vidurl: '',
    desc: "This project develops a dedicated Information Retrieval (IR) system for documents written in Ge'ez, an ancient Ethiopian liturgical language. It includes a curated Ge'ez corpus, a custom stemming algorithm, and integrated indexing/query modules. Evaluation using precision, recall, and F1-score shows the tailored stemmer significantly improves retrieval accuracy. The system supports historical research and linguistic preservation."
  },
  {
    __id: "1",
    title: "Reporting System",
    link: "",
    picUrl: pirspic,
    vidurl: pirsvid,
    desc: "In Ethiopia, reporting community issues is often fragmented. My team and I built a location-based reporting platform that clusters reports by geography, reduces duplication, and routes them to relevant authorities. We used the Google Maps API and browser geolocation to create a frictionless user experience while maximizing actionable data collection."
  },
  {
    __id: "2",
    title: "Graphics Simulator",
    link: "",
    picUrl: rasterpic,
    vidurl: rastervid,
    desc: "A sandbox environment to simulate and test raster graphics algorithms, allowing visual experimentation with rendering techniques and performance trade-offs."
  },
  {
    __id: "3",
    title: "HaFCoM Website",
    link: "",
    picUrl: hafcompic,
    vidurl: hafcomvid,
    desc: "I developed the official website for HaFCoM, a construction and architectural firm in Ethiopia, using React. The site showcases their projects, services, and product catalog, improving their digital presence and client engagement."
  },
  {
    __id: "4",
    title: "Fast Food Restaurant Management System",
    link: "",
    picUrl: foodPic,
    vidurl: foodvid,
    desc: "Designed to streamline order coordination in fast-paced restaurant environments, this system models kitchen workflow using queues and real-time status updates. Built with C# and the .NET Framework, it reinforced my understanding of data structures and event-driven design."
  },
  {
    __id: "5",
    title: "CPU Scheduling Algorithm Visualizer",
    link: "",
    picUrl: cpupic,
    vidurl: cpuvid,
    desc: "An interactive web application that simulates CPU scheduling algorithms—including FCFS, SJF, and Round Robin—in both preemptive and non-preemptive forms. Implemented in JavaScript using queue data structures and precise timing logic to model process execution realistically."
  },
  {
    __id: "6",
    title: "Producer-Consumer Simulator",
    link: "",
    picUrl: prodpic,
    vidurl: prodvid,
    desc: "This simulator demonstrates the classic producer-consumer problem in concurrent systems. It uses a bounded buffer to synchronize processes running at different speeds, preventing data loss. Built with JavaScript, it highlights how visual feedback can clarify complex synchronization concepts."
  },
  {
    __id: "7",
    title: "JavaScript River Crossing Riddle",
    link: "",
    picUrl: riddlePic,
    vidurl: riddlevid,
    desc: "A browser-based implementation of the classic river-crossing logic puzzle (tiger, goat, cabbage). Built entirely in JavaScript, it deepened my understanding of state management and user interaction in frontend logic games."
  },
  {
    __id: "8",
    title: "Amharic Spoken Encryption Algorithm",
    link: "",
    picUrl: wefpic,
    vidurl: "",
    desc: "Inspired by traditional Ethiopian oral encryption practices, this Python program implements a cipher where a secret letter is inserted between characters, with vowels from the previous character acting as dynamic keys. The project strengthened my string manipulation and ASCII analysis skills."
  },
  {
    __id: "9",
    title: "White Hat Security Disclosure",
    link: "",
    picUrl: whitehat,
    vidurl: "",
    desc: "While reviewing a medical lab report link shared by a family member, I identified a critical vulnerability that exposed thousands of patient records. I responsibly disclosed the issue to the organization, leading to a timely fix and preventing a potential data breach."
  },
  {
    __id: "10",
    title: "CSS Projects Gallery",
    link: "",
    picUrl: cssPic,
    vidurl: cssvid,
    desc: "A curated collection of CSS experiments built to master layout, animation, and responsive design. Includes an embedded code viewer so others can learn from the implementation details."
  },
  {
    __id: "11",
    title: "RealEstate Management System",
    link: "",
    picUrl: realpic,
    vidurl: "",
    desc: "A desktop application for property search and management in Ethiopia, built with C# and the .NET Framework. It uses Entity Framework for ORM and SQL Server for data storage. To optimize performance, large media files are stored on the filesystem, with only URLs saved in the database."
  },
  {
    __id: "12",
    title: "Perceptron Learning Algorithm",
    link: "",
    picUrl: perpic,
    vidurl: "",
    desc: "Implementation of the perceptron—a foundational neural network algorithm—trained on the Iris dataset using Python. This project explored how simple linear classifiers can learn decision boundaries through iterative weight updates."
  },
  {
    __id: "13",
    title: "Link — Multi-Facility EMR for Ethiopian Healthcare",
    link: "",
    picUrl: "", // Add image if available
    vidurl: "",
    desc: "Currently contributing to 'Link,' a scalable Electronic Medical Record (EMR) system designed for clinics, hospitals, and labs across Ethiopia. The platform enables interoperable patient data management, improving continuity of care and public health reporting. Built with .NET (backend) and Next.js (frontend), with a focus on low-bandwidth resilience and accessibility."
  },
  {
    __id: "14",
    title: "Pharmaceutical Manufacturer Information System",
    link: "",
    picUrl: "", // Add image if available
    vidurl: "",
    desc: "Developed a regulatory compliance system for local pharmaceutical manufacturers in Ethiopia. The platform allows companies to register and manage drug product information (name, dosage, batch, expiry) in alignment with Ethiopian FDA requirements. Built using .NET and Next.js, it ensures accurate, auditable product tracking."
  }
];


export default projectRepo
