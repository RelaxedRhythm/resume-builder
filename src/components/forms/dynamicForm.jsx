import './form-config';
export function DynamicForm({fields,data,onSubmit}){

function handleChange(e){
    const {name,value}=e.target;
    onSubmit(name,value);
    }

    return(
        <div>
            <form>
                {
                    fields.map((field)=>(
                        <fieldset>
                            <label htmlFor={field.name}>{field.label}</label>
                            <input name={field.name} type={field.type} placeholder={field.placeholder} value={data?.[field.name] || ""}
                            onChange={handleChange}/>
                        </fieldset>
                    ))
                }
            </form>
        </div>
    );
}