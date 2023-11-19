import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import CustomInput from '../components/CustomInput'
import { useDispatch } from 'react-redux'
import { register } from '../features/users/userSlice'
import { useNavigate } from 'react-router-dom'

const REQUIRED_MESSAGE = "Required!";
const BLANK = "";
const EMAIL_SIGNUP_MESSAGE = "Email should be valid!";



const signUpSchema = yup.object({
    firstName: yup.string().required(REQUIRED_MESSAGE),
    lastName: yup.string().required(REQUIRED_MESSAGE),
    email: yup.string().nullable().email(EMAIL_SIGNUP_MESSAGE).required(REQUIRED_MESSAGE),
    phoneNumber: yup.string().required(REQUIRED_MESSAGE),
    password: yup.string().required(REQUIRED_MESSAGE),
    confirmPassword: yup.string().required(REQUIRED_MESSAGE)
})

const SignUp = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            dispatch(register(values));
            navigate('/login');
        }
    })

    return (
        <>
            <Meta title={"HMart | Sign Up"} />
            <BreadCrumb title='Sign Up' />
            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Create an Account</h3>
                            <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15' >
                                <CustomInput 
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange("firstName")}
                                    onBlur={formik.handleBlur("firstName")}
                                />
                                <div className='error'>
                                    {formik.touched.firstName && formik.errors.firstName}
                                </div>
                                <CustomInput 
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange("lastName")}
                                    onBlur={formik.handleBlur("lastName")}
                                />
                                <div className='error'>
                                    {formik.touched.lastName && formik.errors.lastName}
                                </div>
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
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange("phoneNumber")}
                                    onBlur={formik.handleBlur("phoneNumber")}
                                />
                                <div className='error'>
                                    {formik.touched.phoneNumber && formik.errors.phoneNumber}
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
                                <CustomInput 
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange("confirmPassword")}
                                    onBlur={formik.handleBlur("confirmPassword")}
                                />
                                <div className='error'>
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword}
                                </div>
                                {
                                    (formik.values.password !== formik.values.confirmPassword 
                                        && formik.values.confirmPassword !== BLANK
                                        && formik.values.password !== BLANK ) && 
                                    (
                                        <div className='error'>
                                            Password is not matched!
                                        </div>
                                    )
                                }
                                <div>
                                    <Link to='/login'>Already have an account?</Link>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button type='submit' className='submit-button border-0'>
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SignUp
