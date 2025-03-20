interface SectionProps {
    title: string;
    items: string[];
  }
export const InfoCourseSec : React.FC<SectionProps> = ({ title, items }) => {
    return (
      <div className="mt-4 mb-8">
        <h3 className='mb-8 text-[18px] font-black leading-[22.63px] text-[#293352]'>{title}</h3>
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <li key={index} className='text-[18px] font-normal leading-[22.63px] text-[#000000] ml-5 capitalize'>
              {item}
            </li>
          ))}
        </div>
      </div>
  )
}
