import logo from "/assets/LOGO HE VINCI.png"


const Header = ({ course }) => {
    return (
      <>
        <h1>{course}</h1>
        <img src={logo}/>

      </>
    )
  }

  export default Header