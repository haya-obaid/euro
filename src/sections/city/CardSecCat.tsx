
import Image, { StaticImageData } from 'next/image';
import c1 from '../../assets/card-cat.jpg';


interface CardProps {
  image: StaticImageData; 
  text: string; 
}

interface CardSecCatProps {
  title: string; 
}
export const CardSecCat: React.FC<CardSecCatProps> = ({ title }) => {
    const cardsData = [
        { image: c1, text: 'Customer service management' },
        { image: c1, text: 'Customer service management' },
        { image: c1, text: 'Customer service management' },
        { image: c1, text: 'Customer service management' },
        { image: c1, text: 'Customer service management' },
      ];

  return (
    <div className="w-[91%] mx-auto mt-10 mb-16">
      <h3 className='text-[36px] font-black leading-[68px] text-[#080808]'>{title}</h3>
      <div className="flex justify-between gap-4">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} text={card.text} />
        ))}
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ image, text }) => (
  <div className="w-[20%] h-[337px] relative mb-10">
    <Image src={image} alt='' className='w-full h-full rounded-3xl' width={264} height={337}/>
    <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-3xl">
      <div className="w-[100%] text-center absolute bottom-7">
        <p className='text-[14px] font-bold leading-[17.6px] text-[#FFFFFF]'>{text}</p>
      </div>
    </div>
  </div>
);
