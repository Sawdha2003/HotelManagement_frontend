import { useState } from "react";

export default function TestComponents() {
    // Declare a state for num
    const [num, setNum] = useState(0);  // Initialize with 0 or any value you want

    return (
        <div className="bg-red-900 w-full h-[100vh] flex justify-center items-center">
            <div className="bg-white w-[350px] h-[350px] flex justify-center items-center">
                <button
                    className="w-[60px] h-[60px] bg-blue-500 rounded-full text-2xl text-white"
                    onClick={() => {
                        setNum(num - 1);  // Update num when clicked
                        console.log(num - 1);
                    }}
                >
                    -
                </button>

                <span className="text-6xl mx-4">{num}</span> {/* Display num here */}

                <button
                    className="w-[60px] h-[60px] bg-blue-500 rounded-full text-2xl text-white"
                    onClick={() => {
                        setNum(num + 1);  // Update num when clicked
                        console.log(num + 1);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
}
