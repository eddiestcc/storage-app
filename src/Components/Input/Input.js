const Input = ({fieldName, id, className, type, placeholder}) => {
    return (
        <article className="hero-content px-8">
            <div className="w-72 contact-form-div">
                <h4 className="text-lg pb-2 font-semibold text-slate-100">{fieldName}</h4>
                <label className="input px-3 flex items-center bg-slate-100 gap-2 contact-form-field">
                    <input 
                     id={id}
                    className={className}
                    type={type}  
                    placeholder={placeholder}
                    />
                </label>
            </div>
        </article>
    )
}

export default Input;