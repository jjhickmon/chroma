import '../style/Profile.css';

function Profile() {
  return (
    <div className="Profile">
        <h1>Profile Page</h1>
        <div>
          <section id='info'>
            <p>Email</p>
            <p>Date of Birth</p>
            <p>Address</p>
          </section>

          <span id='nav'>
            <span>About</span>
            <span>Work</span>
            <span>Activity</span>
          </span>

          <section id='bio'>
            <p>BIO</p>
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
            <span>WEBSITE</span>
            <span>PHONE</span>
          </section>
        </div>
    </div>
  );
}

export default Profile;