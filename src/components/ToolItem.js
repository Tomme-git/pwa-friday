export default function AddToolForm({ tool, onEditClick, onDeleteClick, onToggleConfirmed }) {

  return (
    <div className={tool.confirmed ? "confirmed" : ""} key={tool.id} onDoubleClick={() => onToggleConfirmed(tool)}>
      <div><p>{tool.text}</p></div>
      <div>
        <button onClick={() => onEditClick(tool)}>✏️</button>
        <button onClick={() => onDeleteClick(tool.id)}>❌</button>
      </div>
    </div >
  );
};