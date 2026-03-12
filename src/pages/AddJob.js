function AddJob() {

  return (
    <div style={{marginTop:"30px"}}>

      <h2>Add Job</h2>

      <input placeholder="Company"
      style={{padding:"10px",margin:"5px"}}/>

      <input placeholder="Role"
      style={{padding:"10px",margin:"5px"}}/>

      <button style={{
        padding:"10px 20px",
        background:"#2563eb",
        color:"white",
        border:"none",
        borderRadius:"5px"
      }}>
        Add
      </button>

    </div>
  );
}

export default AddJob;
