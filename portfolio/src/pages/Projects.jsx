import ChromaGrid from "../blocks/ChromaGrid/ChromaGrid";

function Projects() {
  const items = [
    {
      image: "./public/images/img1.png",
      title: "Ride Sharing App",
      subtitle: "Carpooling App for College Students",
      handle: "Swift + Firebase",
      borderColor: "#f63bedff",
      gradient: "linear-gradient(145deg, #f63bedff, #f63bedff)",
      url: "/projects/rideSharing",
    },
    {
      image: "./public/images/img1.png",
      title: "Augustana University Voting Platform",
      subtitle: "Full-stack Voting System",
      handle: "React + Node.js",
      borderColor: "#f63bedff",
      gradient: "linear-gradient(180deg, #f63bedff, #f63bedff)",
      url: "/projects/votingPlatform",
    },
    {
      image: "./public/images/img1.png",
      title: "Solar Eclipse Simulation",
      subtitle: "Interactive Astronomy Tool",
      handle: "Vanilla JS",
      borderColor: "#f63bedff",
      gradient: "linear-gradient(180deg, #f63bedff, #f63bedff)",
      url: "/projects/solarEclipseSimulation",
    },
    {
      image: "./public/images/img1.png",
      title: "Data Augmentation Tool",
      subtitle: "ML Data Enhancement",
      handle: "Python + OpenCV",
      borderColor: "#f63bedff",
      gradient: "linear-gradient(180deg, #f63bedff, #f63bedff)",
      url: "/projects/dataAugmentationTool",
    },
    {
      image: "./public/images/img1.png",
      title: "Sudoku Solver",
      subtitle: "Computer Vision + Backtracking",
      handle: "Python + CV",
      borderColor: "#f63bedff",
      gradient: "linear-gradient(180deg, #f63bedff, #f63bedff)",
      url: "/projects/sudokuSolver",
    },
    {
      image: "./public/images/img1.png",
      title: "Facial Emotion Recognition",
      subtitle: "ML Model for Emotions",
      handle: "TensorFlow + Keras",
      borderColor: "#f63bedff",
      gradient: "linear-gradient(180deg, #f63bedff, #f63bedff)",
      url: "/projects/facialEmotionRecognition",
    },
    {
      image: "./public/images/img1.png",
      title: "Micro Learning App",
      subtitle: "Learning on the Go",
      handle: "React Native",
      borderColor: "#f63bedff",
      gradient: "linear-gradient(180deg, #f63bedff, #f63bedff)",
      url: "/projects/microLearningApp",
    },
    {
      image: "./public/images/img1.png",
      title: "Flight Search Program",
      subtitle: "Console-based Flight Finder",
      handle: "Java + Binary Tree",
      borderColor: "#f63bedff",
      gradient: "linear-gradient(180deg, #f63bedff, #f63bedff)",
      url: "/projects/flightSearchProgram",
    },
    {
      image: "./public/images/volleyballStats.png",
      title: "Volleyball Intramural Stats Tracker",
      subtitle: "Real-time Stat Tracking App",
      handle: "React + Bootstrap",
      borderColor: "#f63bedff",
      gradient: "linear-gradient(180deg, #f63bedff, #f63bedff)",
      url: "/projects/volleyballStatsTracker",
    },

  ];

  return (
    <div>
      <div>
        <h1>Projects</h1>
      </div>

      <div className="flex">
        <div style={{ height: "1000px", position: "relative" }}>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
