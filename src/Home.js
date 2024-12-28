import { useState } from 'react';

const Home = () => {
    // let name = 'mario'
    const [name, setName] = useState('mario')
    const [age, setAge] = useState(10)

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum .....', author: 'mario', id: 1 },
        { title: 'welcome party!', body: 'lorem ipsum .....', author: 'yoshi', id: 2 },
        { title: 'web dev top tips', body: 'lorem ipsum .....', author: 'mario', id: 3 }
    ])

    const handleClick = () => {
        console.log('hello, ninjas')
        setName('luigi')
        setAge(25)
        console.log(name)
    }
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target)
    }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} yers old</p>
            <button onClick={handleClick} >Click me</button>
            <button onClick={(e) =>
                handleClickAgain('mario', e)
            }>Click me Again</button>

            <div className="home" style={{
                paddingTop:"10px"
            }}>
                {blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;