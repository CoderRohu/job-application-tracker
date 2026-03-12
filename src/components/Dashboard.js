function Dashboard() {
  const cardStyle={
    background:"white",
    padding:"20px",
    borderRadius:"10px",
    width:"200px",
    textAlign:"center",
    boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
  }

  return (
    <div>

      <h2>Dashboard</h2>

      <div style={{display:"flex",gap:"20px"}}>

        <div style={cardStyle}>
          <h3>12</h3>
          <p>Applications</p>
        </div>

        <div style={cardStyle}>
          <h3>3</h3>
          <p>Interviews</p>
        </div>

        <div style={cardStyle}>
          <h3>1</h3>
          <p>Offers</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
