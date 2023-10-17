import Image from "next/image";


export default function FeatureSection(props) {
    const {
        title,
        text,
        image,
        isVideo,
        isFlipped,
        isVertical,
        children
    } = props

    return (
        <div className="overflow-hidden bg-white md:p-8 lg:py-16 rounded-[2rem] lg:m-8 m-4">
            <div className={`lg:mx-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:max-w-none 
            ${isVertical ? "lg:grid-cols-1" : "lg:grid-cols-2  lg:items-center"}
            `}>
                <div>
                    <div className="lg:max-w-lgy">
                        <h1 className="xl:text-5xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
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
                            className="rounded-lg"
                            width={"500"}
                            height={"500"}
                            src={image} />}
                </div>
            </div>
        </div>
    )
}
