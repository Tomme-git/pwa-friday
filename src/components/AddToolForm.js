export default function AddToolForm({ tool, onFormSubmit, onInputChange }) {
  return (
    <div className="formwrapper">
      <form className="inputwrapper" onSubmit={onFormSubmit}>
        <input className="tool" name="tool" type="text" placeholder="Tilføj værktøj" value={tool} onChange={onInputChange} />
        <button className="add" name="add" type="submit" on>Tilføj</button>
      </form>
    </div>
  );
};