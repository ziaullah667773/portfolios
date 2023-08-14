import React,{useEffect,useRef} from 'react'

const Dropdown = () => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const dropdown = dropdownRef.current;

    const handleClick = () => {
      dropdown.classList.toggle('active');
    };

    dropdown.addEventListener('click', handleClick);

    return () => {
      dropdown.removeEventListener('click', handleClick);
    };
  }, [dropdownRef]);
  return (
    <section className="min-h-screen pt-5 flex items-center justify-center  text-white">
      <div className='box relative h-[250px] w-[250px] '>
        <div ref={dropdownRef} className='dropdown relative w-full h-[60px] bg-indigo-500 text-[22px] flex items-center justify-center cursor-pointer rounded-[5px] shadow-lg shadow-indigo-500/50 '>Button
            <span className='left-icon'></span>
            <span className='right-icon'></span>
            <div className='items'>
              <a href="" style={{'--i': 1}}><span></span>HTML</a>
              <a href="" style={{'--i': 2}}><span></span>CSS</a>
              <a href="" style={{'--i': 3}}><span></span>Javascript</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Dropdown
