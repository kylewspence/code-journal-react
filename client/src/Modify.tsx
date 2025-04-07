import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { readEntries, Entry } from './data';

export function Modify() {
  const navigate = useNavigate();
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    async function load() {
      const loaded = await readEntries();
      setEntries(loaded);
    }
    load();
  }, []);

  return (
    <div>
      <div data-view="entries" className="entries-wrapper hidden">
        <div className="entries-heading column-full">
          <h1>Entries</h1>
          <button
            type="button"
            className="new-entry-button"
            data-view="entry-form">
            New
          </button>
        </div>
        {entries.length === 0 && (
          <p className="no-entries-text">No entries have been recorded</p>
        )}
        <ul className="entry-list">
          {entries.map((entry) => (
            <li key={entry.entryId}>
              <h2>{entry.title}</h2>
              <img src={entry.photoUrl} alt={entry.title} />
              <p>{entry.notes}</p>
              <button onClick={() => navigate(`/modify/${entry.entryId}`)}>
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
      <dialog>
        <p>
          <strong>Are you sure you want to delete this entry?</strong>
        </p>
        <div className="modal-actions">
          <button className="cancel-modal">CANCEL</button>
          <button className="confirm-modal">CONFIRM</button>
        </div>
      </dialog>
    </div>
  );
}
