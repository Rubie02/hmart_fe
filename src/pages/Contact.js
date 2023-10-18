import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'
import { AiTwotoneHome, AiTwotonePhone, AiTwotoneMail, AiTwotoneInfoCircle } from "react-icons/ai"

const Contact = () => {
  return (
    <>
      <Meta title={"HMart | Contact Us"}/>
      <BreadCrumb title='Contact Us'/>
      <Container class1='contact-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.485398611091!2d106.7693381746598!3d10.8506376578213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1697353036764!5m2!1svi!2s" 
                width="600" 
                height="450" 
                className='border-0 w-100'
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">

              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type='email' className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Phone Number' />
                    </div>
                    <div>
                      <textarea name='' id='' className='w-100 form-control' cols={30} rows={5} placeholder='Comment' ></textarea>
                    </div>
                    <div>
                      <button className='submit-button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in touch with Us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                       <AiTwotoneHome className='fs-5' />
                       <address className='mb-0'>Thu Duc, Ho Chi Minh City</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiTwotonePhone className='fs-5'/>
                        <a href='tel:+8499.999.9999'>+8499-999-9999</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiTwotoneMail className='fs-5'/>
                        <a href="mailto:hmart@gmail.com">hmart@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiTwotoneInfoCircle className='fs-5'/>
                        <p className='mb-0'>24/7</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default Contact
