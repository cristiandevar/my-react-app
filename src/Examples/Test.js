import RenderExample1 from './RenderExamples/RenderExample1';
import ConditionalExample1 from './ConditionalExamples/ConditionalExample1';
import ConditionalExample2 from './ConditionalExamples/ConditionalExample2';
import ListExample1 from './ListExamples/ListExample1';
import FormsExample1 from './FormsExamples/FormsExample1';
import FormsExample2 from './FormsExamples/FormsExample2';
import FormsExample3 from './FormsExamples/FormsExample3';
import FormsExample4 from './FormsExamples/FormsExample4';
import FormsExample5 from './FormsExamples/FormsExample5';
import './test.css'

function Test(){
    const myCars = ["ford", "chevro"];
    return(
        <>
            <div className="Test-div">
                <RenderExample1 />
                <ConditionalExample1 cars = {myCars}/>
                <ConditionalExample2 isGoal = {true}/>
                <ListExample1 />
                <FormsExample1 />
                <FormsExample2 />
                <FormsExample3 />
                <FormsExample4 />
                <FormsExample5 />
            </div>
        </>
    );
}

export default Test;