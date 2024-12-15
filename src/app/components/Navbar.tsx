import Link from "next/link"
import  Image from "next/image"
import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
            <Image src="/images/icons-home.png" alt="Logo" width={70} height={18} className="object-contain"/>
            <span className="ml-1 text-lg text-gray-500">Home Design</span>
            </Link>
            <CustomButton
            title="Giriş Yap"
            btnType="button"
            containerStyles="text-gray-500 rounded-full min-w-[130px]"
            />
           
        </nav>

    </header>
  )
}

export default Navbar