import "../styles/Project.css";

function Project() {
  return (
   <div>
    <div className="row">
      <div className="col cd-left cd-one" id="cardBdOne">
        <h2 className="cd-text-title-1" type="button">
         Project 1
        </h2>
        <a 
          className="cd-text"
          href="https://jacobblack1.github.io/Homework_3/"
          type="button"
        >
         Password Generator
            March 8th
        </a>
    </div>
      </div>
    <div className="row">
      <div className="col cd-right cd-two" id="cardBdTwo">
        <h2 className="cd-text-title-1" type="button">
        Project 2
        </h2>
        <a 
          className="cd-text"
          href="https://jacobblack1.github.io/PoP_QuIz/"
          type="button"
        >
         Pop Quiz
         March 15th
        </a>
    </div>
    </div>
    <div className="row">
      <div className="col cd-left cd-three" id="cardBdThree">
        <h2 className="cd-text-title-1" type="button">
        Project 3
        </h2>
        <a 
          className="cd-text"
          href="https://mcm1015.github.io/PR1_Marvel/"
          type="button"
        >
         Marvel Character Search
         April 7th
         Co creaters: Reggiald Mace and Mary McClernan.
        </a>
    </div>
    </div>
    <div className="row">
      <div className="col cd-right cd-four" id="cardBdFour">
        <h2 className="cd-text-title-1" type="button">
        Project 4
        </h2>
        <a 
          className="cd-text"
          href="https://pure-chamber-08412.herokuapp.com/"
          type="button"
        >
        Stock Tracker
        June 17th
        Co creaters: Carl
        </a>
    </div>
    </div>
</div>
  );
}
           

 export default Project;