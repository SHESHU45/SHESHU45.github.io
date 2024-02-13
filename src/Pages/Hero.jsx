import heroImg1 from '../assets/heroImg1.jpg'
import heroImg2 from '../assets/heroImg2.jpg'
import heroImg3 from '../assets/heroImg3.jpg'

const Hero = () => {

    return (
        <div className='mt-[2rem] py-[3rem] p-3 bg-grey min-h-[96vh] text-white flex flex-col md:flex-row items-center justify-around gap-10 sm:gap-4'>
            <div className='flex flex-col items-left justify-center gap-1 max-w-[25rem] sm:min-w-[32rem] md:min-w-[25rem] lg:min-w-[39rem]'>
                <h1 className='text-[1.6rem] lg:text-[2.5rem] font-semibold text-royalYellow'>Welcome to Kaki Foods <br /> <span>Elevate Your Food Experience!</span></h1>
                <p className='text-[0.92rem] lg:text-[1rem]'>Indulge in a tantalizing array of delectable flavors with our curated collection of artisanal Foods. Whether you crave savory sensations or sweet delights, our selection promises to satisfy every palate. Elevate your Food journey with Kaki Foods and embark on a culinary adventure like no other.</p>
                <button className='bg-royalYellow text-black px-14 rounded-[4px] font-semibold py-[7.5px] mt-3 w-fit'>Buy Now!</button>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={heroImg1} alt="" className='w-[10rem] h-[15rem] lg:w-[13rem] lg:h-[18rem] object-cover rounded-lg shadow-md hover:shadow-royalYellow' />
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <img src={heroImg2} alt="" className='w-[10rem] lg:w-[13rem] rounded-xl shadow-md hover:shadow-royalYellow' />
                    <img src={heroImg3} alt="" className='w-[10rem] lg:w-[13rem] rounded-xl shadow-md hover:shadow-royalYellow' />
                </div>
            </div>
        </div>
    )
}

export default Hero
