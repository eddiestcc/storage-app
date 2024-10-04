const mockInfo = [
    'Is this your first time using storage?',
    'Will you be using movers?',
    'How long will you be storing?',
]

const QuestionForm = () => {

    return (
        mockInfo.map((info, index) => {
            return(
                    <article key={index} className="hero-content px-8">
                        <div className="w-96">
                            <h4 className="text-lg pb-2 font-semibold text-slate-100">{info}</h4>
                            <label className="input px-3 input-bordered  flex items-center bg-slate-200 gap-2">
                                <input type="text" className="text-slate-600" placeholder="..." />
                            </label>
                        </div>
                    </article>
            )
        })
    )
}

export default QuestionForm;