import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
// import Input from "./HookFormExample7"

export default function HookFormExample6() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: "nombre",
            select: {},
        },
    });
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input {...field} />}
                // render={({ control, field }) => <Input {...control} {...field} />}
            />
            <Controller
                name="select"
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={[
                            {value: "chocolate", label: "Chocolate"},
                            {value: "strawberry", label: "Strawberry"},
                            {value: "vainilla", label: "Vainilla"},
                        ]}
                    />
                )}
            />
            <input type="submit" />
        </form>
    );
}