import  { useRef } from 'react'
import Founder from '../assets/Founder.png'

const About = () => {
    const about = useRef(null)
    return (
        <div ref={about} className='bg-grey text-white flex flex-col items-center justify-center gap-4 py-20'>
            <h1 className='text-[1.4rem] font-semibold border-b-2 pb-[1px] border-royalYellow'>About the Founder</h1>
            <div className='flex flex-col items-center justify-center gap-6 lg:flex-row'>
                <div>
                    <img src={Founder} alt="" className='w-[17rem] rounded-md lg:w-[22rem]' />
                </div>
                <div className='w-[90vw] sm:w-[75vw] md:w-[45vw]'>
                    <div className='border-l pl-6 relative ml-6'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[0.38rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Meet Founder - The Creative Force Behind Kaki Foods</h2>
                        <p className='text-[0.95rem] pt-2'>Driven by a fervent love for food, Founder's set out on a transformative mission to redefine the culinary landscape. With a visionary goal of crafting nourishing delights that seamlessly marry indulgence with nutrition, Founder's laid the cornerstone for Kaki Foods.</p>
                    </div>
                    <div className='border-l pl-6 relative ml-6 pt-10'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[2.9rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Inspiration for Kaki Foods</h2>
                        <p className='text-[0.95rem] pt-2'>Fueled by a passion for wholesome ingredients and a commitment to offering healthier food options, Founder's channels creativity and culinary expertise into each creation at Kaki Foods.</p>
                    </div>
                    <div className='border-l pl-6 relative ml-6 pt-10'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[2.9rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Our Commitment</h2>
                        <p className='text-[0.95rem] pt-2'>Founder's, along with the entire Kaki Foods team, is dedicated to crafting snacks that not only satiate your cravings but also enhance your well-being. Join us on this flavorful journey as we redefine food with a purpose!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
