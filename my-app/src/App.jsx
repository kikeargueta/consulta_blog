import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [showPosts, setShowPosts] = useState(false); // Nuevo estado para mostrar publicaciones

    const fetchData = async () => {
        const response = await fetch('https://api.vercel.app/blog');
        const data = await response.json();
        setPosts(data);
        setShowPosts(true); // Cambia el estado a verdadero al obtener datos
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Blog Posts</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Categoría</th>
                    </tr>
                </thead>
                <tbody>
                    {showPosts && posts.map(post => ( // Muestra publicaciones solo si showPosts es verdadero
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td>{post.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={fetchData} style={{ marginTop: '20px' }}>
                Consultar
            </button>
        </div>
    );
};

export default App;
