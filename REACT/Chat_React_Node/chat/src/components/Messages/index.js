//NOTE/: external library --->
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

//NOTE/: ant library --->
import { Empty, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

//NOTE/: internal library --->
import { Message } from "../";
import "./Messages.scss";

const Messages = ({ blockRef, isLoading, items }) => {
    const antIcon = <LoadingOutlined style={{ fontSize: 35 }} spin />;
    return (
        <div
            ref={blockRef}
            className={classNames("messages", {
                "messages--loading": isLoading,
            })}
        >
            {isLoading ? (
                // <Spin size='large' tip='Загрузка сообшений' />
                <Spin indicator={antIcon} />
            ) : items && !isLoading ? (
                items.length > 0 ? (
                    items.map((item) => <Message key={item._id} {...item} />)
                ) : (
                    <Empty description='Диалог пуст' />
                )
            ) : (
                <Empty description='Начните диалог' />
            )}
        </div>
    );
};

Messages.propTypes = {
    items: PropTypes.array,
};

export default Messages;
