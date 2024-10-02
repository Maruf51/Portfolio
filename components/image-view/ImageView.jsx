import Image from "next/image"

const ImageView = ({ image, closeImageView }) => {
    console.log(image)
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen z-20 bg-[#00000091] dark:bg-[#ffffff4a] backdrop-blur-sm flex justify-center items-center">
            <div
                className="absolute top-0 left-0 w-screen h-screen"
                onClick={() => closeImageView(null)}>

            </div>
            <div className="w-[90%] max-w-[1200px] max-h-[90%] h-auto overflow-auto z-30">
                <Image className="w-full h-auto" src={image} width={1200} height={800} sizes="300px 500px 700px 1000px 1200px" alt="project" />
            </div>
        </div>
    )
}

export default ImageView