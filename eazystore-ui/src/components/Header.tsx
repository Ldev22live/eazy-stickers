import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingBasket, faTags} from '@fortawesome/free-solid-svg-icons';
const Header = (): JSX.Element => {
  const navLinkClass = 
  "text-center text-lg font-primary color-lighter font-semibold"
  return (
    <header className="border-b border-gray-300 sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center mx-auto max-w-[1152px] px-6 px-4">
        <a href="/" className="text-center text-lg font-primary py-2">
          <FontAwesomeIcon icon={faTags} className='h-8 w-8' />
          <span className="font-bold">Easy Sticker</span>
        </a>
        <nav className="flex items-center py-2 z-10">
        <ul className="flex space-x-6">
          <li>
            <a href="/" className={navLinkClass}>Home</a>
          </li>
          <li>  
            <a href="/about" className={navLinkClass}>About</a>
          </li>
          <li>
            <a href="/contact" className={navLinkClass}>Contact</a>
          </li>
          <li>
            <a href="/login" className={navLinkClass}>Login</a>
          </li>
          <li>
            <a href="/cart" className={navLinkClass}>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </a>
          </li>
        </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;