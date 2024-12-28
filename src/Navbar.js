const Navbar = () => {
    const handleClick = () => {
        console.log('hello baby')
    }

    return ( 
        <nav className="navbar">
            <h1>Dojo Blog </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" onClick={handleClick} style={{
                    color: 'white',
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;