import {Navbar} from "@nextui-org/react";
import NavBar from "@/components/navBar/navBar";

const Buyer = () => {
    return (
        <>
            <NavBar/>
            <div className="mx-20 my-12">

                <div>
                    <h2 className="text-4xl font-bold py-10">Hello Souvik!</h2>
                </div>
                <h2 className="text-3xl font-bold">Are you are a <span className="text-violet-800 underline">seller</span> or a <a href="/buyer" className="text-white hover:text-violet-800">buyer</a>?</h2>
                <div>
                    <div className="domain-section-1 relative flex flex-col justify-between items-start">
                        <div className="flex flex-col justify-between  md:flex-row md:py-12 lg:flex-row lg:py-12">
                            <div className="h-10"></div>
                            <div className="glass-effect w-80 text-white">
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-2xl">My Inventory</h1>
                                    <a className="py-2 px-10 rounded-3xl bg-violet-700 mt-10" href="/inventory"> &rarr; </a>
                                </div>
                            </div>
                            <div className="glass-effect w-80 min-w-max text-white md:mx-16 lg:mx-16">
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-2xl">My listings</h1>
                                    <a className="py-2 px-10 rounded-3xl bg-violet-700 mt-10" href="/listing"> &rarr; </a>
                                </div>
                            </div>
                            <div className="glass-effect w-80 min-w-max text-white">
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-2xl">Sales and Orders</h1>
                                    <a className="py-2 px-10 rounded-3xl bg-violet-700 mt-10" href="/sales"> &rarr; </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buyer;
