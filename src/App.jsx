
import './App.css'

function App() {

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  }


  return (
    <>
      <h1>React form</h1>
      <form onSubmit={handlerSubmit} >
        <input type="text" name='name'  placeholder='Enter your name' />
        <br />
        <input type="email" name='email'  placeholder='Enter your email' />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default App
