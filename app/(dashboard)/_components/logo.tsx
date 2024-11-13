import Image from "next/image"

export const Logo = () => {
    return(
        <Image
            height={200}
            width={130}
            alt="logo"
            src="/logo.svg"
        />
    )
}