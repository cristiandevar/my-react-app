import './test.css';
import RenderExample1 from './RenderExamples/RenderExample1';
import ConditionalExample1 from './ConditionalExamples/ConditionalExample1';
import ConditionalExample2 from './ConditionalExamples/ConditionalExample2';
import ListExample1 from './ListExamples/ListExample1';
import FormsExample1 from './FormsExamples/FormsExample1';
import FormsExample2 from './FormsExamples/FormsExample2';
import FormsExample3 from './FormsExamples/FormsExample3';
import FormsExample4 from './FormsExamples/FormsExample4';
import FormsExample5 from './FormsExamples/FormsExample5';
import HooksExample1 from './HooksExamples/HooksExample01';
import HooksExample2 from './HooksExamples/HooksExample02';
import HooksExample3 from './HooksExamples/HooksExample03';
import HooksExample4 from './HooksExamples/HooksExample04';
import HooksExample5 from './HooksExamples/HooksExample05';
import HooksExample6 from './HooksExamples/HooksExample06';
import HooksExample7 from './HooksExamples/HooksExample07';
import HooksExample8 from './HooksExamples/HooksExample08';
import HooksExample9 from './HooksExamples/HooksExample09';
import HooksExample10 from './HooksExamples/HooksExample10';
import HooksExample11 from './HooksExamples/HooksExample11';

function Test(){
    const myCars = ["ford", "chevro"];
    return(
        <>
            <div className="Test-div">
                {/* <RenderExample1 />
                <ConditionalExample1 cars = {myCars}/>
                <ConditionalExample2 isGoal = {true}/>
                <ListExample1 />
                <FormsExample1 />
                <FormsExample2 />
                <FormsExample3 />
                <FormsExample4 />
                <FormsExample5 />
                <HooksExample01 />
                <HooksExample02 />
                <HooksExample03 />
                <HooksExample04 />
                <HooksExample05 />
                <HooksExample06 />
                <HooksExample07 />
                <HooksExample08 />
                <HooksExample09 />
                <HooksExample10 /> */}
                <HooksExample11 />
            </div>
        </>
    );
}

export default Test;