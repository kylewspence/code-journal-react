export function Modify() {
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
        <p className="no-entries-text">No entries have been recorded</p>
        <ul className="entry-list"></ul>
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
