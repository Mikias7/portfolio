import DecryptedText from "../blocks/DecryptedText";
// import TextTrail from "../blocks/TextTrail/TextTrail";
// import ShinyText from "../blocks/ShinyText/ShinyText";
import GradientText from "../blocks/GradientText/GradientText";

function Home(){

    const handleClick = () => {
        window.location.href = "mailto:mikias7t@gmail.com?subject=Contact%20Request&body=Hello%2C%20I%20would%20like%20to%20get%20in%20touch.";
    };

    return (
        <div className="text-neutral-950">

            <div className="grid flex justify-center pt-8 pr-8 pl-8 text-neutral-950 text-justify">
                <h1 className="flex justify-center text-6xl font-bold font-sans tracking-wide">G'day, I'm</h1>
                {/* <h1 className="text-6xl font-bold font-sans tracking-wide">Mikias Tadele,</h1> */}
                
                <div className="text-8xl pt-3 font-bold font-sans tracking-wide">
                    
                    <GradientText
                        colors={["#ff40dfff", "#000000ff", "#bac4bfff", "#aeafb3ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                        >
                        Mikias Tadele
                    </GradientText>
                </div>
                                    
            </div>

            <div>
                <p className="text-xl flex justify-center p-2 px-20 text-justify text-neutral-950">
                    ...Busy teaching machines to think while I figure out life...
                </p>
            </div>

            <div className="flex justify-center pt-8 px-20 gap-4">
                <button
                    type="button"
                    className="flex justify-center pt-3 card-nav-cta-button hidden md:inline-flex w-40 h-12 border-0 rounded-[calc(0.75rem-0.2rem)] font-medium cursor-pointer transition-colors duration-300 ease-out hover:!bg-purple-500"
                    style={{ backgroundColor: "#6016c0ff", color: "#fff" }}
                    onClick={handleClick}
                >
                    Contact
                </button>

                <button
                    type="button"
                    className="flex justify-center pt-3 card-nav-cta-button hidden md:inline-flex w-40 h-12 border-0 rounded-[calc(0.75rem-0.2rem)] font-medium cursor-pointer transition-colors duration-300 ease-out hover:!bg-pink-500"
                    style={{ backgroundColor: "#c0169bff", color: "#fff" }}
                    onClick={() => {
                    const link = document.createElement("a");
                    link.href = "./public/MikiasResume.pdf"; 
                    link.download = "mikias_resume.pdf"; 
                    link.click();
                    }}
                >
                    CV
                </button>
            </div>

        </div>
    )
}

export default Home;