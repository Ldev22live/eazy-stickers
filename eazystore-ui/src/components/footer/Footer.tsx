import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
    return (
        <>
        <footer className="flex justify-center items-center py-4 bg-gray-800 text-white">
            Built with 
            <FontAwesomeIcon 
            icon={faHeart} 
            className='text-red-500 mx-1 animate-pulse'
            aria-hidden="true"
            /> by 
            <a href="https://urconnex.com" target="_blank" rel="noopener noreferrer"
            className="text-blue-400 hover:underline ml-1 transition-colors duration-300 hover:text-blue-600">
              Ldev22
            </a>
        </footer>
        </>
    );
}