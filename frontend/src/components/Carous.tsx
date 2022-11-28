import Carousel from "react-bootstrap/Carousel";
import cars from '../images/cars.jpg';
import brushes from '../images/brushes.jpg'


function Carous() {
    return(
        <div>
            <Carousel className='carous'>
            <Carousel.Item>
            <img className='d-block imm cover' src={cars} alt='cars'/>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img className='d-block imm' src={brushes} alt='brushes'/>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default Carous;