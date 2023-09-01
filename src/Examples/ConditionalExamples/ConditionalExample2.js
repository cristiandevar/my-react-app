function ConditionalExample2(props){
    const isGoal = props.isGoal;
    const MadeGoal = () => {
        return (
            <>
                <h1>Goal!!</h1>
            </>
        );
    }

    const MissGoal = () => {
        return (
            <>
                <h1>Fail!!</h1>
            </>
        );
    }
    return(
        <>
            {isGoal ? <MadeGoal /> : <MissGoal />}
        </>
    )
}

export default ConditionalExample2;