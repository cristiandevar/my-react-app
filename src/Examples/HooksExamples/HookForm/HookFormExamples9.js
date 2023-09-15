import { useForm } from "react-hook-form";
import { connect } from "react-redux"
import updateAction from "./actions"

export default function App(props){
    const { register, handleSubmit, setValue } = useForm({
        defaultValues:{
                firstName: "",
                lastName: "",
        },
    });

    const onSubmit = (data) => props.updateAction(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <input {...register("lastName")} />
            <input type="submit" />
        </form>
    );
}

connect(
    ({ firstName, lastName}) => ({ firstName, lastName }), 
    updateAction
)(YourForm);