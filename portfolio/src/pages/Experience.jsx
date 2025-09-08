import { Pass } from "postprocessing";
import ProfileCard from "../blocks/ProfileCard/ProfileCard";
import ProfileCard2 from "../blocks/ProfileCard/ProfileCard";
// import myrainaLogo from "./public/images/myrainaLogo.png"

// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import DescriptionPage from "../components/DescriptionPage";


function Experience(){

    const MyRaina = {
        title: "Software Engineering Intern",
        from: "May 2024 - August 2024",
        desciption: "Developed machine learning algorithms to track and analyze assistive device usage, aiming to prevent elder care falls. Built data pipelines for preprocessing and augmenting assistive device images, optimizing model accuracy. Created synthetic image generation software to diversify datasets and minimize overfitting. Developed a React component with custom hooks and API integration to display assistive device misuse results and inform caregivers. ",
        route: "experience/myraina"
    }

    const CTDI = {
        title: "Software Engineering Intern",
        from: "May 2024 - August 2024",
        desciption: "Automated Amazon product testing using a robotic arm, reducing testing time by 45% and earning recognition from the CEO for improving efficiency. Designed and implemented a motion recording and playback mechanism for robotic arms, reducing development times. Leveraged computer vision to enhance the precision of robotic arm movements, optimizing accuracy in testing workflows.",
        route: "experience/ctdi"
    }

    const handleClick = (data) => {
        <DescriptionPage data={data}/>
        
    }       

    return (
        <div>
            
            <div className="flex justify-center gap-8">
                <ProfileCard
                    name="MyRaina"
                    title="Software Engineering Intern"
                    handle=""
                    status="January 2025 - Present"
                    contactText="Read more"
                    avatarUrl="./public/images/myraina.jpg"
                    showUserInfo={true}
                    enableTilt={false}
                    enableMobileTilt={false}
                    onContactClick={() => handleClick({MyRaina})}
                />

                <ProfileCard2
                    name="CTDI"
                    title="Software Engineering Intern"
                    handle=""
                    status="May 2024 - August 2024"
                    contactText="Read more"
                    avatarUrl="./public/images/ctdiLogo.jpg"
                    showUserInfo={true}
                    enableTilt={false}
                    enableMobileTilt={false}
                    onContactClick={() => handleClick({CTDI})}
                />

               
            </div>
        </div>
    )
}

export default Experience;