import React from "react";
import { useState, useEffect } from "react";
import Axios from 'axios';
import '../app.css'

function DataFetch() {
    const [data, setData] = useState([]);
    const [post, setPost] = useState("");



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((data) => {
            setData(data.slice(0,10));

        })
    }, []);

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(post.toLowerCase())
    );



    return (

        <>
            <div className=" flex flex-col justify-around items-center p-5 ">
                <input type="text" value={post} placeholder="Search" onChange={(e) => setPost(e.target.value)} className="border-2 border-gray-700 px-10 py-3 w-96 rounded-md bg-gray-100 text-lg  " />
                <h1 className="text-2xl font-bold mt-5 text-center">Details of the User</h1>
                {data.length>0 &&(<table className="border-collapse border border-gray-400 w-full mt-5 ">
                    <thead>
                        <tr className="bg-purple-200">
                            <th className="border border-gray-400 px-4 py-2">ID</th>
                            <th className="border border-gray-400 px-4 py-2">Title</th>
                            <th className="border border-gray-400 px-4 py-2">Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((values) => (
                                <tr key={values.id} className="hover:bg-purple-100">
                                    <td className="border border-gray-400 px-4 py-2">
                                        {values.id}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {values.title}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {values.body}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="text-center text-gray-500 py-4 italic"
                                >
                                    No matching titles found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>)}


            </div>
        </>

    );
};
export default DataFetch;