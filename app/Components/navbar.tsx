import Link from 'next/link'

function Navbar() {
    return (
        <>
            <nav className='flex bg-[#f9f6f6e0] justify-between'>
                <img src="https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg" alt="Logo" className='rounded-[2rem] w-14 mx-2 my-2 border-2'/>
                <ul className='flex text-2xl self-center pr-16 gap-12 text-black font-extrabold'>
                    <li className=''><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/About"}>About Us</Link></li>
                    <li><Link href={"/Services"}>Services</Link></li>
                    <li><Link href={"/Contact"}>Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar