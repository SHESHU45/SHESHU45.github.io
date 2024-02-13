
const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='bg-grey  text-white text-center p-2 border-t border-t-sageGreen font-semibold'>
            &copy; {date} | <span className=' text-royalYellow'>Kaki Foods</span>
        </div>
    )
}

export default Footer
