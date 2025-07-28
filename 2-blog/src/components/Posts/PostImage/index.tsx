import Image from "next/image";
import Link from "next/link";
import React from "react";

type PostImageProps = {
    imageProps: React.ComponentProps<typeof Image>;
    linkProps: React.ComponentProps<typeof Link>;
};

export function PostImage({ imageProps, linkProps }: PostImageProps) {
    return (
        <Link
            {...linkProps}
            className={`w-full h-full overflow-hidden rounded-xl ${linkProps.className}`}
        >
            <Image
                {...imageProps}
                className={`w-full h-full object-cover object-center group-hover:scale-105 transition duration-700 ${
                    imageProps.className ?? ""
                }`}
                alt={imageProps.alt}
            />
        </Link>
    );
}
