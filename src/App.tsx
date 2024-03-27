import './App.css';
import { staticTicketsData } from './utils/tools.constants';
import { getSortTicketsItemsInString } from './utils/tools.utils';

function App() {
  const resultData = getSortTicketsItemsInString(staticTicketsData)

  return (
    <div className="App">
      {resultData}
    </div>
  );
}

export default App;
