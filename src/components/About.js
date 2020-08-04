// import { render } from "@testing-library/react";
import React from 'react'
import Footer from './Footer';


class About extends React.Component {
render(){
    return(
          <center> <div>
            <br></br>
           <h1>What is OTR? </h1>

           <h2>OTR is an informative application about periods with a bunch of resources <br></br>and period related news!<br></br> with new stuff coming soon</h2>

            <br></br>

           <h3 title="periodHeader"> What is a period?</h3>
           <h4>A period is the part of the menstrual cycle when a woman bleeds from her vagina for a few days. <br></br> Whereby tissue the body no longer needs is being released. <br></br> This specific tissue comes from the uterus, which is where a baby (fetus) can develop in the female body. <br></br>For most women this process happens every 28 days (but it's common for periods to be more or less frequent than this) <br></br> or so where the uterus lining gets thicker to prepare for a fertilized egg if the woman becomes pregnant. If the egg doesn’t get fertilized, that lining is released from the body as blood through the vagina aka a period. So as scary as it may seem a period is just getting rid of some unneeded tissue :).</h4>

           

           <h3>How long periods last?</h3>
           <h4>Periods can last between 3 and 8 days, but it will usually last for about 5 days. The bleeding tends to be heaviest in the first 2 days. However this can vary from person to person!</h4>
           <h3>How much blood do you lose during your period?</h3>
               
            <h4> Most girls lose about 1/4 cup of menstrual fluid during their periods (mostly in the first few days). Not to worry, though — your body makes up for it.</h4>

            <h3>What to use during a period?</h3>
            <h4>Sanitary products soak up or collect the blood released during your period. The main types of sanitary products are: sanitary pads, tampons menstrual cups however there are many more out there! Check out here </h4>
         
         <h3>Is there anything I won’t be able to do when I have my period?</h3>

         <h4>Your period doesn’t have to stop you from doing things you usually do. You can still go to school, help at home, see your friends, play sports and do all the things you’d normally do. However if it is prohibiting you from doing what you us</h4>
         

         <Footer />
           </div> </center>
    )

}

}

export default About;