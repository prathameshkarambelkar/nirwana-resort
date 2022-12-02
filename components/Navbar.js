import { useState } from 'react'
import Link from 'next/link'



function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter  `}>
            <div className=" text-center flex flex-col ml-4 pt-5">
                    <Link  href={'/'}><p className='py-5 my-10 text-black uppercase ' onClick={() => setTimeout(() => {setOpen(!open)}, 100)}> Home </p></Link>
                    <Link  href={'/'}><p className='py-5 my-10 text-black uppercase ' onClick={() => setTimeout(() => {setOpen(!open)}, 100)}> Camping </p></Link>             
                    <Link  href={'/'}><p className='py-5 my-10 text-black uppercase ' onClick={() => setTimeout(() => {setOpen(!open)}, 100)}> Glamping </p></Link>
            </div>  
        </div>
    )
}

export default function Navbar({user}) {
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter bg-white px-4 py-4 h-20 items-center pcontainer">
                
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-6 h-5 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-0.5 w-full bg-[#197C38] rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`h-0.5 w-full bg-[#197C38] rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-0.5 w-full bg-[#197C38] rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>

                <div className="hidden md:flex list-none">


                    <Link href={'/'}><li className='hover:text-blue cursor-pointer mx-5 m-auto text-sm text-black uppercase font-semibold'> Home</li></Link>
                    <Link href={'/'}><li className='hover:text-blue cursor-pointer mx-5 m-auto text-sm text-black uppercase font-semibold'> Camping</li></Link>
                    <Link href={'/'}><li className='hover:text-blue cursor-pointer mx-5 m-auto text-sm text-black uppercase font-semibold'> Glamping</li></Link>

                    


                </div>
            </div>
        </nav>
    )
}