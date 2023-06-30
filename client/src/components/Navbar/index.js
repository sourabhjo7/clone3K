import React , {useState} from 'react'



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [socialMediaIcon, setSocialMediaIcon] = useState('client\public\images\twitter.png');
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const toggleSocialMediaIcon = () => {
      setSocialMediaIcon((prevIcon) =>
        prevIcon === 'client\public\images\twitter.png' ? 'client\public\images\twitter.png' : 'client\public\images\twitter.png'
      );
    };
  
    // Call the toggleSocialMediaIcon function every 3 seconds
    React.useEffect(() => {
      const interval = setInterval(toggleSocialMediaIcon, 3000);
      return () => clearInterval(interval);
    }, []);


  return (
    <header id="header" className="relative flex flex-col z-10">
      {/* Wide screen nav */}
      <section className="hidden lg:flex h-28 border-to theme-navbar-100 sticky top-0 z-10 flex-col-reverse items-center justify-center lg:border-t-8 lg:theme-border-300 zig-zag-header">
        <nav className="h-20 w-96 text-white flex items-center justify-between" aria-label="widescreen-nav">
          <a href="" className="hover:theme-navbar-text-300">Home</a>
          <a href="" className="hover:theme-navbar-text-300 pl-5 ">Header</a>
          <a href="" className="hover:theme-navbar-text-300 px-5">Posts</a>
          <a href="" className="hover:theme-navbar-text-300 px-5">About</a>
          <a href="" className="hover:theme-navbar-text-300">Contact</a>
          <img id="nav-social-link" src="" alt="social-media" className='' />
        </nav>
      </section>

      {/* Logo */}
      <section className="flex justify-center items-center theme-body-100 h-52 px-5 lg:px-0">
        <img src="./images/frida-logo.png" alt="" />
      </section>

      {/* Small screen nav */}
      {/* Button */}
      <section
        id="hamburger-button"
        className="lg:hidden flex items-center justify-end theme-navbar-100 w-full px-2.5 py-1 text-white text-2xl"
        onClick={toggleMenu}
      >
        <span className="cursor-pointer">&#9776;</span>
      </section>
 
      {/* Expanded */}
      <nav
        id="mobile-menu"
        className={`lg:hidden ${
          isMenuOpen ? 'flex' : 'hidden'
        } theme-navbar-100 w-full mb-5 px-2.5 py-1 text-white flex-col transition-all ease-in-out`}
        aria-label="smallscreen-nav"
        onClick={toggleMenu}
      >
        <a href="" className="flex items-end pl-4 pb-4 hover:theme-navbar-text-300">Home</a>
        <a href="" className="flex items-end pl-4 pb-4 hover:theme-navbar-text-300">Header</a>
        <a href="" className="flex items-end pl-4 pb-4 hover:theme-navbar-text-300">Posts</a>
        <a href="" className="flex items-end pl-4 pb-4 hover:theme-navbar-text-300">About</a>
        <a href="" className="flex items-end pl-4 pb-4 hover:theme-navbar-text-300">Contact</a>
        <a href="" className="flex gap-x-4 pl-4 pb-4 hover:theme-navbar-text-300">
          <img src="./images/facebook.png" alt="facebook" className="w-5 h-5" />
          <img src="./images/twitter.png" alt="twitter" className="w-5 h-5" />
        </a>
      </nav>
    </header>
  )
}

export default Navbar