import { useForm } from "react-hook-form";
import React from "react";

const Input = ({ label, register, required}) => (
    <>
        <label>{ label }</label>
        <input {...register(label, {required})} />
    </>
);

const Select = React.forwardRef(({ onChange, onBlur, name, label}, ref) => (
    <>
        <label>{ label }</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    </>
)
);

export default function HookFormExample5() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="First Name" register={register} required />
            <Input label="Last Name" register={register}/>
            <Select label="Age" {...register("Age")} />
            <input type="submit" />
        </form>
    );
}