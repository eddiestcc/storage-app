import '../../CSS/Rental.css';

const Rental = () => {
    return(
        <article>
            {/* CUSTOMER INFORMATION START  */}
            <main id="customer-information" className="ba ph0 mh0 pa4 black-80">
                <div className='rental-wrapper'>
                    <div className='column'>
                            {/* FIRST COLUMN START */}
                            <div className="mt3">
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    FIRST NAME
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    LAST NAME
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    PRIMARY PHONE NUMBER
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    SECONDARY PHONE NUMBER
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    EMAIL ADDRESS
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                            </div>
                            {/*  FIRST COLUMN END  */}
                    </div>
                    <div className='column'>
                            {/* SECOND COLUMN START */}
                            <div className="mt3">
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    IDENTIFICATION TYPE
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    IDENTIFICATION NUMBER
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    IDENTIFICATION EXPIRATION
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                            </div>
                            {/*  SECOND COLUMN END  */}
                    </div>
                    <div className='column'>
                        {/* THIRD COLUMN START */}
                        <div className="mt3">
                            <label 
                                className="db fw6 lh-copy f6" 
                                htmlFor="">
                                STREET
                            </label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="STREET" 
                                name="STREET"  
                                id="STREET"
                            />
                            <label 
                                className="db fw6 lh-copy f6" 
                                htmlFor="">
                                UNIT
                            </label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="UNIT" 
                                name="UNIT"  
                                id="UNIT"
                            />
                            <label 
                                className="db fw6 lh-copy f6" 
                                htmlFor="">
                                CITY
                            </label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="CITY" 
                                name="CITY"  
                                id="CITY"
                            />
                            <label 
                                className="db fw6 lh-copy f6" 
                                htmlFor="">
                                STATE
                            </label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="STATE" 
                                name="STATE"  
                                id="STATE"
                            />
                            <label 
                                className="db fw6 lh-copy f6" 
                                htmlFor="">
                                ZIPCODE
                            </label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="ZIPCODE" 
                                name="ZIPCODE"  
                                id="ZIPCODE"
                            />
                             {/*  THIRD COLUMN END  */}
                        </div>
                    </div>
                </div>
            </main>
            {/* CUSTOMER INFORMATION END  */}
            {/* GOODS SECTION START  */}
            <main id="goods" className="ba ph0 mh0 pa4 black-80">
                <div className='rental-wrapper'>
                    <div className='column'>
                            {/* FIRST COLUMN START */}
                            <div className="mt3">
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    GOODS
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                            </div>
                            {/*  FIRST COLUMN END  */}
                    </div>
                    <div className='column'>
                            {/* SECOND COLUMN START */}
                            <div className="mt3">
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    VALUE OF GOODS
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                            </div>
                            {/*  SECOND COLUMN END  */}
                    </div>
                </div>
            </main>
            {/* GOODS SECTION END  */}
            {/* INSURANCE SECTION START  */}
            <main id="insurance" className="ba ph0 mh0 pa4 black-80">
                <div className='rental-wrapper'>
                    <div className='column'>
                            {/* FIRST COLUMN START */}
                            <div className="mt3">
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    INSURANCE
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                            </div>
                            {/*  FIRST COLUMN END  */}
                    </div>
                </div>
            </main>
            {/* INSURANCE SECTION END  */}
            {/* UNIT SELECTION START  */}
            <main id="unit-selection" className="ba ph0 mh0 pa4 black-80">
                <div className='rental-wrapper'>
                    <div className='column'>
                            {/* FIRST COLUMN START */}
                            <div className="mt3">
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    SELECT UNIT
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                            </div>
                            {/*  FIRST COLUMN END  */}
                    </div>
                    <div className='column'>
                            {/* SECOND COLUMN START */}
                            <div className="mt3">
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    EXPECTED MOVE IN DATE
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                            </div>
                            {/*  SECOND COLUMN END  */}
                    </div>
                </div>
            </main>
            {/* UNIT SELECTION END  */}
            {/* QUESTIONS START  */}
            <main id="questions" className="ba ph0 mh0 pa4 black-80">
                <div className='rental-wrapper'>
                    <div className='column'>
                            {/* FIRST COLUMN START */}
                            <div className="mt3">
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    TEST QUESTION HERE?
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                                 <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    TEST QUESTION HERE?
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                            </div>
                            {/*  FIRST COLUMN END  */}
                    </div>
                    <div className='column'>
                            {/* SECOND COLUMN START */}
                            <div className="mt3">
                                <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    TEST QUESTION HERE?
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                                 <label 
                                    className="db fw6 lh-copy f6" 
                                    htmlFor="">
                                    TEST QUESTION HERE?
                                </label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="" 
                                    name=""  
                                    id=""
                                />
                            </div>
                            {/*  SECOND COLUMN END  */}
                    </div>
                </div>
            </main>
            {/* UNIT SELECTION END  */}
        </article>
    )
}

export default Rental;