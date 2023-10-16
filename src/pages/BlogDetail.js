import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
// import BlogCard from '../components/BlogCard'
import { HiOutlineArrowLeft } from "react-icons/hi"
import { Link } from 'react-router-dom'

const BlogDetail = () => {
  return (
    <>
      <Meta title={"HMart | Blog Detail"}/>
      <BreadCrumb title='Blog Detail'/>
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='blog-details-card'>
                        <h3 className='title'>
                            A Beautiful Sunday Morning Renaissance
                        </h3>
                        <img className='img-fluid w-100 my-4' src='/images/blog-1.jpg' alt='blog' />
                        <p>In the world of horology, watches are more than mere timekeepers; they are exquisite pieces of craftsmanship. From intricate movements to elegant designs, each watch tells a unique story. Join us on a journey through the fascinating world of watches, where time becomes an art form.</p>
                        <Link to="/blog" className='d-flex align-items-center gap-10'>
                            <HiOutlineArrowLeft className='fs-4' /> Go back to Blogs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetail
