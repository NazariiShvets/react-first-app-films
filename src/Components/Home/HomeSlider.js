import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap'
import './Home.scss'


const HomeSlider = ({filmsToSlider, ...props}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false)
    const next = () => {
        if (animating) return
        const nextIndex = activeIndex === filmsToSlider.length - 1 ? 0 : activeIndex + 1
        setActiveIndex(nextIndex)
    }
    const previous = () => {
        if (animating) return
        const nextIndex = activeIndex === 0 ? filmsToSlider.length - 1 : activeIndex - 1
        setActiveIndex(nextIndex)
    }
    const goToIndex = newIndex => {
        if (animating) return
        setActiveIndex(newIndex)
    }
    return (
        <section className="container home">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={filmsToSlider} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                {filmsToSlider.map(item => (
                    <CarouselItem className='custom-carousel' key={item.id}
                                  onExiting={() => setAnimating(true)}
                                  onExited={() => setAnimating(false)}
                    >
                        <NavLink to={`/info/${item.id}`}>
                            <img src={item.backdrop_path} className='posters' alt=''/>
                        </NavLink>
                        <CarouselCaption style={{color: 'red'}} captionText={''} captionHeader={item.title}/>
                    </CarouselItem>))}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
            </Carousel>
        </section>
    )
}


export default HomeSlider