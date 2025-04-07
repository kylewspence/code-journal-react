import { Route, Routes } from 'react-router-dom';
import { Modify } from './Modify';
import { Header } from './Header';
import { Entries } from './Entries';
import './App.css';
import './css/layout.css';
import './css/reset.css';
import './css/styles.css';
import { useEffect, useState } from 'react';
import { readEntries, addEntry } from './data';
import type { Entry, UnsavedEntry } from './data';

function App() {
  const [entries, setEntries] = useState<Entry[]>(() => {
    const stored = localStorage.getItem('entries');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const loaded = readEntries();
    setEntries(loaded);
  }, []);

  function handleAddEntry(newEntry: UnsavedEntry) {
    const added = addEntry(newEntry); // data.ts adds entryId + saves
    setEntries([added, ...entries]); // update state so React knows!
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={<Entries entries={entries} addEntry={handleAddEntry} />}
          />
          <Route path="modify/:entryId" element={<Modify />} />
          {/* <Route path="*" /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
