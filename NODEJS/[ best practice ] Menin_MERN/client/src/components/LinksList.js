import React from "react";
import { Link } from "react-router-dom";
import "./LinksList.css";

const LinksList = ({ links }) => {
    //FIXME: CONSOLE LOG ===========>
    console.log("LONKS ====== ");
    //FIXME: CONSOLE LOG ===========>
    console.log(links);

    if (!Array.isArray(links) && links.length) {
        return <p className='center'>Ссылок нету</p>;
    }

    return (
        <div>
            <table className='highlight'>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Оригинал</th>
                        <th>Сокращенная</th>
                        <th>Открыть</th>
                    </tr>
                </thead>

                <tbody>
                    {links.map((link, index) => {
                        return (
                            <tr key={link._id}>
                                <td className='b-right'>{index + 1}</td>
                                <td className='text-wrap b-right'>
                                    {link.from}
                                </td>
                                <td className='text-wrap b-right'>{link.to}</td>
                                <td>
                                    <Link to={`/detail/${link._id}`}>+</Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default LinksList;
