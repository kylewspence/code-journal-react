import { Route, Routes } from 'react-router-dom';
import { Modify } from './Modify';
import { Header } from './Header';
import { Entries } from './Entries';
import './App.css';
import './css/layout.css';
import './css/reset.css';
import './css/styles.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Entries />} />
          <Route path="modify/:entryId" element={<Modify />} />
          {/* <Route path="*" /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
