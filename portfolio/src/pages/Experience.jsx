import ProfileCard from "../blocks/ProfileCard/ProfileCard";
import ProfileCard2 from "../blocks/ProfileCard/ProfileCard";
// import myrainaLogo from "./public/images/myrainaLogo.png"

function Experience(){


    return (
        <div>

            <div className="flex justify-center gap-8">
                <ProfileCard
                    name="MyRaina"
                    title="Software Engineering Intern"
                    handle="Python, React.tsx"
                    status="ML/AI, Computer Vision"
                    contactText="Read more"
                    avatarUrl="./public/images/myraina.jpg"
                    showUserInfo={true}
                    enableTilt={false}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                />
                <ProfileCard2
                    name="CTDI"
                    title="Software Engineering Intern"
                    handle="Python"
                    status="Structured Text"
                    contactText="Read more"
                    avatarUrl="./public/images/ctdiLogo.jpg"
                    showUserInfo={true}
                    enableTilt={false}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                />

               
            </div>
        </div>
    )
}

export default Experience;