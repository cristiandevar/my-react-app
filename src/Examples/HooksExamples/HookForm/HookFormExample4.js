import { useForm } from "react-hook-form";

export default function HookFormExample4(){
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstname", {required: true, maxLength: 20})} />
            <input {...register('lastname', {pattern: /^[A-Za-z]+$/i})} />
            <input type="number" {...register('age',{min: 18, max: 99})} />
            <input type="submit" />
        </form>
    );
}