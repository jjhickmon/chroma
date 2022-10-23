import '../style/Home.css';

function Home() {
  return (
    <div className="page Home">
        {/* <img className="home-bg" src="https://cdn.discordapp.com/attachments/1033472864030052482/1033516407222186015/Screen_Shot_2022-10-22_at_4.03.34_PM.png" alt="main"></img> */}
        <div className="title-card">
            <h1>Welcome to <div className="highlight">Chroma.</div></h1>
            <p><b><i>chroma</i></b> - The colorfulness relative to the brightness of a similarly illuminated area</p>
        </div>
        <div className="get-started-container">
            <button className="get-started">Get Started</button>
        </div>
    </div>
  );
}

export default Home;
