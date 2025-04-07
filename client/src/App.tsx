import { Route, Routes } from 'react-router-dom';
import { Modify } from './Modify';
import { Header } from './Header';
import { Entries } from './Entries';
import './App.css';
import './css/layout.css';
import './css/reset.css';
import './css/styles.css';
import { useEffect, useState } from 'react';
import { readEntries, addEntry, removeEntry, updateEntry } from './data';
import type { Entry, UnsavedEntry } from './data';

function App() {
  const [entries, setEntries] = useState<Entry[]>(() => {
    const stored = localStorage.getItem('entries');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    async function load() {
      const loaded = await readEntries();
      setEntries(loaded);
    }
    load();
  }, []);

  async function handleAddEntry(newEntry: UnsavedEntry) {
    const added = await addEntry(newEntry);
    setEntries((prev) => [added, ...prev]);
  }

  async function handleUpdateEntry(updatedEntry: Entry) {
    const updated = await updateEntry(updatedEntry);
    setEntries((prev) =>
      prev.map((e) => (e.entryId === updated.entryId ? updated : e))
    );
  }

  async function handleRemoveEntry(entryId: number) {
    await removeEntry(entryId);
    setEntries((prev) => prev.filter((e) => e.entryId !== entryId));
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={<Entries entries={entries} addEntry={handleAddEntry} />}
          />
          <Route
            path="modify/:entryId"
            element={
              <Modify
                entries={entries}
                onUpdate={handleUpdateEntry}
                onDelete={handleRemoveEntry}
              />
            }
          />
          {/* <Route path="*" /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
