import './App.css'

function App() {
  function handleClick() {
    alert("Click Happaned")
  }


  // Rading props in event Handlers
  function AlertMessage({ message, children }) {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    )
  }


  //Passing event handlers as a props
  function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    )
  }

  function PlayButton({ movieName }) {
    function handleClick() {
      alert(movieName)
    }

    return (
      <Button onClick={handleClick}>
        {movieName}
      </Button>
    )
  }

  function UploadButton() {
    return (
      <Button onClick={() => {
        alert("Uploading")
      }}>
        upload Button
      </Button>
    )
  }


  //Customise name Event Handler

  function ButtonBoom({ onBoom, children }) {
    return (
      <button onClick={onBoom}>
        {children}
      </button>
    )
  }

  return (
    <>
      <PlayButton movieName="Kuch Kuch" />
      <UploadButton />

      <AlertMessage message="played">
        Player 1
      </AlertMessage>


      <ButtonBoom onBoom={() => {
        alert("Boom Boom Boom")
      }}>
        Boom
      </ButtonBoom>

      <button onClick={handleClick}>
        Click me!!
      </button>

      <button onClick={() => {
        alert("Second Click")
      }}>
        Second Click
      </button>

      <button onClick={function () {
        alert("Third CLick")
      }}>
        Third Click
      </button>
    </>
  )
}

export default App
