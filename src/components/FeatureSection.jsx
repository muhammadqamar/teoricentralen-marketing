import Image from "next/image";


export default function FeatureSection({ title, text, image, isVideo = false, children }) {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-16">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                <div>
                    <div className="lg:max-w-lgy">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
                        <blockquote className="text-lg leading-7 mt-8">
                            <p>{text}</p>
                        </blockquote>
                        {children}
                    </div>
                </div>
                {isVideo ?
                    <video
                        className='rounded'
                        autoPlay
                        loop
                        src={image}
                    />
                    :
                    <Image
                        width={"500"}
                        height={"500"}
                        className="rounded"
                        src={image} />}
            </div>
        </div>
    )
}
