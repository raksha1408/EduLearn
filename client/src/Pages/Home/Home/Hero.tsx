import banner from '../../../assets/images/hero.png';


const Hero = () => {
    return (
        <div className=" py-20 bg-shade min-h-[600px]">
           <div className="grid grid-col-reverse md:grid-cols-2 container mx-auto">
            <div className="content flex justify-center flex-col">
               <div>
                 <h2 className='text-5xl font-bold text-text leading-tight mx-5 mb-3'>Future Ready with EduLearn</h2>
                <h2 className='text-5xl font-bold text-primary leading-tight mx-5 mb-3'>Enroll. Learn. Excel.</h2>
                <p className='text-lg mx-5'>Get access to all courses under one roof.
                    
                </p>

               </div>
                <div className="button mx-5 ">
                <button className=" px-4 py-2 mr-3 MX-2 my-2 text-white bg-primary border-2 border-primary uppercase font-semibold">
            JOIN NOW
        </button>

                {/* <button className=" px-4 py-2 ml-3 text-primary bg-transparent border-2 border-primary uppercase font-semibold">
            set your goal
        </button> */}
                </div>
                
            </div>
            <div className="image flex items-end">
                <img src={banner} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Hero;