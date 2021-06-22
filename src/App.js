
import Container from "@material-ui/core/Container";

import Header from './components/header';
import Footer from "./components/footer";
import Vehicles from "./components/vehicles";
import { useContext } from "react";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Vehicles />
        <Footer />
      </Container>
    </div>

  );
}

export default App;
