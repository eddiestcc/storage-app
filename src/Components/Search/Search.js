const Search = () => {
    return(
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m  tc mw6 center shadow-5">
            <main className="pa4 black-80">
                            <div>
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                    <legend className="f4 fw6 ph0 mh0">Search</legend>
                                    {/* NAME START */}
                                    <div className="mt3">
                                        <label 
                                            className="db fw6 lh-copy f6" 
                                            htmlFor="NAME">
                                            NAME
                                         </label>
                                        <input 
                                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                            type="NAME" 
                                            name="NAME"  
                                            id="NAME"
                                        />
                                    </div>
                                    {/* NAME END  */}
                                    {/* PHONE NUMBER START */}
                                      <div className="mt3">
                                        <label 
                                            className="db fw6 lh-copy f6" 
                                            htmlFor="PHONE NUMBER ">
                                            PHONE NUMBER 
                                         </label>
                                        <input 
                                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                            type="PHONE NUMBER " 
                                            name="PHONE NUMBER"  
                                            id="PHONE NUMBER"
                                        />
                                    </div>
                                    {/* PHONE NUMBER  END  */}
                                      {/* EMAIL START */}
                                      <div className="mt3">
                                        <label 
                                            className="db fw6 lh-copy f6" 
                                            htmlFor="EMAIL">
                                            EMAIL
                                         </label>
                                        <input 
                                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                            type="email" 
                                            name="email-address"  
                                            id="email-address"
                                        />
                                    </div>
                                    {/* EMAIL END  */}
                                </fieldset>
                            </div>
                        </main>
        </article>
    )
}

export default Search;