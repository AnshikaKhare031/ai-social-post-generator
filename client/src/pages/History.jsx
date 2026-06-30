import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function History() {

    const [history, setHistory] = useState([]);

    const fetchHistory = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
            const data = await res.json();
            setHistory(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <div className="flex min-h-screen bg-[#F4EBD3]">

            <Sidebar />

            <div className="flex-1 p-10">

                <h1 className="text-3xl font-bold text-[#555879] mb-10">
                    Post History
                </h1>

                {history.length === 0 ? (
                    <p>No posts yet</p>
                ) : (
                    history.map((post) => (
                        <div key={post.id} className="bg-white p-4 rounded mb-4 shadow">

                            <p className="text-sm text-gray-400">
                                {post.product_name} • {post.platform} • {post.tone}
                            </p>

                            <p className="mt-2"><b>Hook:</b> {post.hook}</p>
                            <p><b>Caption:</b> {post.caption}</p>
                            <p className="text-blue-500">{post.hashtags}</p>

                        </div>
                    ))
                )}

            </div>

        </div>
    );
}

export default History;