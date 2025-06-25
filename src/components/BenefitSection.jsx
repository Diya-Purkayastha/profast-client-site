import img1 from "../assets/live-tracking.png"
import img2 from "../assets/safe-delivery.png"
import img3 from "../assets/safe-delivery.png"

const benefits = [
    {
        id: 1,
        title: "Faster Delivery Times",
        description:
            "With our optimized logistics network, we guarantee prompt and efficient parcel delivery across the country.",
        image: img1
    },
    {
        id: 2,
        title: "Real-Time Tracking",
        description:
            "Know exactly where your parcel is—from pick-up to doorstep. Our live tracking provides peace of mind at every step.",
        image: img2,
    },
    {
        id: 3,
        title: "Customer Satisfaction",
        description:
            "We prioritize customer experience with dedicated support, smooth delivery, and flexible return options.",
        image: img3,
    },
];

const BenefitSection = () => {
    return (
        <section className="py-12 px-4 md:px-8 bg-base-100 text-base-content mt-28">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

                <div className="flex flex-col gap-6">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="flex flex-col md:flex-row items-center bg-base-200 shadow-md p-6 py-8 rounded-lg"
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                    className="h-24 w-24 object-contain"
                                />
                            </div>

                            {/* Divider */}
                            <div className="hidden md:block h-24 w-px mx-6 relative">
                                <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[length:2px_10px] bg-repeat-y bg-gradient-to-b from-gray-400 to-gray-400 via-transparent"></div>
                            </div>



                            {/* Text */}
                            <div className="text-center md:text-left md:w-2/3">
                                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitSection;
