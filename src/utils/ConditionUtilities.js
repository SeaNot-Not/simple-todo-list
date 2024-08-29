export const sameIDBetweenTodoItemAndEditingItem = (itemEditingID, todoID) =>
  itemEditingID === todoID;

export const doesUserIsEditingAnItem = (isEditing) => isEditing;

export const ifNoTodoItemsDisplay = (todoItems, text) =>
  todoItems.length === 0 && text;
