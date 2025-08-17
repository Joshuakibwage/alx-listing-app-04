import Image from 'next/image';
import Logo from '@/public/icons/Vector(2).svg';



const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-black">
            <div className="h-8 w-full bg-[#34967c]"></div>
            <section className="w-[90%] mx-auto grid lg:grid-cols-2 gap-12 py-12 px-8">
                <div>
                    <div className="">
                        <Image 
                            src={Logo}
                            alt="logo"
                            className=""
                        />
                        <div className="mt-6">
                            <p className="text-gray-400 text-sm">
                                ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between flex-wrap">
                    <div className="min-w-[150px]">
                        <h2 className="text-gray-300">Explore</h2>

                        <ul className="text-gray-400 text-sm mt-6">
                            <li>Apartments in Dubai</li>
                            <li>Hotels in NewYork</li>
                            <li>Villa in Spain</li>
                            <li>Mansion in Indonesia</li>
                        </ul>
                    </div>

                    <div className="min-w-[150px]">
                        <h2 className="text-gray-200">Company</h2>

                        <ul className="text-gray-400 text-sm mt-6">
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Career</li>
                            <li>Customers</li>
                            <li>Brand</li>
                        </ul>
                    </div>

                    <div className="min-w-[150px]">
                        <h2 className="text-gray-300">Help</h2>

                        <ul className="text-gray-400 text-sm mt-6">
                            <li>Support</li>
                            <li>Cancel Booking</li>
                            <li>Refunds Process</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="border-t border-neutral-900 py-8 w-[90%] mx-auto px-8 flex flex-col  md:flex-row md:justify-between items-center">
                <div >
                    <p className="text-gray-400 text-sm">
                        Some hotel requires you to cancel more than 24 hours before check-in. Details <span className="text-[#34967c]">here</span>
                    </p>
                </div>
                <div className="mt-6 md:mt-0">
                    <ul className="text-gray-400 flex text-sm gap-4">
                        <li>Terms of Service</li>
                        <li>Policy Service</li>
                        <li>Cookies Policy</li>
                        <li>Partners</li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}


export default Footer;