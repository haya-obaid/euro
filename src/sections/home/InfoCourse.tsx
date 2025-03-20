import { DropdownHeader } from "@/components/DropdownHeader"


export const InfoCourse = () => {
  return (
    <div className="bg-[#293352]  flex flex-col justify-center gap-3 py-3">


      <div className="mx-auto w-[93%] ">
        <p className='mb-6 text-[24px] font-400 text-[#ffffff]'>Search For Your Course</p>
        <div className="md:w-[67%] md:mx-0 "> <DropdownHeader /></div>
      </div>
    </div>
  )
}
