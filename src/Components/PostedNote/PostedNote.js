const PostedNote = ({note}) => {

    const {title, textarea, category, timestamp } = note;

    return (
        <article className="grid grid-cols-10  pt-2 rounded-lg bg-white note-row">
            <div className="grid col-span-8 bg-none pl-5 pb-4">
                <div className="grid flex items-center row-span-3">
                    <div className="rounded-lg bg-base-100 w-full shadow-xl">
                        <div className="flex flex-col p-4">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <p>Title</p>
                                    <h1 className="text-lg text-white">{title}</h1>
                                </div>
                                <div>
                                    <p className="text-base text-xs">Date: {timestamp}</p>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p>Details</p>
                                <p className="text-white text-xl">{textarea}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex flex-col justify-start items-center pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                <div className="pt-8">
                <h1>{category}</h1>
                </div>
            </div>
        </article>
    )
}

export default PostedNote;