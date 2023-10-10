import { Hero } from './components/hero';
import { Services } from './components/services';
import { Us } from './components/us';
import { Reference } from './components/reference';
import { Contact } from './components/contact';
import "./home.css"

export function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Us />
            <Reference />
            <Contact />
        </>

    )
}