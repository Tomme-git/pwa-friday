export default function EditForm({ currentTool, setIsEditing, onEditInputChange, onEditFormSubmit }) {
  return (
    <div className="formwrapper">
      <form className="inputwrapper" onSubmit={onEditFormSubmit}>
        <input className="tool" name="updateTool" type="text" placeholder="Update tool" value={currentTool.text} onChange={onEditInputChange} />
        <div className="actionwrap">
          <button className="update" type="submit" onClick={onEditFormSubmit}>Opdater</button>
          <button className="cancel" onClick={() => setIsEditing(false)}>Annuller</button>
        </div>
      </form>
    </div>
  );
}
