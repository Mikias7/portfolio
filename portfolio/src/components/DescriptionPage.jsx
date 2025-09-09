import { useParams } from "react-router-dom";
import Nav from "./Nav";
import LiquidEther from "../blocks/LiquidEther/LiquidEther";
import GradientText from "../blocks/GradientText/GradientText";

const items = {
    rideSharing: {
      id: "rideSharing",
      description: "Collaborated with a team to develop a ride-sharing app for college students, addressing transportation challenges. Built core features using Swift and SwiftUI, integrating Firebase for backend services such as authentication, real-time data storage, and user management. Project gained recognition from the Augustana University president, with plans for pilot testing among students and potential expansion to other colleges.",
      img: "",
      github: "",  
    },
    votingPlatform: {
      id: "votingPlatform",
      description: "Developed a full-stack voting platform using React and Node.js to replace Augustana’s outdated system, improving reliability, security, and user experience for 2,000+ students during campus elections. Implemented secure student authentication, anonymous encrypted voting, and real-time ballot processing. Collaborated with a team to deliver the project, earning $2,500 for our work.",
      img: "",
      github: "",  
    },
    solarEclipseSimulation: {
      id: "solarEclips",
      description: "Built an interactive solar eclipse simulation tool for Augustana’s Astronomy class, enabling students to calculate eclipse paths, timings, and visualizations for use in coursework and assignments. Implemented the project in pure vanilla JavaScript with reusable, modular components inspired by React, optimizing the codebase for scalability and long-term maintainability without external dependencies. Collaborated on improving existing astronomy class simulation software by refactoring code, creating reusable components, and enhancing overall performance and stability. ",
      img: "",
      github: "",  
    },
    dataAugmentationTool: {
      id: "dataAugmentationTool",
      description: "Developed a Python program to augment image data for machine learning models, using OpenCV to modify hue, brightness, position, and noise. Reduced image labeling time and improved dataset diversity, helping reduce overfitting and enhance machine learning model performance.",
      img: "",
      github: "",  
    },
    sudokuSolver: {
      id: "sudokuSolver",
      description: "Developed an application to capture and solve Sudoku puzzles using a backtracking algorithm. Integrated computer vision and object recognition to detect and extract numbers from the board for accurate puzzle solving.",
      img: "",
      github: "",  
    },
    facialEmotionRecognition: {
      id: "facialEmotionRecognition",
      description: "Collaboratively developed a machine learning model that can distinguish and classify different facial emotions. Utilized Python, TensorFlow, and Keras for model development and training, and also ensured peak performance by implementing a preprocessing pipeline that resizes, normalizes, and augments the training dataset.",
      img: "",
      github: "",  
    },
    microLearningApp: {
      id: "microLearningApp",
      description: "",
      img: "",
      github: "",  
    },
    flightSearchProgram: {
      id: "flightSearchProgram",
      description: "",
      img: "",
      github: "",  
    },
    volleyballStatsTracker: {
      id: "volleyballStatsTracker",
      description: "",
      img: "",
      github: "",  
    },

};

function DesciptionPage(){

    const { itemsId } = useParams();
    const item = items[itemsId];

    return (
        <div className="relative w-full h-screen" style={{height: "100vh", background: "#e7b2ee50"}}>

          
            <div>
              <Nav />
            </div>

            <div className="absolute inset-0 z-0">
              <LiquidEther />
            </div>

            <div className="pt-60">
              <div className="text-6xl relative z-10">
                <GradientText
                    colors={["#000000ff", "#ff40dfff", "#ff40dfff", "#ff40dfff", "#ff40dfff"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                    >
                    {item.id}
                </GradientText>
                
              </div>

              <div className="p-8">
                  <p>{item.from}</p>
              </div>

              <div>
                  <p>{item.description}</p>
              </div>
            </div>
            
        </div>
    )
}

export default DesciptionPage;