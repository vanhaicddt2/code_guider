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
                <li>RC MAKE SUM: Thục hiện tạo các bản báo cáo Sum.</li>
                <li>RC DEBIT: Hỗ trợ theo dõi các HI đã được note Debit  theo qui định.</li>
            </ul>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1628885312/Web%20report%20Project/Guider/reception_home_pw7qu8.png"
                    alt="Reception home"
                />
                <p > Giao diện trang chủ. </p>
            </div>
        </div >
    );
}

export default GuiderReception;