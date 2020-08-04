import React from 'react';
import PeriodQuiz from './components/PeriodQuiz';
// import './App.css';

class QuestionData extends React.Component {

      constructor(){
    
        super();
        this.state = {
            currentQuiz: "period",
          period: {
            name: "How much do you know about periods",
            questions: [
    
              "How long does your period last ?",
              "How many periods does the average person have in a lifetime?",
              "At what point during the menstrual cycle is someone most likely to get pregnant?",
              "What is the lifetime cost of a period in the UK?",
              "It's a fact that women who live together have their periods at the same time.",
              "It's normal to see brown blood in your period?",
              "What does PMS stand for?",
              "What might help relieve PMS symptoms?",
              "Which of the following things is NOT a menstrual hygiene item?"
            ],
            options: [
              ["2-3 days", "3-5 days", "6-7 days"],
              ["360","430","1000"],
              ["During period","Before period","After period is finished", "Anytime"],
              ["£1000","£2,900","£4,800"],
              ["True", "False", "Not Sure"],
              ["Yes", "No", "Wait what brown blood?"],
              ["Premenstrual Stress","Premenstrual Syndrome","Premenstrual Mood Swings"],
              ["Chocolate", "Exercise", "Wine!"],
              ["Sea Sponge", "Cervical plug", "Menstrual Cup"]
    
            ],
            answers: [
              "3-5 days",
              "430",
              "Anytime",
              "£4,800",
              "False",
              "Yes",
              "Premenstrual Syndrome",
              "Exercise",
              "Cervical Plug",
    
            ]
          }
    
        }
      }
      

      handleChoice = (e) => {
        console.log(e.target);
        this.setState({
          currentQuiz: e.target.innerHTML.toLowerCase(),
        });
      };
      render(){
    
         return (
        <div>
        <h3>Start Quiz</h3>
        <ul>
            <li onClick={(e) => this.handleChoice(e)}>How well do you know your period?</li>
          </ul>
        <PeriodQuiz
        period={this.state.period}
        currentQuiz={this.state.currentQuiz}
        />
        </div>
      );
      }
    
    }



export default QuestionData;
