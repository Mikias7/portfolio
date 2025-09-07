import DecryptedText from "../blocks/DecryptedText";
import TextTrail from "../blocks/TextTrail/TextTrail";

function Home(){

    const handleClick = () => {
        window.location.href = "mailto:mikias7t@gmail.com?subject=Contact%20Request&body=Hello%2C%20I%20would%20like%20to%20get%20in%20touch.";
    };

    return (
        <div className="text-neutral-950">

            <div className=" grid flex justify-center pt-8 pr-8 pl-8 text-neutral-950 text-justify">
                <h1 className=" text-6xl font-bold font-sans tracking-wide">G'day, I'm</h1>
                {/* <h1 className="text-6xl font-bold font-sans tracking-wide">Mikias Tadele,</h1> */}
                
                <div className="text-6xl font-bold font-sans tracking-wide">
                    <DecryptedText 
                        text="Mikias Tadele," 
                        animateOn="view" 
                        revealDirection="center"/>
                </div>
            </div>

            <div>
                <p className="text-2xl justify-center p-8 px-20 text-justify text-neutral-950">
                    I’m a curious and motivated student with a strong passion for 
                    software engineering and machine learning. I enjoy exploring 
                    complex problems, learning new technologies, and finding practical 
                    solutions that make an impact. My enthusiasm for continuous learning 
                    drives me to tackle challenges independently or collaboratively, while 
                    staying adaptable in evolving environments.

                </p>
            </div>

            <div className="justify-center pt-8 px-20">
                <button 
                    onClick={handleClick} 
                    // class="w-20 rounded-lg bg-blue-500 shadow-md"
                    variant="primary"
                    >
                        Contact
                </button>
            </div>
        </div>
    )
}

export default Home;