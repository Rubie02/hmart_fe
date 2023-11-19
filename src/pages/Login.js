import { Link, useNavigate } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { login } from '../features/users/userSlice'

const EMAIL_SIGNUP_MESSAGE = "Email should be valid!";
const REQUIRED_MESSAGE = "Required!";

const loginSchema = yup.object({
    email: yup.string().nullable().email(EMAIL_SIGNUP_MESSAGE).required(REQUIRED_MESSAGE),
    password: yup.string().required(REQUIRED_MESSAGE),
})

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(login(values));
            navigate('/');
        }
    })
  return (
    <div>
      <Meta title={"HMart | Login"}/>
      <BreadCrumb title='Login'/>
      <Container class1='login-wrapper home-wrapper-2 py-5'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>Login</h3>
                    <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15' >
                        <CustomInput 
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur("email")}
                        />
                        <div className='error'>
                            {formik.touched.email && formik.errors.email}
                        </div>
                        <CustomInput 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange("password")}
                            onBlur={formik.handleBlur("password")}
                        />
                        <div className='error'>
                            {formik.touched.password && formik.errors.password}
                        </div>
                        <div>
                            <Link to='/forgot-password'>Forgot Password?</Link>
                            <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                <button className='submit-button border-0' type='submit'>
                                    Login
                                </button>
                                <Link to='/signup' className='submit-button signup'>Sign Up</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Login
