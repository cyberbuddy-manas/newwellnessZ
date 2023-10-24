import styles from "../../styles/signup.module.css";
import { useState } from 'react';
import { clubregister} from '../../actions/auth';
import Link from "next/link";
import AdminDashLayout from "../AdminDashLayout";


const ClubUserSignup = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    error: '',
    phonenumber:'',
    city:'',
    loading: false,
    message: '',
    showForm: true
  });



  const { username, email, city, phonenumber, password, error, loading, message, showForm } = values;


  const handleSubmit = e => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { username, phonenumber, email, password, city };



    clubregister(user).then(data => {
      if (data && data.error) {
        setValues({ ...values, error: data.error, loading: false });

      } else {
        setValues({
          ...values,
          username: '',
          email: '',
          password: '',
          city:'',
          phonenumber:'',
          error: '',
          loading: false,
          message: data.message,
        });
      }
    });
  };




  const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };



  const showLoading = () => (loading ? <div className={styles.showLoading}>Loading...</div> : '');
  const showError = () => (error ? <div className={styles.showError}>{error}</div> : '');
  const showMessage = () => (message ? <div className={styles.showMessage}>{message}</div> : '');



  const signupForm = () => {
    return (

      <>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>Create Club User</h1>
          <br/>
          {/* <p className={styles.paragraph}>Please create an account <br /> with us</p> */}


          <form autoComplete="off" onSubmit={handleSubmit}>
            <input className={styles.inputs} value={username} onChange={handleChange('username')} name="username" type="text" placeholder="Username" />
            <input className={styles.inputs} value={phonenumber} onChange={handleChange('phonenumber')} name="phonenumber" type="number" placeholder="Phonenumber" />
            <input className={styles.inputs} value={email} onChange={handleChange('email')} name="email" type="text" placeholder="Email" />
            <input className={styles.inputs} value={password} onChange={handleChange('password')} name="password" type="password" placeholder="Password" />
            <input className={styles.inputs} value={city} onChange={handleChange('city')} name="city" type="text" placeholder="City" />

            <button className={styles.button}>Create</button>

            {/* <div className={styles.notmember}>
              Already a member ? &nbsp; <Link href="/admin"> Create</Link>
            </div> */}
          </form>
        </div>
      </>

    )
  }


  return (

    <AdminDashLayout>
    {/* <div className={styles.backImg}> */}
      <div className={styles.topmsgs}>
      {showError()}
      {showLoading()}
      {showMessage()}
      </div>
      {showForm && signupForm()}
      <br /><br />

    {/* </div> */}
    </AdminDashLayout>
  )
}

export default ClubUserSignup
