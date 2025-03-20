
import { Navbar } from "./Navbar"
import { DropdownHeader } from "./DropdownHeader"


export const Header = () => {
  return (
    <div className="w-[100%] bg-[#293352] pb-[77px] rounded-b-2xl">
        <Navbar/>
        <div className="w-[92.5%] md:w-[100%] mx-auto mt-16"><DropdownHeader/></div>
    </div>
  )
}
