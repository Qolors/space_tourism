import { HeroBox, HeroLeft, HeroRight, Hero1, Hero2, Hero3, Enter } from "./styles/Hero.styled";


const Hero = () => {
    return (
        <HeroBox>
            <HeroLeft>
                <Hero1>SO, YOU WANT TO TRAVEL TO</Hero1>
                <Hero2>SPACE</Hero2>
                <Hero3>Let's face it; if you want to go to space,
                    you might as well genuinely go to outer space
                    and not hover kind of on the edge of it. Well
                    sit back and relax, because we'll give you
                    a truly out of this world experience!
                </Hero3>
            </HeroLeft>
            <HeroRight>
                <Enter>EXPLORE</Enter>
            </HeroRight>
        </HeroBox>
    )
}

export default Hero;