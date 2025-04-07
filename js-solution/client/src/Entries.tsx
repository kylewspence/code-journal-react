export function Entries() {
  return (
    <div className="entry-form-wrapper hidden">
      <form id="entry-form">
        <div className="column-full">
          <h1 className="new-entry-header">New Entry</h1>
        </div>
        <div className="row">
          <div className="photo-wrapper column-half">
            <img
              id="entry-image"
              src="images/placeholder-image-square.jpg"
              alt="Placeholder image"
            />
          </div>
          <div className="column-half">
            <label>Title</label>
            <input id="title" type="text" name="title" required />
            <label>Photo URL</label>
            <input id="photo-url" type="url" name="photoUrl" required />
          </div>
          <div className="column-full">
            <label>Notes</label>
            <textarea name="notes" id="notes" required></textarea>
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
