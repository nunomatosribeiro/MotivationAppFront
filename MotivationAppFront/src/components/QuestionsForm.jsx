import { useState } from "react";
import '../MainPage.css'
import '../BarAnimation.css'
import RenderVisual1 from "./RenderVisual1";
import RenderVisual2 from "./RenderVisual2";
import RenderVisual3 from "./RenderVisual3";

const QuestionsForm = (props) => {

const [showVisual, setShowVisual] = useState(false)
const [submitted, setSubmitted] = useState(false);
const [barValue, setBarValue] = useState(0);
const { text, showMore, setShowMore,
  responses1, setResponses1,
  responses2, setResponses2,
  responses3, setResponses3 } = props
  
      const handleResponseChange1 = (event) => {
        const { name, value } = event.target;
        setResponses1({
          ...responses1,
          [name]: parseInt(value, 10),
        });
      };
      const handleResponseChange2 = (event) => {
        const { name, value } = event.target;
        setResponses2({
          ...responses2,
          [name]: parseInt(value, 10),
        });
      };
      const handleResponseChange3 = (event) => {
        const { name, value } = event.target;
        setResponses3({
          ...responses3,
          [name]: parseInt(value, 10),
        });
      };
      const calculateBarWidthVisual1 = () => {
        
        const sum = Object.values(responses1).reduce((acc, cur) => acc + parseInt(cur + 0), 0);
       
        console.log('Ver aqui percentagem', sum)
        return sum 
      }
      const calculateBarWidthVisual2 = () => {
        
        const sum = Object.values(responses2).reduce((acc, cur) => acc + parseInt(cur + 0), 0);
       
        console.log('Ver aqui percentagem', sum)
        return sum 
      }
      const calculateBarWidthVisual3 = () => {
        
        const sum = Object.values(responses3).reduce((acc, cur) => acc + parseInt(cur + 0), 0);
       
        console.log('Ver aqui percentagem', sum)
        return sum 
      }
      
      const handleSubmit = async e => {
        e.preventDefault()

       const desiredOutcome = calculateBarWidthVisual1();
       const desiredOutcome2 = calculateBarWidthVisual2();
       const desiredOutcome3 = calculateBarWidthVisual3();
        setSubmitted(true)
        setShowVisual(true);
      setBarValue(desiredOutcome);
      setBarValue(desiredOutcome2)
      setBarValue(desiredOutcome3)
        setResponses1(responses1)
        setResponses2(responses2)
        setResponses3(responses3)
        console.log("User's answers:", responses1);
        
      }
      
    return ( 
        <div className="allFormDiv">
          
          {showVisual ? (
      <div className="rendersContainer">
      <div className="render">
       <RenderVisual1 text={text}
      responses1={responses1} setResponses1={setResponses1}
      showMore={showMore} setShowMore={setShowMore} 
      calculateBarWidthVisual1={calculateBarWidthVisual1} />
      </div>
      <div className="render">
      <RenderVisual2 text={text}
      responses2={responses2} setResponses2={setResponses2}
      showMore={showMore} setShowMore={setShowMore} 
      calculateBarWidthVisual2={calculateBarWidthVisual2}/>
      </div>
      <div className="render">
      <RenderVisual3 text={text}
      responses3={responses3} setResponses1={setResponses3}
      showMore={showMore} setShowMore={setShowMore} 
      calculateBarWidthVisual3={calculateBarWidthVisual3}/>
      </div>

    </div>
      ) : (
      <div className="allMainPage">
        <div className="introContainer">
        <h3>III - PARTE</h3>
<p>Pense na Relação de Trabalho, para responder às questões que se seguem.</p>

<p>Quando se trata da relação de trabalho, UMA RAZÃO PARA FAZER O QUE FAÇO É ....</p>

<p>Qual é ou quais são as razões por que faz o que faz, na sua função?</p>

<p>A cada afirmação corresponde uma escala de resposta de 0 a 8, em que:</p>
<p>"0" corresponde a - NÃO É ESTA a Razão</p>
<p>"8" corresponde a - É ESTA a Razão</p>
<p>Vamos começar?</p>

<p>NO LOCAL DE TRABALHO, faço o que faço porque ...</p>
</div>
<div className='questionFormDiv'>
        <h2>Please answer the questions below</h2>
        <p>After you submit all your answers, wait a few moments to get the results</p>
        
       <h5>1. Faço o que faço por pressão, eu tenho que fazê-lo (eu receio o que poderá acontecer se não fizer)</h5>
            <form onSubmit={handleSubmit}>
            <div className='inputDiv'>
  <input className="inputs" type="radio" name="question1" value='0' onChange={handleResponseChange1}/>0
  <input className="inputs" type="radio" name="question1" value='1.67' onChange={handleResponseChange1}/>1
  <input className="inputs" type="radio" name="question1" value='3.33' onChange={handleResponseChange1}/>2
  <input className="inputs" type="radio" name="question1" value='5' onChange={handleResponseChange1}/>3
  <input className="inputs" type="radio" name="question1" value='6.67' onChange={handleResponseChange1}/>4
  <input className="inputs" type="radio" name="question1" value='8.34' onChange={handleResponseChange1}/>5
  <input className="inputs" type="radio" name="question1" value='10.00' onChange={handleResponseChange1}/>6
  <input className="inputs" type="radio" name="question1" value='11.67' onChange={handleResponseChange1}/>7
  <input className="inputs" type="radio" name="question1" value='13.34' onChange={handleResponseChange1}/>8
  <input className="inputs" type="radio" name="question1" value='15.00' onChange={handleResponseChange1}/>9
  <input className="inputs" type="radio" name="question1" value='16.67' onChange={handleResponseChange1}/>10
  </div>
      
      <h5>2. Faço o que faço por promessa de dinheiro, de incentivos, de melhores condições, de título, (...)</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question2" value='0' onChange={handleResponseChange1}/>0
  <input className="inputs" type="radio" name="question2" value='1.67' onChange={handleResponseChange1}/>1
  <input className="inputs" type="radio" name="question2" value='3.33' onChange={handleResponseChange1}/>2
  <input className="inputs" type="radio" name="question2" value='5' onChange={handleResponseChange1}/>3
  <input className="inputs" type="radio" name="question2" value='6.67' onChange={handleResponseChange1}/>4
  <input className="inputs" type="radio" name="question2" value='8.34' onChange={handleResponseChange1}/>5
  <input className="inputs" type="radio" name="question2" value='10.00' onChange={handleResponseChange1}/>6
  <input className="inputs" type="radio" name="question2" value='11.67' onChange={handleResponseChange1}/>7
  <input className="inputs" type="radio" name="question2" value='13.34' onChange={handleResponseChange1}/>8
  <input className="inputs" type="radio" name="question2" value='15.00' onChange={handleResponseChange1}/>9
  <input className="inputs" type="radio" name="question2" value='16.67' onChange={handleResponseChange1}/>10
  </div>

      <h5>3. Faço o que faço por não estar interessado. É um desperdício de tempo e preferiria estar a fazer outra coisa</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question3" value='0' onChange={handleResponseChange1}/>0
  <input className="inputs" type="radio" name="question3" value='1.67' onChange={handleResponseChange1}/>1
  <input className="inputs" type="radio" name="question3" value='3.33' onChange={handleResponseChange1}/>2
  <input className="inputs" type="radio" name="question3" value='5' onChange={handleResponseChange1}/>3
  <input className="inputs" type="radio" name="question3" value='6.67' onChange={handleResponseChange1}/>4
  <input className="inputs" type="radio" name="question3" value='8.34' onChange={handleResponseChange1}/>5
  <input className="inputs" type="radio" name="question3" value='10.00' onChange={handleResponseChange1}/>6
  <input className="inputs" type="radio" name="question3" value='11.67' onChange={handleResponseChange1}/>7
  <input className="inputs" type="radio" name="question3" value='13.34' onChange={handleResponseChange1}/>8
  <input className="inputs" type="radio" name="question3" value='15.00' onChange={handleResponseChange1}/>9
  <input className="inputs" type="radio" name="question3" value='16.67' onChange={handleResponseChange1}/>10
  </div>

  <h5>4. Faço o que faço por permitir-me demonstrar valores importantes</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question4" value='0' onChange={handleResponseChange1}/>0
  <input className="inputs" type="radio" name="question4" value='1.67' onChange={handleResponseChange1}/>1
  <input className="inputs" type="radio" name="question4" value='3.33' onChange={handleResponseChange1}/>2
  <input className="inputs" type="radio" name="question4" value='5' onChange={handleResponseChange1}/>3
  <input className="inputs" type="radio" name="question4" value='6.67' onChange={handleResponseChange1}/>4
  <input className="inputs" type="radio" name="question4" value='8.34' onChange={handleResponseChange1}/>5
  <input className="inputs" type="radio" name="question4" value='10.00' onChange={handleResponseChange1}/>6
  <input className="inputs" type="radio" name="question4" value='11.67' onChange={handleResponseChange1}/>7
  <input className="inputs" type="radio" name="question4" value='13.34' onChange={handleResponseChange1}/>8
  <input className="inputs" type="radio" name="question4" value='15.00' onChange={handleResponseChange1}/>9
  <input className="inputs" type="radio" name="question4" value='16.67' onChange={handleResponseChange1}/>10
  </div>
  <h5>5. Faço o que faço por experimentar uma sensação de significado a partir do objetivo</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question5" value='0' onChange={handleResponseChange1}/>0
  <input className="inputs" type="radio" name="question5" value='1.67' onChange={handleResponseChange1}/>1
  <input className="inputs" type="radio" name="question5" value='3.33' onChange={handleResponseChange1}/>2
  <input className="inputs" type="radio" name="question5" value='5' onChange={handleResponseChange1}/>3
  <input className="inputs" type="radio" name="question5" value='6.67' onChange={handleResponseChange1}/>4
  <input className="inputs" type="radio" name="question5" value='8.34' onChange={handleResponseChange1}/>5
  <input className="inputs" type="radio" name="question5" value='10.00' onChange={handleResponseChange1}/>6
  <input className="inputs" type="radio" name="question5" value='11.67' onChange={handleResponseChange1}/>7
  <input className="inputs" type="radio" name="question5" value='13.34' onChange={handleResponseChange1}/>8
  <input className="inputs" type="radio" name="question5" value='15.00' onChange={handleResponseChange1}/>9
  <input className="inputs" type="radio" name="question5" value='16.67' onChange={handleResponseChange1}/>10
  </div>
  <h5>6. Faço o que faço por pura diversão, gosto e prazer</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question6" value='0' onChange={handleResponseChange1}/>0
  <input className="inputs" type="radio" name="question6" value='1.67' onChange={handleResponseChange1}/>1
  <input className="inputs" type="radio" name="question6" value='3.33' onChange={handleResponseChange1}/>2
  <input className="inputs" type="radio" name="question6" value='5' onChange={handleResponseChange1}/>3
  <input className="inputs" type="radio" name="question6" value='6.67' onChange={handleResponseChange1}/>4
  <input className="inputs" type="radio" name="question6" value='8.34' onChange={handleResponseChange1}/>5
  <input className="inputs" type="radio" name="question6" value='10.00' onChange={handleResponseChange1}/>6
  <input className="inputs" type="radio" name="question6" value='11.67' onChange={handleResponseChange1}/>7
  <input className="inputs" type="radio" name="question6" value='13.34' onChange={handleResponseChange1}/>8
  <input className="inputs" type="radio" name="question6" value='15.00' onChange={handleResponseChange1}/>9
  <input className="inputs" type="radio" name="question6" value='16.67' onChange={handleResponseChange1}/>10
  </div>
  <h5>7. Faço o que faço por sentimento de culpa, vergonha ou deceção em mim mesmo, se eu não fizer</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question7" value='0' onChange={handleResponseChange2}/>0
  <input className="inputs" type="radio" name="question7" value='1.67' onChange={handleResponseChange2}/>1
  <input className="inputs" type="radio" name="question7" value='3.33' onChange={handleResponseChange2}/>2
  <input className="inputs" type="radio" name="question7" value='5' onChange={handleResponseChange2}/>3
  <input className="inputs" type="radio" name="question7" value='6.67' onChange={handleResponseChange2}/>4
  <input className="inputs" type="radio" name="question7" value='8.34' onChange={handleResponseChange2}/>5
  <input className="inputs" type="radio" name="question7" value='10.00' onChange={handleResponseChange2}/>6
  <input className="inputs" type="radio" name="question7" value='11.67' onChange={handleResponseChange2}/>7
  <input className="inputs" type="radio" name="question7" value='13.34' onChange={handleResponseChange2}/>8
  <input className="inputs" type="radio" name="question7" value='15.00' onChange={handleResponseChange2}/>9
  <input className="inputs" type="radio" name="question7" value='16.67' onChange={handleResponseChange2}/>10
  </div>
  <h5>8. Faço o que faço por esperar receber o respeito das pessoas</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question8" value='0' onChange={handleResponseChange2}/>0
  <input className="inputs" type="radio" name="question8" value='1.67' onChange={handleResponseChange2}/>1
  <input className="inputs" type="radio" name="question8" value='3.33' onChange={handleResponseChange2}/>2
  <input className="inputs" type="radio" name="question8" value='5' onChange={handleResponseChange2}/>3
  <input className="inputs" type="radio" name="question8" value='6.67' onChange={handleResponseChange2}/>4
  <input className="inputs" type="radio" name="question8" value='8.34' onChange={handleResponseChange2}/>5
  <input className="inputs" type="radio" name="question8" value='10.00' onChange={handleResponseChange2}/>6
  <input className="inputs" type="radio" name="question8" value='11.67' onChange={handleResponseChange2}/>7
  <input className="inputs" type="radio" name="question8" value='13.34' onChange={handleResponseChange2}/>8
  <input className="inputs" type="radio" name="question8" value='15.00' onChange={handleResponseChange2}/>9
  <input className="inputs" type="radio" name="question8" value='16.67' onChange={handleResponseChange2}/>10
  </div>
  <h5>9. Faço o que faço por não ver nenhuma razão que me diga que é importante</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question9" value='0' onChange={handleResponseChange2}/>0
  <input className="inputs" type="radio" name="question9" value='1.67' onChange={handleResponseChange2}/>1
  <input className="inputs" type="radio" name="question9" value='3.33' onChange={handleResponseChange2}/>2
  <input className="inputs" type="radio" name="question9" value='5' onChange={handleResponseChange2}/>3
  <input className="inputs" type="radio" name="question9" value='6.67' onChange={handleResponseChange2}/>4
  <input className="inputs" type="radio" name="question9" value='8.34' onChange={handleResponseChange2}/>5
  <input className="inputs" type="radio" name="question9" value='10.00' onChange={handleResponseChange2}/>6
  <input className="inputs" type="radio" name="question9" value='11.67' onChange={handleResponseChange2}/>7
  <input className="inputs" type="radio" name="question9" value='13.34' onChange={handleResponseChange2}/>8
  <input className="inputs" type="radio" name="question9" value='15.00' onChange={handleResponseChange2}/>9
  <input className="inputs" type="radio" name="question9" value='16.67' onChange={handleResponseChange2}/>10
  </div>
  <h5>10. Faço o que faço por crença de que eu estou escolher o que está certo</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question10" value='0' onChange={handleResponseChange2}/>0
  <input className="inputs" type="radio" name="question10" value='1.67' onChange={handleResponseChange2}/>1
  <input className="inputs" type="radio" name="question10" value='3.33' onChange={handleResponseChange2}/>2
  <input className="inputs" type="radio" name="question10" value='5' onChange={handleResponseChange2}/>3
  <input className="inputs" type="radio" name="question10" value='6.67' onChange={handleResponseChange2}/>4
  <input className="inputs" type="radio" name="question10" value='8.34' onChange={handleResponseChange2}/>5
  <input className="inputs" type="radio" name="question10" value='10.00' onChange={handleResponseChange2}/>6
  <input className="inputs" type="radio" name="question10" value='11.67' onChange={handleResponseChange2}/>7
  <input className="inputs" type="radio" name="question10" value='13.34' onChange={handleResponseChange2}/>8
  <input className="inputs" type="radio" name="question10" value='15.00' onChange={handleResponseChange2}/>9
  <input className="inputs" type="radio" name="question10" value='16.67' onChange={handleResponseChange2}/>10
  </div>
  <h5>11. Faço o que faço por realização de uma profunda sensação de propósito, nessa situação</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question11" value='0' onChange={handleResponseChange2}/>0
  <input className="inputs" type="radio" name="question11" value='1.67' onChange={handleResponseChange2}/>1
  <input className="inputs" type="radio" name="question11" value='3.33' onChange={handleResponseChange2}/>2
  <input className="inputs" type="radio" name="question11" value='5' onChange={handleResponseChange2}/>3
  <input className="inputs" type="radio" name="question11" value='6.67' onChange={handleResponseChange2}/>4
  <input className="inputs" type="radio" name="question11" value='8.34' onChange={handleResponseChange2}/>5
  <input className="inputs" type="radio" name="question11" value='10.00' onChange={handleResponseChange2}/>6
  <input className="inputs" type="radio" name="question11" value='11.67' onChange={handleResponseChange2}/>7
  <input className="inputs" type="radio" name="question11" value='13.34' onChange={handleResponseChange2}/>8
  <input className="inputs" type="radio" name="question11" value='15.00' onChange={handleResponseChange2}/>9
  <input className="inputs" type="radio" name="question11" value='16.67' onChange={handleResponseChange2}/>10
  </div>
  <h5>12. Faço o que faço por um interesse e atração inexplicáveis</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question12" value='0' onChange={handleResponseChange2}/>0
  <input className="inputs" type="radio" name="question12" value='1.67' onChange={handleResponseChange2}/>1
  <input className="inputs" type="radio" name="question12" value='3.33' onChange={handleResponseChange2}/>2
  <input className="inputs" type="radio" name="question12" value='5' onChange={handleResponseChange2}/>3
  <input className="inputs" type="radio" name="question12" value='6.67' onChange={handleResponseChange2}/>4
  <input className="inputs" type="radio" name="question12" value='8.34' onChange={handleResponseChange2}/>5
  <input className="inputs" type="radio" name="question12" value='10.00' onChange={handleResponseChange2}/>6
  <input className="inputs" type="radio" name="question12" value='11.67' onChange={handleResponseChange2}/>7
  <input className="inputs" type="radio" name="question12" value='13.34' onChange={handleResponseChange2}/>8
  <input className="inputs" type="radio" name="question12" value='15.00' onChange={handleResponseChange2}/>9
  <input className="inputs" type="radio" name="question12" value='16.67' onChange={handleResponseChange2}/>10
  </div>
  <h5>13. Faço o que faço para evitar danificar o relacionamento com alguém, que tem expetativas sobre mim</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question13" value='0' onChange={handleResponseChange3}/>0
  <input className="inputs" type="radio" name="question13" value='1.67' onChange={handleResponseChange3}/>1
  <input className="inputs" type="radio" name="question13" value='3.33' onChange={handleResponseChange3}/>2
  <input className="inputs" type="radio" name="question13" value='5' onChange={handleResponseChange3}/>3
  <input className="inputs" type="radio" name="question13" value='6.67' onChange={handleResponseChange3}/>4
  <input className="inputs" type="radio" name="question13" value='8.34' onChange={handleResponseChange3}/>5
  <input className="inputs" type="radio" name="question13" value='10.00' onChange={handleResponseChange3}/>6
  <input className="inputs" type="radio" name="question13" value='11.67' onChange={handleResponseChange3}/>7
  <input className="inputs" type="radio" name="question13" value='13.34' onChange={handleResponseChange3}/>8
  <input className="inputs" type="radio" name="question13" value='15.00' onChange={handleResponseChange3}/>9
  <input className="inputs" type="radio" name="question13" value='16.67' onChange={handleResponseChange3}/>10
  </div>
  <h5>14. Faço o que faço pela expectativa de que me vai trazer poder e estatuto</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question14" value='0' onChange={handleResponseChange3}/>0
  <input className="inputs" type="radio" name="question14" value='1.67' onChange={handleResponseChange3}/>1
  <input className="inputs" type="radio" name="question14" value='3.33' onChange={handleResponseChange3}/>2
  <input className="inputs" type="radio" name="question14" value='5' onChange={handleResponseChange3}/>3
  <input className="inputs" type="radio" name="question14" value='6.67' onChange={handleResponseChange3}/>4
  <input className="inputs" type="radio" name="question14" value='8.34' onChange={handleResponseChange3}/>5
  <input className="inputs" type="radio" name="question14" value='10.00' onChange={handleResponseChange3}/>6
  <input className="inputs" type="radio" name="question14" value='11.67' onChange={handleResponseChange3}/>7
  <input className="inputs" type="radio" name="question14" value='13.34' onChange={handleResponseChange3}/>8
  <input className="inputs" type="radio" name="question14" value='15.00' onChange={handleResponseChange3}/>9
  <input className="inputs" type="radio" name="question14" value='16.67' onChange={handleResponseChange3}/>10
  </div>
  <h5>15. Faço o que faço por não ter nenhuma intenção de agir sobre esta meta, objetivo ou tarefa</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question15" value='0' onChange={handleResponseChange3}/>0
  <input className="inputs" type="radio" name="question15" value='1.67' onChange={handleResponseChange3}/>1
  <input className="inputs" type="radio" name="question15" value='3.33' onChange={handleResponseChange3}/>2
  <input className="inputs" type="radio" name="question15" value='5' onChange={handleResponseChange3}/>3
  <input className="inputs" type="radio" name="question15" value='6.67' onChange={handleResponseChange3}/>4
  <input className="inputs" type="radio" name="question15" value='8.34' onChange={handleResponseChange3}/>5
  <input className="inputs" type="radio" name="question15" value='10.00' onChange={handleResponseChange3}/>6
  <input className="inputs" type="radio" name="question15" value='11.67' onChange={handleResponseChange3}/>7
  <input className="inputs" type="radio" name="question15" value='13.34' onChange={handleResponseChange3}/>8
  <input className="inputs" type="radio" name="question15" value='15.00' onChange={handleResponseChange3}/>9
  <input className="inputs" type="radio" name="question15" value='16.67' onChange={handleResponseChange3}/>10
  </div>
  <h5>16. Faço o que faço por considerar que é a coisa certa a fazer. É o melhor para mim.</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question16" value='0' onChange={handleResponseChange3}/>0
  <input className="inputs" type="radio" name="question16" value='1.67' onChange={handleResponseChange3}/>1
  <input className="inputs" type="radio" name="question16" value='3.33' onChange={handleResponseChange3}/>2
  <input className="inputs" type="radio" name="question16" value='5' onChange={handleResponseChange3}/>3
  <input className="inputs" type="radio" name="question16" value='6.67' onChange={handleResponseChange3}/>4
  <input className="inputs" type="radio" name="question16" value='8.34' onChange={handleResponseChange3}/>5
  <input className="inputs" type="radio" name="question16" value='10.00' onChange={handleResponseChange3}/>6
  <input className="inputs" type="radio" name="question16" value='11.67' onChange={handleResponseChange3}/>7
  <input className="inputs" type="radio" name="question16" value='13.34' onChange={handleResponseChange3}/>8
  <input className="inputs" type="radio" name="question16" value='15.00' onChange={handleResponseChange3}/>9
  <input className="inputs" type="radio" name="question16" value='16.67' onChange={handleResponseChange3}/>10
  </div>
  <h5>17. Faço o que faço por a sensação de contribuir para uma causa maior</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question17" value='0' onChange={handleResponseChange3}/>0
  <input className="inputs" type="radio" name="question17" value='1.67' onChange={handleResponseChange3}/>1
  <input className="inputs" type="radio" name="question17" value='3.33' onChange={handleResponseChange3}/>2
  <input className="inputs" type="radio" name="question17" value='5' onChange={handleResponseChange3}/>3
  <input className="inputs" type="radio" name="question17" value='6.67' onChange={handleResponseChange3}/>4
  <input className="inputs" type="radio" name="question17" value='8.34' onChange={handleResponseChange3}/>5
  <input className="inputs" type="radio" name="question17" value='10.00' onChange={handleResponseChange3}/>6
  <input className="inputs" type="radio" name="question17" value='11.67' onChange={handleResponseChange3}/>7
  <input className="inputs" type="radio" name="question17" value='13.34' onChange={handleResponseChange3}/>8
  <input className="inputs" type="radio" name="question17" value='15.00' onChange={handleResponseChange3}/>9
  <input className="inputs" type="radio" name="question17" value='16.67' onChange={handleResponseChange3}/>10
  </div>
  <h5>18. Faço o que faço por estar entusiasmado com o objetivo, tarefa ou situação</h5>
      <div className='inputDiv'>
  <input className="inputs" type="radio" name="question18" value='0' onChange={handleResponseChange3}/>0
  <input className="inputs" type="radio" name="question18" value='1.67' onChange={handleResponseChange3}/>1
  <input className="inputs" type="radio" name="question18" value='3.33' onChange={handleResponseChange3}/>2
  <input className="inputs" type="radio" name="question18" value='5' onChange={handleResponseChange3}/>3
  <input className="inputs" type="radio" name="question18" value='6.67' onChange={handleResponseChange3}/>4
  <input className="inputs" type="radio" name="question18" value='8.34' onChange={handleResponseChange3}/>5
  <input className="inputs" type="radio" name="question18" value='10.00' onChange={handleResponseChange3}/>6
  <input className="inputs" type="radio" name="question18" value='11.67' onChange={handleResponseChange3}/>7
  <input className="inputs" type="radio" name="question18" value='13.34' onChange={handleResponseChange3}/>8
  <input className="inputs" type="radio" name="question18" value='15.00' onChange={handleResponseChange3}/>9
  <input className="inputs" type="radio" name="question18" value='16.67' onChange={handleResponseChange3}/>10
  </div>

  <div className="buttonForm">
     <button type="submit">Submit</button></div>
      </form>
      </div>
      </div>
      )}
      
      </div>
     );
}

export default QuestionsForm;