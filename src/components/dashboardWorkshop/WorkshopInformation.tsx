import React from 'react';
import GradientLine from '@/assets/dashboardWorkshop/gradientLine.svg';
import WhatsAppLogo from '@/assets/dashboardWorkshop/whatsappLogo.svg'
import useDragScroll from '@/components/dashboardHome/useDragScroll'; 

interface HomeAndProfileProps {
  selectedCategory: 'Multimedia' | 'Robotika' | 'Internet of Things';
}

interface WorkshopInformationProps {
  title: string;
  content: string;
  materi: string;
  pembicara: string;
  price: string;
  contact: string;
}

const HomeAndProfile: React.FC<HomeAndProfileProps> = ({ selectedCategory }) => {
  const workshopInformation: WorkshopInformationProps[] = [
    {
      title: 'Multimedia',
      content: 'Workshop Multimedia adalah sebuah kegiatan yang diadakan sebagai bagian dari MAGE X. Kegiatan ini bertujuan untuk memperkenalkan dan mendidik masyarakat umum tentang bidang multimedia. Tema tahun ini adalah "Transformasi Digital: Perjalanan Menuju Masyarakat yang Lebih Inklusif Menuju Masyarakat 5.0." Workshop ini akan fokus pada "Mengembangkan Portofolio Website Anda Sendiri" dan mencakup topik-topik seperti: pengetahuan dasar tentang multimedia, pengembangan website, desain dan pengembangan front-end website untuk pemula, dan motivasi untuk terus belajar dan berinovasi di dunia digital. Workshop online selama 3 hari ini akan terdiri dari presentasi materi dan tugas pada hari pertama dan kedua, serta review tugas peserta oleh instruktur pada hari ketiga.',
      materi: "Develop Your Own Portfolio Website",
      pembicara: 'Keanu Fortuna Taufan',
      price: 'GRATIS',
      contact: 'Coming Soon',
    },
    {
      title: 'Robotika',
      content: 'Coming Soon',
      materi: 'Coming Soon',
      pembicara: 'Coming Soon',
      price: 'Coming Soon',
      contact: 'Coming Soon',
    },
    {
      title: 'Internet of Things',
      content: 'Coming Soon',
      materi: 'Coming Soon',
      pembicara: 'Coming Soon',
      price: 'Coming Soon',
      contact: 'Coming Soon',
    },
  ];

  const renderContent = (category: 'Multimedia' | 'Robotika' | 'Internet of Things') => {
    const info = workshopInformation.find(item => item.title === category);
    if (!info) return null;

    const scrollRef = useDragScroll();
    
    return (
      <div className="text-light h-full
                      mobile:mx-6 mobile:mt-6
                      ipad:mx-[8rem] ipad:mt-6
                      desktop:mx-[0] desktop:mt-0">
        <div 
          ref={scrollRef}
          className="w-full bg-gray-5 h-[85%] overflow-auto custom-scroll no-scrollbar rounded-[1rem] justify-center px-10 py-6 items-center" 
          style={{ cursor: 'grab' }}>
          <div className="text-justify font-airstrike
                          mobile:text-[26px] ipad:text-[36px] desktop:text-[26px]">{info.title}</div>
          <img src={GradientLine} className="w-[90%]" alt="Gradient Line" />
          <div className="mobile:text-[13px] ipad:text-[20px] desktop:text-[13px] text-justify">
            <div className="mt-2">{info.content}</div>
            <div className="mt-4">Materi : {info.materi}</div>
            <div>Pembicara : {info.pembicara}</div>
            <div className='flex'>Price : &nbsp;
              <p className="font-medium">{info.price}</p>
            </div>
          </div>
        </div>
        <div className="h-[2%]"></div>
        <div className="w-full py-[8px] h-[13%] bg-gray-5 rounded-[0.5rem] font-fredoka justify-center items-center flex">
          <img src={WhatsAppLogo}></img>
          <div className="ml-4">{info.contact}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="select-none h-full">
      {renderContent(selectedCategory)}
    </div>
  );
};

export default HomeAndProfile;
