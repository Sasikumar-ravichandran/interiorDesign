import SectionHead from './SectionHead'
import { ImQuotesLeft } from 'react-icons/im'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import Card from '../UI/Card'
import { testimonials } from '../data'
import { useState } from 'react'

const Testimonial = () => {


    const [index, setIndex] = useState(0)
    const { name, quote, job, avatar } = testimonials[index]


    const nextQuotes = () => {
        setIndex(index + 1)
        if (index >= testimonials.length - 1) {
            setIndex(0)
        }
    }
    const prevQuotes = () => {

        setIndex(index - 1)
        if (index <= 0) {
            setIndex(testimonials.length - 1)
        }

    }

    return (
        <section className="testimonials">
            <div className='container testimonials__container'>
                <SectionHead icon={<ImQuotesLeft />} title="Testimonial" className="testimonial__head" />
                <Card className="testimonial">
                    <div className='testimonial__avatar'>
                        <img src={avatar}>

                        </img>
                    </div>
                    <p className='testimonial__quote'>
                        {`${quote}`}
                    </p>
                    <h5>
                        {name}
                    </h5>
                    <small>{job}</small>
                </Card>
                <div className='testimonial__btn-container'>
                    <button className='testimonial__btn' onClick={prevQuotes}>
                        <IoIosArrowDropleftCircle />
                    </button>
                    <button className='testimonial__btn' onClick={nextQuotes}>
                        <IoIosArrowDroprightCircle />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
