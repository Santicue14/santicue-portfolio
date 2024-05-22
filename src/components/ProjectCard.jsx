import gitHubLogo from '../assets/images/icon-github.svg'
import avalonPreview from '../assets/images/avalon-preview.png'
import cardPreview from '../assets/images/card-preview.jpeg'
import notificationsPreview from '../assets/images/notifications-preview.jpeg'
import socialmediaPreview from '../assets/images/socialmedia-preview.jpeg'


export const ProjectCard = ({ name, link, description, github, preview }) => {
    const previewsImages = {
        avalon: avalonPreview,
        card: cardPreview,
        notifications: notificationsPreview,
        socialmedia: socialmediaPreview
    }
    return (
        <div className="text-white border mt-4 border-white lg:mx-0 p-4 rounded-lg w-[300px] mx-auto flex-grow">
            <div className="rounded pb-5 overflow-hidden">
                <img src={previewsImages[preview]} alt={`${preview}Preview`} />
            </div>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm">{description}</p>
            <div className="mt-2 flex flex-row w-full  text-Almost-White">
                <a href={link} className="text-Almost-White mr-4 mx-auto" target="_blank" rel="noopener noreferrer">
                    <div className='px-4 button-link mt-3 h-9 bg-orange-500 rounded-2xl items-center border-none transition-colors hover:bg-orange-700 '>
                        <span className='flex mx-auto gap-2 pt-1'>
                            Live Demo
                        </span>
                    </div>
                </a>
                <a href={github} className="text-Almost-White items-center mx-auto" target="_blank" rel="noopener noreferrer">
                    <div className='px-4 button-link mt-3 h-9 bg-cyan-600 rounded-2xl items-center border-none transition-colors hover:bg-cyan-900 '>
                        <span className='flex mx-auto gap-2 pt-1'>
                            <img src={gitHubLogo} alt="Git Hub Logo" />
                            GitHub
                        </span>
                    </div>
                </a>
            </div>
        </div>
    )
}
