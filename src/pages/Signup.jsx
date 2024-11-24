import signup_image from "../assets/images/signup_image.jpg"
import Template from "../components/Auth/Template"

function Signup() {
  return (
    <Template
      title="Create an Acccount "
      description1="Fill all the required details carefully"
      description2="AICTE"
      image={signup_image}
      formType="signup"
    />
  )
}

export default Signup;