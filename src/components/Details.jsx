import Card from '../UI/Card'
import { details } from '../data'
// import { GrAchievement } from 'react-icons/gr'
// import SectionHead from './SectionHead'

const Details = () => {
  return (
    <section className="details">
            <div className='container details__container'>
                <div className="details__wrapper">
                    {
                        details.map(({ id, icon, title, info }, index) => {
                            return (
                                <Card className="details__detail" key={id}>
                                    {/* <span>{icon}</span> */}
                                    <h1>{title}</h1>
                                    <small>{info}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
  )
}

export default Details
