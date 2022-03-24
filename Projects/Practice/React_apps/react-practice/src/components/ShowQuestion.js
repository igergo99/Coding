import AnswerItem from "./AnswerItem";

export default function ShowQuestion(props){
    return(
        <section>
          <h2>Kérdés placeholder</h2>  
          <AnswerItem index={1} content="Válassz 1"/>
          <AnswerItem index={2} content="Válassz 2"/>
          <AnswerItem index={3} content="Válassz 3"/>
        </section>
    )
}