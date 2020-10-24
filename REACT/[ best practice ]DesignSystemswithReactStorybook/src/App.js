import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

import { GlobalStyle } from "./utils";

function App() {
  return (
    <div className='App'>
      <div>
        <PrimaryButton disabled>Hello world</PrimaryButton>
        <SecondaryButton disabled>Hello world</SecondaryButton>
        <TertiaryButton disabled>Hello world</TertiaryButton>
        <GlobalStyle />
      </div>
    </div>
  );
}

export default App;
