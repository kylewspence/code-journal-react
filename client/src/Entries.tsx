import { useState } from 'react';

import type { Entry, UnsavedEntry } from './data';

type Props = {
  entries: Entry[];
  addEntry: (entry: UnsavedEntry) => Promise<void>;
};

export function Entries({ addEntry }: Props) {
  const [title, setTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [notes, setNotes] = useState('');

  async function handleSave(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event?.preventDefault();

    const newEntry: UnsavedEntry = {
      title,
      photoUrl,
      notes,
    };

    await addEntry(newEntry);
  }

  return (
    <div className="entry-form-wrapper hidden">
      <form id="entry-form" onSubmit={handleSave}>
        <div className="column-full">
          <h1 className="new-entry-header">New Entry</h1>
        </div>
        <div className="row">
          <div className="photo-wrapper column-half">
            <img id="entry-image" src={photoUrl} alt="Placeholder image" />
          </div>
          <div className="column-half">
            <label>Title</label>
            <input
              id="title"
              type="text"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Photo URL</label>
            <input
              id="photo-url"
              type="url"
              name="photoUrl"
              required
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>
          <div className="column-full">
            <label>Notes</label>
            <textarea
              name="notes"
              id="notes"
              required
              value={notes}
              onChange={(e) => setNotes(e.target.value)}></textarea>
            <div className="form-actions">
              <button className="delete-button hide" type="button">
                Delete Entry
              </button>
              <button type="submit">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
