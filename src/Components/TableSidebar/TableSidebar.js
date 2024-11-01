
const TableSidebar = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="flex btn btn-primary drawer-button lg:hidden">
                    Filters
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <button className="btn text-white text-2xl w-96">Filter</button>
                <ul className="rounded-lg bg-base-100 w-96 text-base-content min-h-full p-10">
                    {/* Sidebar content here */}
                    <div className="flex justify-center pb-5">
                        <li className="btn btn-outline w-full">Mock</li>
                    </div>
                    <div className="flex justify-center pb-5">
                        <li className="btn btn-outline w-full">Mock</li>
                    </div>
                    <div className="flex justify-center pb-5">
                        <li className="btn btn-outline w-full">Mock</li>
                    </div>
                    <div className="flex justify-center pb-5">
                        <li className="btn btn-outline w-full">Mock</li>
                    </div>
                    <div className="flex justify-center pb-5">
                        <li className="btn btn-outline w-full">Mock</li>
                    </div>
                </ul>
            </div>
      </div>
    )
}

export default TableSidebar;