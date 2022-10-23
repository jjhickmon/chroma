import '../style/Home.css';

function Home() {
  return (
    <div className="Home">

        <h1>Home Page</h1>
        <html>
        <head>
        <style>

          border: 1px solid black;
          margin-top: 100px;
          margin-bottom: 100px;
          margin-right: 150px;
          margin-left: 80px;
          background-color: lightblue;

        </style>
        </head>
        <body>

        <h2>Using individual margin properties</h2>

        <div>This div element has a top margin of 100px, a right margin of 150px, a bottom margin of 100px, and a left margin of 80px.</div>

        </body>
        </html>
        <div class="container">
        <img src="https://cdn.discordapp.com/attachments/1033472864030052482/1033516407222186015/Screen_Shot_2022-10-22_at_4.03.34_PM.png" alt="main"></img>
        <button class="btn">Get Started</button>
        style="background-color:#fceee9"
        </div>
    </div>
  );
}

export default Home;
