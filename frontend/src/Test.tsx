const Test = () => {
    return (
        <div className="h-screen">
            <div className="flex flex-col items-center h-full gap-6">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" />
                <h1 className="lg:text-5xl text-4xl font-bold text-center flex flex-col w-4/5 md:w-3/5 lg:w-2/5">
                    <span >Find rentals, housemates, sublets, and coliving communities in the SF tech scene</span>
                </h1>
                <span className="text-center text-gray-600 text-lg lg:text-xl">The SF housing directory of people you probably know</span>
                <button className="bg-darkGreen text-white px-12 py-3 rounded-3xl text-xl">Apply</button>
                <span className="text-center text-gray-400 text-lg lg:text-xl">Have an account? Sign in</span>

                <div className="flex flex-row gap-4 justify-between items-center border border-gray-300 rounded-3xl p-4 mt-8">
                    <span><span className="text-blue-400 font-bold">1412</span> members of DirectorySF</span>
                    <span><span className="text-blue-400 font-bold">108</span> listings this month 🔥</span>

                </div>
            </div>
        </div>
    );
};

export default Test;

