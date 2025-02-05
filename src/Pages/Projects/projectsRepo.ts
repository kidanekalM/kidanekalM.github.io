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
let projectRepo = 
[
    {__id:"0",title:"Geez Document Retrieval System",link:"geezsearch.streamlit.app",picUrl:geezIR,vidurl:'',desc:"This project aims to develop a dedicated Information Retrieval (IR) system designed to handle documents written in Ge'ez, an ancient language. The primary objective is to create an efficient document retrieval system that can accurately stem Ge'ez words and match user queries. The system involves the preparation of a comprehensive Ge'ez document corpus, the development of a customized stemming algorithm, and the integration of indexing and querying modules. Key findings indicate that the tailored stemmer significantly enhances retrieval accuracy. The system’s performance is evaluated using standard metrics such as precision, recall, and F1-score. This work emphasizes the significance of preserving and accessing Ge'ez texts, with potential applications in historical research and linguistic studies. "},
    {__id:"1",title:"Reporting System",link:"",picUrl:pirspic,vidurl:pirsvid,desc:"In ethiopia there is a need for a reporting system. Noticing this problem me and my team tried to implement a reporting system in which the reports can be sorted by location, number of users and by the company that it is reported to. In this project we encountered multiple problems like making the user experience as frictionless as possible and trying to get as much information for the report. We tried to solve this problem by providing the user option to not repeat what other users have already reported. I learned a lot from this project like google maps api, browser geolocation api,  "},
    {__id:"2",title:"Graphics Simulator",link:"",picUrl:rasterpic,vidurl:rastervid,desc:"I tried to simulate and create an algorithm testing sandbox for raster graphics "},
    {__id:"3",title:"HaFCoM",link:"", picUrl:hafcompic,vidurl:hafcomvid,desc:"HafCoM is a construction and architectural company in Ethiopia. I implemented their website using react to showcase their projects and serives along with the products they offer. I learned a lot about react in this project "},
    {__id:"4",title:"Fast Food Restaurant Managment",link:"",picUrl:foodPic,vidurl:foodvid,desc:"In the rushing work of the fast food restaurant speed and coordination is very important. We tried to implement the fast food restaurant managment system to simplify the process of ordering and organizing orders for fast food restaurants. This helped us in learning more about C# and the dotment framework and Data structures like the queue."},
    {__id:"5",title:"CPU Scheduling Algorithm",link:"",picUrl:cpupic,vidurl:cpuvid,desc:"This web application can simulate the process of different cpu scheduling algorithms from first come firs serve, shortest job first round robin and thier preemptive and non preemtive versions. In this project I learned about javascript and the process of timing in javascript. I encountered some problems in accessing the processes and I solved that by using queue data structure "},
    {__id:"6",title:"Producer and Consumer",link:"",picUrl:prodpic,vidurl:prodvid,desc:"In this simulator I tried to show one of the solutions to problems of data sharing among processes. This solution uses the buffer to solve the problem. when there are two processes that have different speed of computation there might be some data lost. In this case the buffer can solve this problem by balancing the speed difference. In this project I learned javascript timing and how visuals are a great way to transfer information."},
    {__id:"7",title:"Javascript Riddle",link:"",picUrl:riddlePic,vidurl:riddlevid,desc:"This riddle is made in javascript. To solve the riddle one must transfer all the objects from one side of the river to the other. In this project I learned a lot about javascript."},
    {__id:"8",title:"Encryption Algorithm",link:"",picUrl:wefpic,vidurl:"",desc:"In ethiopia there are local languages that use spoken encryption algotihm that is meant to hide from people who do not hold that skill. I tried to implement that encyption algorithm in python. The way it works is the speakers choose a certain letter to enter between the every charachter that is spoken. To make it more difficult they use the vowels of the previous charachter for the key. In this project I learned about python and string manipulation libraries. The problems I encountered were the use of vowels for the encryption algorithm which I solved by printing and observing the list of ascii charachters and finding a trend."},
    {__id:"9",title:"White Hat",link:"",picUrl:whitehat,vidurl:"",desc:"I surveyed and reported a security vulnerability of a Clinical Labratory and prevented the possible leak of thousands of medical records. I came accross this when a family member used this service and I tried a vunerability check on the link sent from the Labratory. "},
    {__id:"10",title:"CSS Projects",link:"",picUrl:cssPic,vidurl:cssvid,desc:"In this project I tried to organize all the css projects that I used to improve my skills. I also tried to implement a code viewer for anyone to see how the objects were implemented "},
    {__id:"11",title:"RealEstate",link:"",picUrl:realpic,vidurl:"",desc:"In Ethiopia there are a lot of tiring work related to looking for properties. Noticing this problem we tried to implemet this application using the dot net framwork and the C# language. I learned in this project about the C# language and how desktop applications are implemeted. Also I learned a lot about the SQL database managment, the Entity Framework library and Object relational mappers in general. I encountered performance problems during this project and we tried to solve this problem by not saving large binary files in database instead saving them in the file system and using thier url in the database instead  "},
    {__id:"12",title:"Perceptron Learning Algo",link:"",picUrl:perpic,vidurl:"",desc:"The perceptron is a learning algorithm that takes inspiration from the neuron cell and is used in artificial neural networks. I implemented the perceptron learning algorithm on the iris dataset using python."},
]

export default projectRepo
