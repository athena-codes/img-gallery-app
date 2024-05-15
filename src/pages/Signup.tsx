import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/config'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')


  // Handle Submit for signup form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && error}
        <div className='hero min-h-screen bg-base-200'>
          <div className='hero-content flex-col '>
            <div className='text-center '>
              <h1 className='text-5xl font-bold'>Image Gallery Pro</h1>
              <p className='py-6'>
                Sign up today and start sharing your photos with the world!
              </p>
            </div>
            <div className='card sm:w-[30rem] 9shadow-2xl bg-base-100'>
              <div className='card-body'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='email'
                    className='input input-bordered'
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password'
                    className='input input-bordered'
                    required
                  />
                </div>
                <div className='form-control mt-6'>
                  <button className='btn btn-primary'>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Signup
