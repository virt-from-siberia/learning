import React, { useState, useContext, useCallback, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";
import LinksList from "../components/LinksList";

function LinksPage() {
    const [links, setLinks] = useState([]);
    const { loading, request } = useHttp();
    const { token } = useContext(AuthContext);

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request("/api/link", "GET", null, {
                Authorization: `Bearer ${token}`,
            });

            setLinks(fetched);
        } catch (err) {}
    }, [token, request]);

    useEffect(() => {
        fetchLinks();
    }, [fetchLinks]);

    if (loading) {
        return <Loader />;
    }
    //FIXME: CONSOLE LOG ===========>
    console.log(links);

    return <div>{!loading && <LinksList links={links} />}</div>;
}

export default LinksPage;
