import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <Meta title={"HMart | Sign Up"}/>
      <BreadCrumb title='Sign Up'/>
      <div className='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>Create an Account</h3>
                    <form action='' className='d-flex flex-column gap-15' >
                        <div>
                            <input type='email' name='email' placeholder='Email' className='form-control' />
                        </div>
                        <div className='mt-1'>
                            <input type='text' name='username' placeholder='Username' className='form-control' />
                        </div>
                        <div className='mt-1'>
                            <input type='password' name='password' placeholder='Password' className='form-control' />
                        </div>
                        <div className='mt-1'>
                            <input type='password' name='password' placeholder='Confirm Password' className='form-control' />
                        </div>
                        <div>
                            <Link to='/login'>Already have an account?</Link>
                            <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                <button className='submit-button border-0'>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
