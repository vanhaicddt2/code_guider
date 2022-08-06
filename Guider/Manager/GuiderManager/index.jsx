import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

function GuiderReception(props) {
    const response = props.response;
    return (
        <div class="guider-content_content" >
            <p class="title"> ** 1. Tổng Quan **</p>
            <span>----</span>
            <p>* Các tính năng chính của lễ tân bao gồm :.</p>
            <ul>
                <li>RC MAKE SUM: Thục hiện tạo các bản báo cáo Sum theo Manager.</li>
                <li>RC EXPECTED: Làm báo cáo expected.</li>
                <li>RC SUM: Nơi xem báo cáo của lễ tân.</li>
                <li>RC SUM: Nơi xem báo cáo của lễ tân.</li>
            </ul>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629082386/Web%20report%20Project/Guider/man_home_xvbzpd.png"
                    alt="man module view"
                />
                <p > Giao diện trang chủ. </p>
            </div>
        </div >
    );
}

export default GuiderReception;