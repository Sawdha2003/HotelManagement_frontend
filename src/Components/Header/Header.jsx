import UserTag from "../UserData/UserTag";

function Header() {
    return (
        <header className='w-full bg-blue-500 h-[100px] relative flex items-center p-[10px]'>
            <h1 className='text-white text-[30px]'>City Lodge</h1>

            <UserTag 
                imageLink="https://cdn-icons-png.freepik.com/512/219/219966.png" 
                name="Name1" 
            />
        </header>
    );
}

export default Header;
