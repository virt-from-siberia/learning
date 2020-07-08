//NOTE/: external library --->
import React, { Component } from "react";
import { Route } from "react-router-dom";

//NOTE/: ant library --->
import {
    UsergroupAddOutlined,
    FormOutlined,
    EllipsisOutlined,
    BgColorsOutlined,
} from "@ant-design/icons";

//NOTE/: internal library --->
// import dialogsJSON from "../../utils/dialogsJSON.JSON";
import { Status, ChatInput } from "../../components";
import { Dialogs, Messages } from "../../containers";

import "./Home.scss";

const Home = () => (
    <section className='home'>
        <div className='chat'>
            <div className='chat__sidebar'>
                <div className='chat__sidebar-header'>
                    <div>
                        <UsergroupAddOutlined className='user-img' />
                        <span>Список диалогов</span>
                    </div>

                    <FormOutlined />
                </div>

                {/* //NOTE/: Dialogs ============> */}

                <div className='chat__sidebar-dialogs'>
                    <Dialogs userId={0} />
                </div>
            </div>
            <div className='chat__dialog'>
                <div className='chat__dialog-header'>
                    <div />
                    <div className='chat__dialog-center'>
                        <div className='message__avatar'>
                            <img
                                src='https://sun1-26.userapi.com/RXgH_63RSfa1kxPgodBlG7Suz1GHo-WZH3gc3Q/yKZlq0Mk6mA.jpg?ava=1'
                                alt='avatar'
                            />
                        </div>
                        <div>
                            <b className='chat__dialog-username'>Юлий Цезарь</b>
                            <div className='chat__dialog-status'>
                                <Status online={true} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <BgColorsOutlined
                            style={{
                                paddingRight: "20px",
                                fontSize: "20px",
                                cursor: "pointer",
                            }}
                        />
                        <EllipsisOutlined
                            className='img'
                            style={{ fontSize: "16px", cursor: "pointer" }}
                        />
                    </div>
                </div>
                <div className='chat__dialog-messages'>
                    <Messages />
                </div>
                <div className='chat__dialog-input'>
                    <ChatInput />
                </div>
            </div>
        </div>

        {/* <Dialogs
            userId={0}
            items={[
                {
                    _id: "0fa84045bfb9ebaff64300f47d2ad1e7",
                    text: "123 свидетельствуем Мы все свидетельствуем",
                    created_at: "Tue Apr 13 2020 21:44:19",
                    user: {
                        _id: "0fa84045bfb9ebaff64300f47d2ad1e7",
                        fullname: "asdй",
                        avatar: null,
                    },
                },
                {
                    _id: "Math.random()",
                    text: "Привет как твои дела ?",
                    created_at: "Tue Apr 12 2020 21:44:19",
                    user: {
                        _id: "as32423k322423j34h34k334534k53534",
                        fullname: "Михаел Жванетский",
                        avatar:
                            "https://24smi.org/public/media/celebrity/2017/11/22/nwv7kqyvs72t-alan-tiuring.jpg",
                    },
                },
            ]}
        /> */}
    </section>
);
export default Home;
