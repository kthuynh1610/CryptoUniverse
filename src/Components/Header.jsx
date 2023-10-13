import React, {useState} from 'react'
const Header = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    {title: "Home", src:"Home" },
    {title: "Crypto", src:"Crypto" },
    {title: "News", src:"News" },
    {title: "Home", src:"Home" },
  ]
  return (
    <>
      <div className={`${open ? 'w-72' : 'w-20'} h-screen relative bg-indigo-600 border rounded-l-lg`}>
          <div className='flex mt-1.5'>
            <div className='flex items-center justify-center p-1 ml-1'>
              <i className="fa-solid fa-coins fa-lg text-white"></i>
              <span className={`overflow-hidden transition-all text-white ${
                  open ? "w-52 ml-3" : "w-0"
                }`}>Crypto Universe</span>
            </div>
            <i className='fa-solid 
            fa-arrow-left absolute 
            cursor-pointer purple 
            -right-3 top-5 
            w-10 ' 
            onClick={()=>setOpen(!open)}></i>
          </div>
          <div>
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
          </div>
      </div>
    </>
  )
}

export default Header;