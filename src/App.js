
import "./index.css"

import Btn from "./typescript/btnHeader.tsx"
import BtnSection from "./typescript/btnHeader.tsx"


function App() {
  return (
    <div className="App">


      <header className="header">

      <h1>Header</h1>

    <Btn/>

      </header>


    <section className="section">
      <h1>Section</h1>
          < BtnSection/>
    </section>


<footer className="footer">
  <h1>Footer</h1>
</footer>

    </div>
  );
}

export default App;
