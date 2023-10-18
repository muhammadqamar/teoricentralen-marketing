import Image from "next/image";


export default function FeatureSection(props) {
    const {
        title,
        text,
        images,
        isVideo,
        isFlipped,
        isVertical,
        children
    } = props

    console.log(images.length)
    return (
        <div className="overflow-hidden bg-white p-4 md:p-8  rounded-[2rem] lg:m-8 m-4">
            <div className={`grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:max-w-none 
            ${isVertical || images.length == 0 ? "lg:grid-cols-1" : "lg:grid-cols-2  lg:items-center"}
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
                {images ? <div className={`${isFlipped ? "lg:-order-1" : ""}`}>
                    {images.map(e => (isVideo ?
                        <video
                            className="rounded-lg"
                            autoPlay
                            loop
                            src={e}
                        />
                        :
                        <Image
                            style={{ width: "100%" }}
                            className="rounded-lg"
                            width={0}
                            height={0}
                            src={e} />)
                    )}
                </div> : null}
            </div>
        </div>
    )
}
