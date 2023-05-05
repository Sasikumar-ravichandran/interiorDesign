import SectionHead from './SectionHead'
import { values } from '../data'
import Card from '../UI/Card'
import valueImage from '../images/valueImage.jpeg'


const Values = () => {
    return (
        <section className='values'>
            <div className='container values__container'>
                <div className='values__left'>
                    <div className='values__image'>
                        <img src={valueImage}></img>
                    </div>

                </div>
                <div className='values__right'>
                    <div className='value__wrapper'>
                        {
                            values.map(({ id, icon, title, desc }) => {
                                return (
                                    <Card className="values__value">
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values
