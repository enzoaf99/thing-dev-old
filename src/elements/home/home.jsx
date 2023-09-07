import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Us } from './components/us/us';
import { Reference } from './components/reference/reference';
import { Contact } from './components/contact/contact';

export function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Us />
            <Reference />
            <Contact/>
        </>

    )
}