import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";

export default function Input({ control, name }){
    const {
        field,
        fieldState: { invalid, isTouched, isDirty },
        formState: { touchedFields, durtyFields },
    } = useController({
        name,
        control,
        rules: { required: true },
    });

    return (
        <TextField
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            name={field.name}
            inputRef={field.ref}
        />
    );
}