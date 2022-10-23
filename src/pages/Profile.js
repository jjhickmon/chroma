import '../style/Profile.css';

function Profile() {
  return (
    <div className="Profile">
        <h1>Profile Page</h1>
        <div>
          <section id='info'>
            <img src='https://cdn.discordapp.com/attachments/1033472864030052482/1033525941709832243/Screen_Shot_2022-10-22_at_4.12.20_PM.png'
            alt='three girls sitting on a stair'></img>
            <section>
              <p>Email</p>
              <p>Date of Birth</p>
              <p>Address</p>
            </section>
          </section>

          <span id='nav'>
            <span>ABOUT</span>
            <span>WORK</span>
            <span>ACTIVITY</span>
          </span>

          <section id='bio'>
            <p>BIO</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipi scing elit. Tortor
              turpis sodales nulla velit. Nunc cum vitae, rhoncus leo id. Volutpat
              Duis tinunt pretium luctus pulvinar pretium.
            </p>
          </section>

          <section id='social'>
            <p>ON THE WEB</p>
            <div>
              <img src='https://i.pinimg.com/originals/5c/a9/8c/5ca98c73b2bb7a02bf8350933c7ca443.png'
              alt='twitter icon'></img>
              <img src='https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-facebook-512.png'
              alt='facebook icon'></img>
              <img src='https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Black-Logo.wine.svg'
              alt='instagram icon'></img>
            </div>
          </section>

          <section id='personal'>
            <p>
              WEBSITE
              <span>www.portfolio.com</span>
            </p>
            <p>
              PHONE
              <span>626-398-6547</span>
            </p>
          </section>
        </div>
    </div>
  );
}

export default Profile;