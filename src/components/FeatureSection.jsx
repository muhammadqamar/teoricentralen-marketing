import Image from "next/image";


export default function FeatureSection({ title, text, image, isVideo = false, isFlipped = false, children }) {
    return (
        <div className="overflow-hidden bg-white py-16 sm:py-16 my-8 rounded-[2rem]">
            <div className={`mx-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:max-w-none lg:grid-cols-2 lg:items-center`}>
                <div>
                    <div className="lg:max-w-lgy">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl whitespace-break-spaces">{title}</h1>
                        <blockquote className="text-lg leading-7 mt-8">
                            <p>{text}</p>
                        </blockquote>
                        {children}
                    </div>
                </div>
                <div className={`${isFlipped ? "lg:-order-1" : ""}`}>
                    {isVideo ?
                        <video
                            className="rounded-lg"
                            autoPlay
                            loop
                            src={image}
                        />
                        :
                        <Image
                            width={"500"}
                            height={"500"}
                            className="rounded-lg"
                            src={image} />}
                </div>
            </div>
        </div>
    )
}
