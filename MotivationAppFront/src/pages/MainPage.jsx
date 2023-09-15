import { useState } from 'react';
import '../MainPage.css'
import QuestionsForm from '../components/QuestionsForm';


const MainPage = () => {
  const [responses1, setResponses1] = useState({
    question1: '', question2: '',
    question3: '', question4: '',
    question5: '', question6: '',
  });
  const [responses2, setResponses2] = useState({
  question7: '', question8: '',
  question9: '', question10: '',
  question11: '', question12: '',
  })
  const [responses3, setResponses3] = useState({
    question13: '', question14: '',
    question15: '', question16: '',
    question17: '', question18: '',
  })
  const [showMore, setShowMore] = useState(false)
      const text =" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lectus nec augue vehicula, a vestibulum est ultrices. Aenean tristique purus a quam eleifend, at eleifend tellus fermentum. Curabitur auctor nibh a orci gravida, a tincidunt turpis iaculis."

    return ( 
        <div className='mainpageContainer'>
           
    <QuestionsForm responses1={responses1} setResponses1={setResponses1}
    responses2={responses2} setResponses2={setResponses2}
    responses3={responses3} setResponses3={setResponses3}
    showMore={showMore} setShowMore={setShowMore}  text={text}/>

     
      </div>
      
     );
}
 
export default MainPage;