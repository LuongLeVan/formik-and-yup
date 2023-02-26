import { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = localStorage.getItem(email)
    const data = JSON.parse(user)
    if (!email || !password) {
      alert('Vui lòng nhập đầy đủ thông tin!')
  } else {
      if (!user) {
          alert('Không tìm thấy email!')
      } else {
          if (data.email === email && data.password === password) {
              alert('Đăng nhập thành công!')
          } else {
              alert('Sai mật khẩu')
          }



      }

  }

  }


  return (
    <section className='section'>
      <form className="infoform" onSubmit={handleSubmit}>
        <header className='header'>Login</header>
        <label> Email address </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label> Password </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className='container__btn'>
          <Link to={"/"}>
            <button>Register</button>
          </Link>
          <button type="submit"> Login </button>
        </div>
      </form>
    </section>
  );
}
export default Login;
