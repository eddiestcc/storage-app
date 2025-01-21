const LoadingOverlay = () => {
    return (

        <div id="loading-overlay" className="z-50 h-screen w-screen flex justify-center items-center absolute inset-0 bg-black opacity-50 hidden">
            <div className="flex flex-col items-center">
                <h1>Processing Payment</h1>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        </div>

    )
}

export default LoadingOverlay;