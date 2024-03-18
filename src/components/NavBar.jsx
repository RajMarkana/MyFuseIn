import React, { useState ,useEffect} from 'react';

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isJobMenuOpen, setIsJobMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleJobMenu = () => {
    setIsJobMenuOpen(!isJobMenuOpen);
  };

  const [isVisible, setIsVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    {isVisible && (
        <button
          className=" z-10 fixed bottom-10 right-10 shadow bg-gradient-to-r from-primary to-primary-second text-white px-4 py-2 rounded-full"
          onClick={goToTop}
          title="Go to top"
        >
          &#8593;
        </button>
      )}
    <nav  className="z-10  bg-primary-light sticky top-0 text-secondary p-4">
      
      <div className="hidden md:grid md:grid-cols-3 md:gap-4 items-center">
   
        <div className="col-span-1">
          <img src="/MyFuse.In (1) 2.png" alt="Logo" width={200} />
        </div>


        <div  className="col-span-1 justify-self-center">
          <ul className="flex text-lg space-x-4">
            <li><a href="#" className='font-bold  px-3 text-primary'>Home</a></li>
            <li className="relative px-3 " onMouseEnter={() => setIsJobMenuOpen(true)} onMouseLeave={() => setIsJobMenuOpen(false)}>
              <a href="#" className='hover:text-primary' >Job</a>
              {isJobMenuOpen && (
                <ul className="absolute top-4 -left-8 mt-2 bg-primary-light w-48 rounded-lg shadow-lg">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-primary">Job 1</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:text-primary">Job 2</a>
                  </li>
                
                </ul>
              )}
            </li>
            <li className='px-3'><a href="#" className='hover:text-primary'>Blogs</a></li>
            <li  className='px-3'><a href="#"  className='hover:text-primary'>About Us</a></li>
            <li  className='px-3'> <a href="#"  className='hover:text-primary'>Contact</a></li>
          </ul>
        </div>

        <div className="col-span-1 justify-self-end flex space-x-4">
          <button className="px-4 py-2 rounded-full shadow bg-gradient-to-r from-primary to-primary-second text-white">Sign In</button>
          <img src="/aiIcon.png" alt="Small Image" className="h-8" />
        </div>
      </div>

      <div className="md:hidden flex justify-between items-center">
 
        <img src="/MyFuse.In (1) 2.png" alt="Logo" className="h-8" />


        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4 px-4 py-2 text-secondary">
          <li><a href="#" className='font-bold text-primary'>Home</a></li>
          <li>
            <a href="#" onClick={toggleJobMenu} className="flex  hover:text-primary justify-between items-center">
              Job
              <svg className={`h-4 w-4 ${isJobMenuOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
  
            {isJobMenuOpen && (
              <ul className="flex flex-col space-y-2">
                <li><a href="#" className="block px-4 py-2 hover:text-primary">Job 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:text-primary">Job 2</a></li>
      
              </ul>
            )}
          </li>
          <li><a href="#"  className='hover:text-primary'>Blogs</a></li>
          <li><a href="#"  className='hover:text-primary'>Contact</a></li>
          <li><a href="#"  className='hover:text-primary'>About Us</a></li>
        </ul>
        <div className="col-span-1 justify-self-end flex space-x-4">
          <button className="px-4 py-2 rounded-full shadow bg-gradient-to-r from-primary to-primary-second text-white">Sign In</button>
          <img src="/aiIcon.png" alt="Small Image" className="h-8" />
        </div>
      </div>
    </nav>
    

    </>
  )
}

export default NavBar