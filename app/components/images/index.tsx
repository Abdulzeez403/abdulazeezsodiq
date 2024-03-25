"use client"
import Image from "next/image"



interface ImageProps {
    src: any,
    alt: string,
    width?: number,
    height?: number,
    className?: any,
}


export const ImageComponent = ({ src, alt, width = 200, height = 200, className }: ImageProps) => (
    <div className="w-[450px]">
        <Image src={src} alt={alt}
            className={`rounded-md object-cover ${className}`} width={width} height={height} />
    </div>
)


