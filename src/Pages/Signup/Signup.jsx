import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import './signup.css'

const Signup = () => {


  const formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      password: '',
      confirmedPassword: '',
      phone: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required").min(4, "Must be 4 characters or more"),
      email: Yup.string().required("Required").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Email not valid"),
      password: Yup.string().required("Required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
      "Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      ),
      confirmedPassword: Yup.string().required("Required").oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string().required("Required").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Must be a phone number valid")
    }),
    onSubmit: (values) => {
      const user = localStorage.getItem(values.email)
      if(user) {
        const data = JSON.parse(user)
        const emailUserOld = data.email
        if(emailUserOld === values.email){
          alert('Email had used, please register by another email!')
          
        }

      }else{

        alert('Register successfully!')
        const json = JSON.stringify(values)
        localStorage.setItem(values.email, json)
        console.log('values',values);
      }
    }
  })




  return (
    <section className='section'>
      <form className="infoform" onSubmit={formik.handleSubmit}> 
        <header className='header'>Sign Up</header>
        <label> Your name </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          onBlur={formik.handleBlur}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name ? (
          <span className='error__msg'>{formik.errors.name}</span>
        ) : null}
        <label> Email address </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />
        {formik.errors.email && formik.touched.email ? (
          <span className='error__msg'>{formik.errors.email}</span>
        ) : null}
        <label> Password </label>
        <input
          type="text"
          id="password"
          name="password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        {formik.errors.password && formik.touched.password ? (
          <span className='error__msg'>{formik.errors.password}</span>
        ) : null}

        <label> Confirm Password </label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Confirm your password"
        />
        {formik.errors.confirmedPassword && formik.touched.confirmedPassword ? (
          <span className='error__msg'>{formik.errors.confirmedPassword}</span>
        ) : null}
        <label> Phone number </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Enter your phone numbers"
        />
        {formik.errors.phone && formik.touched.phone ? (
          <span className='error__msg'>{formik.errors.phone}</span>
        ) : null}
        <div className='container__btn'>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
          <button type="submit"> Register </button>
        </div>
      </form>
    </section>
  );
}
export default Signup;
