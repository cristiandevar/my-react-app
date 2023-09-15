import { TextField } from "@material-ui/core";
import { useController, useForm } from "react-hook-form";

function Input({ control, name}){
    const {
        field,
        fieldState: { invalid, isTouched, isDirty },
        forState: { touchedFields, dirtyFields },
    } = useController({
        name,
        control,
        rules: { required: true},
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