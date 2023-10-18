import React, {useState} from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    {title: "Home", src:"home" },
    {title: "Crypto", src:"currencies" },
    {title: "News", src:"news" },
    {title: "Exchanges", src:"Exchanges" },
  ]
  return (
    <>

      <aside className={`${open ? 'w-72' : 'w-20'} h-screen p-5 duration-300 border-r sticky bg-white border-gray-300/40 rounded-l-lg`}>
            <div className="flex gap-x-4 items-center p-px">
              <Link to='/'>
                <i 
                className={`cursor-pointer text-gray-700 duration-500 fa-solid fa-coins fa-lg ${
                  open && "rotate-[360deg]"
                }`}></i>
                <h1 className={` origin-left text-gray-700 font-medium text-xl duration-200 ${
                  !open && "scale-0"
                }`}>Crypto Universe</h1>
              </Link>
            </div>
            <img 
             src='./src/assets/arrow.png'
             className={`fa-solid 
                fa-arrow-left absolute 
                cursor-pointer purple 
                -right-3 top-9 w-7 text-white
                ${!open && 'rotate-180'}`}
             onClick={()=>setOpen(!open)}/>
          {/* <div>
            <ul>
              <li
              className={`
                relative flex items-center py-2 px-3 my-1
                font-medium cursor-pointer
                transition-colors group
                bg-indigo-950
            `}
            >
              <i className="fa-solid fa-house text-white"></i>
              <span
                className={`overflow-hidden transition-all text-white ${
                  open ? "w-52 ml-3" : "w-0"
                }`}
              >
                Home
              </span>
              {!open && (
                <div
                  className={`
                  absolute left-full rounded-md px-2 py-1 ml-6
                  bg-indigo-100 text-indigo-800 text-sm
                  invisible opacity-20 -translate-x-3 transition-all
                  group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
              `}
                >
                  Home
                </div>
              )}
            </li>
            </ul>
          </div> */}
          <ul className='pt-6'>
          {Menus.map((Menu,index)=>(
            <Link to={`/${Menu.title}`}>
              <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-400 text-gray-700 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
            
                <img className='w-5 text-white' src={`./src/assets/${Menu.src}.svg`} />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              
              
            </li>
          </Link>
          ))}
          </ul>
      </aside>
      
    </>
  )
}

export default Header;