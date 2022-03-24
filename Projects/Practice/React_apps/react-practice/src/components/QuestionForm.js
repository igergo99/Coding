import SpecInput from "./SpecInput"

export default function QuestionForm(props){
    return(
        <form>
            <SpecInput name="question" labelText="Kérdés" />
            <SpecInput name="answer 1" labelText="Válasz 1"/>
            <SpecInput name="answer 2" labelText="Válasz 2"/>
            <SpecInput name="answer 3" labelText="Válasz 3"/>
          <label htmlFor="correct">
              Jó válasz száma:
              <input type="text" name="correct" id="correct"></input>
            </label>  
            <div>
                <button>Mentés</button>
            </div>
        </form>
    )
}