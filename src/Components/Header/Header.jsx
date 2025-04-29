

function Header() {
    return (
        <header className="w-full h-[100px] relative flex items-center justify-between px-4 bg-white z-10 shadow-lg">

            <img 
             src="\Images\moonlight_new.png" 
             alt="Logo"
             className="w-[80px] h-[80px] object-contain"
            />

<ul className="flex gap-8 text-[#533e3e] font-Poppins text align-left">
    <li>
        <a href="#home" className="text-[#533e3e]">Home</a>
    </li>
    <li>
        <a href="#about" className="text-[#533e3e]">About</a>
    </li>
    <li>
        <a href="#facilities" className="text-[#533e3e]">Facilities</a>
    </li>
    <li>
        <a href="#rooms" className="text-[#533e3e]">Rooms</a>
    </li>
    <li>
        <button className="text-[#533e3e] border border-[#533e3e] px-4 py-1 rounded hover:bg-[#533e3e] hover:text-white transition" href="Login.jsx">
            Register
        </button>
    </li>
</ul>

        </header>
    );
}

export default Header;
