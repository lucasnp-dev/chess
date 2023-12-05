'use client'
import { useTheme } from "next-themes";
import Image from "next/image";
import { Fragment } from "react";

export default function Logo() {

  const options = useTheme();

  return (
    <Fragment>
      {
        options.theme === 'light' ? (
          <Image src={"/black-logo.webp"} alt="Logo" width={100} height={100} />
        ) : (
          <Image src={"/logo.webp"} alt="Logo" width={100} height={100} />
        )
      }
    </Fragment>
    
  )
}
