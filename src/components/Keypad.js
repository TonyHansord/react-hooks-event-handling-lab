// Code Keypad Component Here

function Keypad() {
  function handleInput() {
    console.log('Entering password...');
  }

  return (
    <div>
      <p>Enter Passcode</p>
      <input type="password" onChange={handleInput} />
    </div>
  );
}

export default Keypad;
