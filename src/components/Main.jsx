import profileImage from '../assets/images/profile.jpg';
import gitHubLogo from '../assets/images/icon-github.svg';
import linkedLogo from '../assets/images/icon-linkedin.svg';

export const Main = () => {
    return (
        <div className="main">
            <div className="profile-data flex flex-col-reverse lg:flex-row text-center m-16 lg:m-28 sm:mt-[150px] lg:mt-[200px] justify-between relative">
                <div className="programmer-info flex flex-col lg:flex-row rounded-sm items-center lg:ml-28 text-Almost-White text-left ">
                    <div className="col-span-1 pt-11 text-center lg:text-left lg:row-span-1 lg:border-none">
                        <p className='font-bold'>Hello there!</p>
                        <span className='text-Almost-White font-bold text-3xl'>I'm <span className='type-programmer  text-3xl font-bold text-LightDarkBlue'>Santiago Cuevas </span></span>
                        <p className='type-programmer relative font-bold lg:mx-0 mx-auto w-fit'>Web Designer.<span>&#160;</span></p>
                        <div className="links grid grid-cols-2 gap-2">
                            <a href="http://github.com/Santicue14" target="_blank" rel="noopener noreferrer">
                                <div className='button-profile mt-3 h-9 bg-DarkBlue rounded-2xl items-center border-none transition-colors hover:bg-LightDarkBlue '>
                                    <span className='flex mx-[10%] sm:mx-[15%] lg:mx-auto gap-2 lg:ml-[30px] pt-1'>
                                        <img src={gitHubLogo} alt="Git Hub Logo" />
                                        GitHub
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/santiagocuevas147/" target="_blank" rel="noopener noreferrer">
                                <div className='button-profile mt-3 h-9 bg-cyan-600 rounded-2xl items-center border-none transition-colors hover:bg-cyan-950 '>
                                    <span className='flex mx-[10%] sm:mx-[15%] lg:mx-auto lg:ml-[20px] pt-1'>
                                        <img src={linkedLogo} alt="Git Hub Logo" />
                                        LinkedIn
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="image rounded-[200px] w-52 overflow-hidden col-span-1 lg:row-span-1 mt-4 lg:right-32 lg:absolute">
                        <img src={profileImage} alt="Logo of snap" className=' h-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};
