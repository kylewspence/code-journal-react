import { Route, Routes } from 'react-router-dom';
import { EntryList } from './EntryList';
import { Header } from './Header';
import { EntryForm } from './EntryForm';
import './App.css';
import './css/layout.css';
import './css/reset.css';
import './css/styles.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<EntryForm />} />
          <Route path="modify/:entryId" element={<EntryForm />} />
          <Route path="modify" element={<EntryList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
