import '../style/Questions.css';

function Questions() {
  return (
    <div className="Questions">
        <h1 className="title">Questions Page</h1>
        {/* Write your html code here!! */
       <body>
          <headers>
            <div> Survey Questions</div>

            <p>Which of the following is currently bothering you most?</p>

            <form action="/action_page.php">

              <input type="checkbox" id="choice1" name="choice1" value="School"></input>
              <label for="choice1">school</label><br></br>
              <input type="checkbox" id="choice2" name="choice2" value="Personal"></input>
              <label for="choice2">Personal reason</label><br></br>
              <input type="checkbox" id="choice3" name="choice3" value="Boat"></input>
              <label for="choice3">family</label><br></br>
              <input type="submit" value="Submit"></input>
            </form>
            <img src="https://i.etsystatic.com/21677867/r/il/08489e/2414568216/il_1588xN.2414568216_g8zf.jpg" alt="background"
            ></img>
          </headers>


       </body>
        }


    </div>
  );
}

export default Questions;
