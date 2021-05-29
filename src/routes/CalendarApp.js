import { useState, useEffect } from "react"
import Calendar from "react-calendar"
import emailjs, { init } from 'emailjs-com'
import { useForm } from "react-hook-form";
import "react-calendar/dist/Calendar.css"
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

//* styles import
import styles from '../styles/CalendarApp.module.css'


//* initialize connection with emailjs - key from emailjs api config
init("user_ZGbPQE6XUFDFOCuwn9nXs");


//* this is needed to activity indicatior to work
const override = css`
  display: block;
  margin: 0 auto;
  border-color: '#fff';
`;
const JOANNA_MAIL = 'joannafajto95@gmail.com'



function CalendarApp() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [date, setDate] = useState(new Date())
  const [userDate, setUserDate] = useState("")
  const [loading, setLoading] = useState(false);
  const [isEmailSended, setIsEmailSended] = useState(false)
  console.log(date.getMonth(), date.getDay())

  useEffect(() => {
    setUserDate(`${date.getDate()}.${date.getMonth() + 1}`)
  }, [date])

  const disabledDates = [
    new Date(2021, 2, 10),
    new Date(2021, 2, 9),
  ]

  const onSubmit = (data, e) => {
    e.preventDefault()
    setLoading(true)
    console.log(data)

    //* Email to person who booked 
    emailjs.send("nailsByJoanna", "mailToCustomer", {
      to_name: data?.email?.trim(),
      customer_name: data?.fullName?.trim(),
      message: `Thank you for the booking! \n We recived your booking on ${date?.toLocaleString()} We will call you on the number that you left as soon as possible`,
    }).then((result) => {
      console.log(result.text);
      setLoading(false)
      setIsEmailSended(true)
    }, (error) => {
      console.log(error.text);
      setLoading(false)
    });
    e.target.reset();

    //* Email to team
    emailjs.send("nailsByJoanna", "mailToTeam", {
      to_name: JOANNA_MAIL,
      message: `Someone now booked nails at your site!`,
      booking_date: date?.toLocaleString(),
      customer_name: data?.fullName?.trim(),
      customer_email: data?.email,
      customer_phone: data?.phone,
    }).then((result) => {
      console.log(result.text);
      setLoading(false)
    }, (error) => {
      console.log(error.text);
      setLoading(false)
    });


  }

  return (
    <div className={styles.calendarApp}>
      <calendar>
        <Calendar
          onChange={setDate}
          value={date}
          minDate={new Date()}
          tileDisabled={({ date, view }) =>
            view === "month" && // Block day tiles only
            disabledDates.some(
              (disabledDate) =>
                date.getFullYear() === disabledDate.getFullYear() &&
                date.getMonth() === disabledDate.getMonth() &&
                date.getDate() === disabledDate.getDate()
            )
          }
        />
      </calendar>

      <section>
        <h2>Wybierz date w kalendarzu</h2>
        <p>Wybrana data: {userDate}</p>
      </section>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formEmailBooking}>

        <label>Email</label>
        <input {...register("email", { required: true })} placeholder="joanna@gmail.com" />
        {errors.email && <span>This field is required</span>}

        <label>Full Name</label>
        <input {...register("fullName", { required: true })} placeholder="Anna Nowak" />
        {errors.fullName && <span>This field is required</span>}


        <label>Contact Phone</label>
        <input {...register("phone", { required: true })} placeholder="696 167 547" />
        {errors.phone && <span>This field is required</span>}

        {/* errors will return when field validation fails  */}
        {loading ? <ClipLoader color={'#fff'} loading={loading} css={override} size={50} /> : null}
        {isEmailSended ? <p>Email sended succesfully 😊</p> : null}

        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default CalendarApp
