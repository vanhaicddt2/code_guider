import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

function GuiderReception() {
    return (
        <div class="guider-content_content" >
            <p class="title"> ** 1. Tổng Quan **</p>
            <span>----</span>
            <p>* Các tính năng chính của Supervisor bao gồm :.</p>
            <ul>
                <li>RC SUM: Nơi xem báo cáo của lễ tân.</li>
                <li>RC Debit: Nơi xem Debit của lễ tân.</li>
                <li>SURVEY: Nơi làm báo cáo Survey.</li>
            </ul>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1647246340/Web%20report%20Project/Guider/Sup_home_ganwgi.png"
                    alt="man module view"
                />
                <p > Giao diện trang chủ. </p>
            </div>
        </div >
    );
}

export default GuiderReception;