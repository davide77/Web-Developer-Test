import React  from "react";
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

import heroOne from "../assets/images/desktop-hero.jpg"
import heroTwo from "../assets/images/desktop-hero@2x.jpg"
import heroThree from "../assets/images/desktop-hero@3x.jpg"


export default function HeroImage() {
    return (

            <ResponsiveImage>
            <ResponsiveImageSize
                default
                minWidth={0}
                path={heroOne}
            />
            <ResponsiveImageSize
                minWidth={768}
                path={heroTwo}
            />
            <ResponsiveImageSize
                minWidth={1100}
                path={heroThree}
            />
            </ResponsiveImage> 
    );
}