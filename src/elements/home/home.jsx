import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Us } from './components/us/us';
import { Reference } from './components/reference/reference';

export function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Us />
            <Reference />
        </>

    )
}