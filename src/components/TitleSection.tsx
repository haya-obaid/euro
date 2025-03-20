import React from 'react'

interface TitleSectionProps {
  title: string;
  desc: string;
  color: string
}

export const TitleSection: React.FC<TitleSectionProps> = ({ title, desc, color }) => {
  return (
    <div className="text-center mt-20 mb-16">
      <h1 className="text-[20px] leading-[25.14px] md:text-[48px] md:leading-[60.34px] md:font-normal  font-bold text-[#293352]">{title}</h1>
      <p className={`text-xs leading-[15.08px] font-normal md:text-xl md:leading-[37px] text-[${color}]`}>{desc}</p>
    </div>
  );
};
