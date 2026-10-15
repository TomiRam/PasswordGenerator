
import { generatePassword } from "./utils/passwordGenerator";

function App() {


  const createPassword = () => {
    const pwd = generatePassword({
      length: 20,
      lowercase: true,
      uppercase: true,
      numbers: true,
      symbols: true
    });

    alert("Generated password: " + pwd);
  };

  return (
    <div className="App">
      <header className="App-header">
      

        <button style={{ width: '200px', height: '50px' }} onClick={createPassword}>
          Generate Password
        </button>

      </header>
    </div>
  );
}

export default App;
