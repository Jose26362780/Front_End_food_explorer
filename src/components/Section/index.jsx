import { Container } from "./styles";
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export const Section = ({title, children}) => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <Container>
         <h1>{title}</h1>
         <div className="embla" ref={emblaRef}>
        
      <div className="embla__container" >
      {children}
        <div className="embla__slide"></div>
        <div className="embla__slide"></div>
        <div className="embla__slide"></div>
      </div>
    </div>
    </Container>
  )
}
