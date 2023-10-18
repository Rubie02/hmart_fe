import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'

const WishList = () => {
    return (
        <>
            <Meta title={"HMart | WishList"} />
            <BreadCrumb title='WishList' />
            <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                            <div className='wishlist-card-image'>
                                <img src='/images/watch.jpg' alt='watch' className='img-fluid w-100' />
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className='price mb-3'>$100.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                            <div className='wishlist-card-image'>
                                <img src='/images/watch.jpg' alt='watch' className='img-fluid w-100' />
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className='price mb-3'>$100.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                            <div className='wishlist-card-image'>
                                <img src='/images/watch.jpg' alt='watch' className='img-fluid w-100' />
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className='price mb-3'>$100.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='wishlist-card position-relative'>
                            <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                            <div className='wishlist-card-image'>
                                <img src='/images/watch.jpg' alt='watch' className='img-fluid w-100' />
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className='price mb-3'>$100.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default WishList
