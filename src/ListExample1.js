function Car(props){
    return <li>I am a {props.brand}</li>
}

function ListExample1(){
    const cars = [
        {'id':1, 'name':'Ford'},
        {'id':2, 'name':'BMW'},
        {'id':3, 'name':'Audi'}
    ];
    return (
        <>
        <h1>Who lives in my garage?</h1>
        <ul>
            {cars.map((car)=><Car key={car.id} brand={car.name}/>)};
        </ul>
        </>
    );
}

export default ListExample1;
