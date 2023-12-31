import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
      <div className='blog-card'>
        <div className='card-image'>
          <img src='/images/blog-1.jpg' className='img-fluid w-100' alt='blog'/>
        </div>
        <div className='blog-content'>
          <p className='date'>10 Dec, 2023</p>
          <h5 className='title'>A beautiful sunday morning renaissance</h5>
          <p className='desc'>It's a beautiful day with sunlight and breeze. I'm so excited with that new tech. It's so good.</p>
          <Link to='/blog/:id' className='submit-button'>Read More</Link>
        </div>
      </div>
  )
}

export default BlogCard