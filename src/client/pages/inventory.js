import NavBar from "@/components/navBar/navBar";

const Inventory = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <h2 className="text-4xl font-bold py-10 mx-20">My Inventory</h2>
                <div className="h-10"></div>
                <div className="w-[90vw] glass-effect mx-20 flex flex-row items-center justify-between relative">
                    <div className="flex flex-col items-center justify-center m-10">
                        <h1 className="text-2xl">Sales and Orders</h1>
                        <a className="py-2 px-10 rounded-3xl bg-violet-700 mt-10" href="/sales"> &rarr; </a>
                    </div>
                    <div className="flex flex-col items-center justify-center m-10">
                        <h1 className="text-2xl">Sales and Orders</h1>
                        <a className="py-2 px-10 rounded-3xl bg-violet-700 mt-10" href="/sales"> &rarr; </a>
                    </div>
                    <div className="flex flex-col items-center justify-center m-10">
                        <h1 className="text-2xl">Sales and Orders</h1>
                        <a className="py-2 px-10 rounded-3xl bg-violet-700 mt-10" href="/sales"> &rarr; </a>
                    </div>
                    <a className="absolute bottom-3 right-3" href="/"></a>
                </div>
            </div>
        </div>
    )
}

export default Inventory;