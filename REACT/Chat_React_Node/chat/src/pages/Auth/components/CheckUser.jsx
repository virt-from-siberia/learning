//NOTE: external library --->
import React, { useEffect, useState } from "react";
import { Result, Button } from "antd";

//NOTE: internal library --->
import { userApi } from "../../../utils/api";

const renderTextInfo = (hash, verified) => {
    if (hash) {
        if (verified) {
            return {
                status: "success",
                message: "Аккаунт успешно подтверждён!",
            };
        } else {
            return {
                status: "error",
                message: "Ошибка при подтверждении аккаунта!",
            };
        }
    } else {
        return {
            status: "success",
            message: "Ссылка с подтверждением аккаунта отправлена на E-mail",
        };
    }
};

const CheckUser = ({ location, history }) => {
    console.log(location);

    const [verified, setVerified] = useState(false);
    const hash = location.search.split("hash=")[1];
    const info = renderTextInfo(hash, verified);

    useEffect(() => {
        if (hash || "") {
            userApi.verifyHash(hash).then(({ data }) => {
                console.log(data);
                if (data.status === "success") {
                    setVerified(true);
                }
            });
        }
    });

    return (
        <Result
            status={info.status}
            title={info.message}
            subTitle=''
            extra={
                info.status === "success" &&
                verified && (
                    <Button
                        type='primary'
                        key='console'
                        onClick={() => history.push("/im")}
                    >
                        Войти
                    </Button>
                )
            }
        />
    );
};

export default CheckUser;
