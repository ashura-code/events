
import Button from "./Button.jsx"

export default function Navbar() {

  return (
    <div className="Navbar">
     <div className="first">
        <h1>Events</h1>
        <ul>Music</ul>
        <ul>Concerts</ul>
        <ul>Movies</ul>
        <ul>Others</ul>
     </div>
     <div className="second">
        <Button name="Login"/>
        <Button name="Signup"/>
     </div>
    </div>
  )
}

