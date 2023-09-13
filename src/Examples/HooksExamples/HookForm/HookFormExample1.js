import { useForm }from "react-hook-form";
import { edadValidator } from "./Validators";

const HookFormExample1 = () => {

    const {register, formState: {errors}, handleSubmit} = useForm(); 

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register('nombre', {
                        required: true,
                        maxLength: 10
                    })}/>
                    {errors.nombre?.type=='required'&& <p>El campo nombre es requerido</p>}
                    {errors.nombre?.type=='maxLength'&& <p>El campo nombre ha superado el maximo de longitud</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" {...register('email', {
                        required: true,
                        pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })}/>
                    {errors.email?.type=='required'&& <p>El campo email es requerido</p>}
                    {errors.email?.type=='pattern'&& <p>El formato del email no es correcto</p>}
                </div>
                <div>
                    <label>Direccion</label>
                    <input type="text" {...register('direccion', {
                        required: true,
                        maxLength: 50
                    })}/>
                    {errors.direccion?.type=='required'&& <p>El campo direccion es requerido</p>}
                    {errors.direccion?.type=='maxLength'&& <p>El campo direccion ha superado el maximo de longitud</p>}
                </div>
                <div>
                    <label>Edad</label>
                    <input type="text" {...register('edad', {
                        required: true,
                        maxLength: 3,
                        validate: edadValidator,
                    })}/>
                    {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
                </div>
                <div>
                    <label>Pais</label>
                    <select {...register('pais')}>
                        <option value="ar">Argentina</option>
                        <option value="es">España</option>
                        <option value="gu">Guatemala</option>
                    </select>
                </div>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );
}

export default HookFormExample1;