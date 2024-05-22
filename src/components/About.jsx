export const About = () => {
    return (
        <div className="main">
            <div className="profile-data flex justify-center lg:mx-28 mt-0">
                <div className="programmer-info items-center text-Almost-White text-left relative rounded-lg overflow-hidden">
                    <div className="background w-[100%] h-[100%] opacity-40 absolute -z-10"></div>
                    <div className="categories-container lg:grid lg:grid-cols-2">
                        <div className="categories m-4 lg:m-[50px] max-w-[350px] lg:max-w-[450px] lg:col-span-1">
                            <h3 className="title-about lg:text-2xl pb-1">About me</h3>
                            <p className="lg:text-lg text-sm ">I'm a junior developer with experience in most used technologies for Front-end and Back-end web development. Among them, I could highlight <span className="font-bold">React.js</span>. About me, I can tell you that I'm a software development enthusiast with a solid background in computer science, looking for new opportunities to expand my experience and knowledge.</p>
                        </div>
                        <div className="categories m-4 lg:m-[50px] max-w-[450px] lg:col-span-1 lg:row-span-2 col-[2/2]">
                            <h3 className="title-about lg:text-2xl pb-1">Skills and languages</h3>
                            <p className="lg:text-lg text-sm" >I also have an English certificate at the upper-intermediate level, endorsed by the Cambridge Institute. And I speak Spanish due to it being my native language. I also have experience with the following technologies:</p>
                            <ul className="list-disc list-inside text-sm lg:text-lg ml-5">
                                <li>React.js</li>
                                <li>Javascript</li>
                                <li>HTML & CSS</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>SQL</li>
                                <li>Git</li>
                                <li>Angular</li>
                                <li>Adonis</li>
                            </ul>
                        </div>
                        <div className="categories m-4 lg:m-[50px] lg:mt-0 max-w-[450px] lg:col-span-1">
                            <h3 className="title-about lg:text-2xl pb-1">Studies</h3>
                            <p className="lg:text-lg text-sm ">I am a student at the UNPAZ, in Argentina, where I am currently pursuing a Bachelor's Degree in Information Technology Management, or systems analyst to be simpler. I am currently in my second year.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
