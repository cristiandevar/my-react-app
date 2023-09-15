import { Form, useForm } from "react-hook-form";

export default function App(){
    const { register, control } = useForm();

    return (
        <Form
            action="api/save"
            onSuccess={() => {
                alert("Your application is updated.");
            }}
            onError={() => {
                alert("Submission has failed");
            }}
            control={control}>
                <input {...register("firstName", {required: true})} />
                <input {...register("lastName", {required: true})} />
                <button>Submit</button>
            </Form>
    );
}