import whyImg from '../assets/whyImg.png'

const WhyWePage = () => {
    return (
        <div className='bg-grey text-white flex flex-col items-center justify-center gap-4 py-20'>
            <h1 className='text-[1.4rem] font-semibold border-b-2 pb-[1px] border-royalYellow'>Why Choose Us?</h1>
            <div className='flex flex-col items-center justify-center gap-6 lg:flex-row'>
                <div>
                    <img src={whyImg} alt="" className='w-[17rem] lg:w-[22rem] rounded-md' />
                </div>
                <div className='w-[90vw] sm:w-[75vw] md:w-[45vw]'>
                    <div className='border-l pl-6 relative ml-6'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[0.38rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Craftsmanship</h2>
                        <p className='text-[0.95rem] pt-2'>At Kaki Foods, we are passionate about the culinary craft. Our dishes are not merely prepared; they are curated, with each flavor harmoniously blending to create an unforgettable experience. We meticulously select our ingredients and adhere to the highest standards of quality from sourcing to packaging. Quality is not just a priority; it's our commitment at every stage of the process.</p>
                    </div>
                    <div className='border-l pl-6 relative ml-6 pt-10'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[2.9rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Expertise</h2>
                        <p className='text-[0.95rem] pt-2'>With years of culinary expertise, Kaki Foods stands as a testament to the unwavering dedication of our team. Led by our visionary founders, our chefs bring a wealth of experience to the kitchen, transforming every dish into a masterpiece.</p>
                    </div>
                    <div className='border-l pl-6 relative ml-6 pt-10'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[2.9rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Natural Goodness</h2>
                        <p className='text-[0.95rem] pt-2'>Indulge in the pure joy of food without any guilt. At Kaki Foods, we prioritize natural ingredients, completely free from artificial preservatives and additives. Our commitment lies in celebrating the inherent goodness that nature provides in every bite of Kaki food.</p>
                    </div>
                    <div className='border-l pl-6 relative ml-6 pt-10'>
                        <div className='w-[0.9rem] h-[0.9rem] bg-royalYellow rounded-full absolute left-[-0.47rem] top-[2.9rem]'></div>
                        <h2 className='text-[1.15rem] font-semibold text-[#f2fcd5]'>Global Flavors, Local Touch

                        </h2>
                        <p className='text-[0.95rem] pt-2'>Embark on a culinary journey filled with global flavors, infused with a local touch. At Kaki Foods, we draw inspiration from diverse culinary traditions to craft foods that transcend borders and captivate taste buds worldwide.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhyWePage
