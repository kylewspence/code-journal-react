# Code Journal React Requirements

## Data Model

An Entry has these required fields:

- `entryId`: The numerical ID of the entry
- `title`: The entry's title
- `notes`: Notes for the entry
- `photoUrl`: The URL of a photo for the entry

The data model has these fields:

- `entries`: the array of entries
- `nextEntryId`: the numerical ID to assign to the next created entry

The data must be stored to local storage (as a JSON string) before the application is unloaded, and re-read when the application starts.

## Nav Bar

Displays "Code Journal" with an "Entries" link that toggles to the list of entries.

## View Entries

[Wireframe](https://lfz-static.s3-us-west-1.amazonaws.com/graphics/wireframes/code-journal/figma/user-can-view-their-entries-mobile.png)

- Each entry’s content is in a single `li` element within a `ul` element.
- A pencil icon next to each entry displays the `Edit Entry` form for that entry.
- If there are no entries, display a `No entries have been recorded.` message.
- A button with the text `NEW` displays the `New Entry` form.

## Create an Entry

[Wireframe](https://lfz-static.s3-us-west-1.amazonaws.com/graphics/wireframes/code-journal/figma/user-can-create-an-entry-mobile.png)

- The form has a title of `New Entry`.
- When the form is submitted:
  - A new `entryId` is assigned from the data model's `nextEntryId`, and `nextEntryId` is incremented.
  - The new entry is added to the beginning of the data model's `entries` array.
  - The list of entries is displayed, with the new entry at the top.

## Edit an Entry

[Wireframe](https://lfz-static.s3-us-west-1.amazonaws.com/graphics/wireframes/code-journal/figma/user-can-edit-an-entry-mobile.png)

- The form has a title of `Edit Entry`.
- The `Edit Entry` form is prepopulated with the clicked entry's values.
- When the form is submitted:
  - The original object in the data model's `entries` array is replaced with the updated entry.
  - The list of entries is displayed, with the new values.

## Delete an Entry

[Wireframe](https://lfz-static.s3-us-west-1.amazonaws.com/graphics/wireframes/code-journal/figma/user-can-delete-an-entry-mobile.png)

- A button on the `Edit Entry` form with the text **Delete Entry** initiates deletion.
- When the `Delete Entry` button is clicked:
  - A confirmation modal is displayed with **Confirm** and **Cancel** buttons.
  - When the user clicks `Cancel` the confirmation is dismissed.
  - When the user clicks `Confirm`:
    - The corresponding entry object in the data model's `entries` is removed.
    - The confirmation is dismissed.
    - The list of entries is displayed, with the deleted entry gone.

# Tips!

- In your React app, either `main.tsx` or `App.jsx` would be a good place to import all the `.css` files.
- Copy HTML from the supplied `index.html` into your `EntryList` and `EntryForm` components.
- Copy JavaScript logic from the supplied `main.js` into your components. However, do not copy any of the DOM manipulation code! In React you do _not_ directly query or manipulate the DOM. Use JSX and conditional rendering to display the components.
- `data.js` in your React app would be a good place to have exported functions for getting, adding, updating, and removing entries from the data model.
- In React, you do _not_ keep track of which view is displayed or which entry is being edited in your global data. Instead, this information will be passed to event handler props and components. (In other words, delete `view` and `editing` from `data`.)
- State for what is being edited and which component to display would be best kept in the `App` component and passed to the `EntryForm` component.
- The `App` component would be a good place to use conditional rendering to determine whether to render the `EntryList` or the `EntryForm`.
- You will probably want to create event handler props in the `EntryList` and `EntryForm` components and pass them event handlers in the `App` component.
- You won't need the `id` attribute on any HTML elements, but you will need to add `onClick` event handlers.
- The `button` element will be easier to use for navigation than the `a` attribute. Remember to add an `onClick` handler and to set the attribute `type="button"` in places where you do not want it to submit the form.
- You should use React conditional rendering instead of the HTML `hidden` attribute.
- Use conditional rendering to display the Confirmation Dialog. If `Cancel` is clicked, update state so that the dialog is not rendered; if `Confirm` is clicked, execute the "Remove" functionality.
- Check the console regularly. It will give you good suggestions! (For example, don't forget to change all the `class` attributes to `className`.)
