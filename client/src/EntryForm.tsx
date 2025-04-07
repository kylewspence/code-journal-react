import { useEffect, useState } from 'react';

import {
  readEntry,
  updateEntry,
  addEntry,
  removeEntry,
  type Entry,
  type UnsavedEntry,
} from './data';
import { useParams, useNavigate } from 'react-router-dom';

export function EntryForm() {
  const [title, setTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [notes, setNotes] = useState('');
  const { entryId } = useParams();
  const id = Number(entryId);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      const loaded = await readEntry(id);
      if (!loaded) return;
      setTitle(loaded.title);
      setPhotoUrl(loaded.photoUrl);
      setNotes(loaded.notes);
    }
    load();
  }, [id]);

  async function handleSave(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event?.preventDefault();

    if (entryId) {
      const updatedEntry: Entry = {
        title,
        photoUrl,
        notes,
        entryId: id,
      };
      await updateEntry(updatedEntry);
    } else {
      const newEntry: UnsavedEntry = {
        title,
        photoUrl,
        notes,
      };
      await addEntry(newEntry);
    }

    navigate('/modify');
  }

  async function handleDelete(): Promise<void> {
    if (!entryId) return;
    await removeEntry(id);
    navigate('/modify');
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
              {entryId && (
                <button
                  className="delete-button hide"
                  type="button"
                  onClick={handleDelete}>
                  Delete Entry
                </button>
              )}

              <button type="submit">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
