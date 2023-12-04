import one from '../assets/images/1.jpg'
import two from '../assets/images/2.jpg'
import three from '../assets/images/3.jpg'
import four from '../assets/images/4.jpg'
import five from '../assets/images/5.jpg'
import six from '../assets/images/6.jpg'
import seven from '../assets/images/7.jpg'
import eight from '../assets/images/8.jpg'
import nine from '../assets/images/9.jpg'
import ten from '../assets/images/10.jpg'
import eleven from '../assets/images/11.jpg'
import twelve from '../assets/images/12.jpg'


export interface IService {
    image: string,
    name: string;
    path: string;
}

const services: IService[] = [
    {
        image: one,
        name: "Anti Wrinkle Treatment",
        path: "anti-wrinkle-treatment"
    },
    {
        image: two,
        name: "Dermal Fillers",
        path: "dermal-fillers"
    },
    {
        image: three,
        name: "Secret RF",
        path: "secret-rf"
    },
    {
        image: four,
        name: "HarmonyCA",
        path: "harmonyca"
    },
    {
        image: five,
        name: "Profhilo",
        path: "profhilo"
    },
    {
        image: six,
        name: "Facials",
        path: "facials"
    },
    {
        image: seven,
        name: "Sclerotherapy",
        path: "sclerotherapy"
    },
    {
        image: eight,
        name: "LED",
        path: "led"
    },
    {
        image: nine,
        name: "Fat Dissolve",
        path: "fat-dissolve"
    },
    {
        image: ten,
        name: "Growth Factors",
        path: "growth-factors"
    },
    {
        image: eleven,
        name: "Special Package for Time clinic",
        path: "special-package"
    },
    {
        image: twelve,
        name: "Consultation",
        path: "consultation"
    }
];

export default services