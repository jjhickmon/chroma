import '../style/Questions.css';

function Questions() {
  return (
    <div className="Questions">
        <h1 className="title">Questions Page</h1>
        {/* Write your html code here!! */
       <body>
          <headers>
          <div> Survey Questions</div>


          <ul>
            <li> <a href="#question1"> In the coming year, what opportunities would you like to have open to you?</a></li>
            <li> <a href="#question2"> What is making you feel down?</a></li>
            <li> <a href="#question3"> How can we make this place a better place?</a></li>
          </ul>
          <form onsubmit="alert('answer given')">
            <input type="Type Answer for Question 1" placeholder="Answer for Question 1" />
            <button> Submit </button>
            <br></br>
            <input type="Type Answer for Question 1" placeholder="Answer for Question 2" />
            <button> Submit </button>
            <br></br>
            <input type="Type Answer for Question 1" placeholder="Answer for Question 3" />
            <button> Submit </button>

          </form>


          </headers>
        <main>
          <h1> Mental Health Questionare </h1>

          <img src="https://www.avenuecalgary.com/wp-content/uploads/2020/04/Text4Hopegrid-scaled-e1588016333348.jpg" alt="questions background" width="600" height="600" 
          >

          </img>
          <h2 id="Question 2 " questions2> </h2>
          <img src="https://i.pinimg.com/736x/7b/7b/c6/7b7bc658d3fce83780679e84dc62f2fa.jpg" alt="questions background" width="100" height="100"

          ></img>
          <img src="https://i.pinimg.com/736x/7b/7b/c6/7b7bc658d3fce83780679e84dc62f2fa.jpg" alt="questions background" width="100" height="100"

          ></img>
       </main>


       <footer>


       </footer>
       </body>


        }


    </div>
  );
}

export default Questions;
