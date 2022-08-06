import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

function GuiderReception5(props) {
    const response = props.response;
    return (
        <div class="guider-content_content" >
            <p class="title"> ** 5. Phần DEBIT **</p>
            <span>----</span>
            <h1>* Một phần khác mới của các báo cáo Azumaya.</h1>
            <p>** Hiện tại đang trong thời gian phát triển **</p>

            <h1>5.1 Tổng quản về DEBIT</h1>
            <p>Nhiệm của của phần DEBIT này</p>
            <ul>
                <li>Thu thập các DEBIT từ SUM lễ tân</li>
                <li>Hỗ trợ theo dõi, đẩy dữ liệu về SUM khi cần</li>
            </ul>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629049150/Web%20report%20Project/Guider/sum_debit_list_iyvefc.png"
                    alt="action list"
                />
                <p >Danh sách Action - DEBIT</p>
            </div>
            <br />
            <h1>5.2 Bảng tính năng tương ứng với các DEBIT</h1>

            <table class="table">
                <thead class="table-primary">
                    <tr>
                        <th scope="col">Loại DEBIT</th>
                        <th scope="col">Sử dụng khi ?</th>
                        <th scope="col">Tính Năng</th>
                        <th scope="col">Note</th>
                    </tr>
                </thead>
                <tr class="table-warning">
                    <td>DEBIT CHECK IN</td>
                    <td>Khách check in ngày hôm sau</td>
                    <td>Tự quay trở lại Sum ngày hôm sau.</td>
                    <td>Đã có thể sử dụng</td>
                </tr>
                <tr class="table-success">
                    <td>DEBIT CANCEL</td>
                    <td>Khách hủy phòng</td>
                    <td rowspan="4">
                        <ul>
                            <li>Theo dõi và nhắc nhở các bộ phận xem khách đã thanh toán chưa.( thông báo hoặc mail).</li>
                            <li>Tự nhập vào dữ liệu Sum lễ tân khi khách đã thanh toán.</li>
                        </ul>
                    </td>
                    <td rowspan="4" class="op-redcolor op-fontweight600" >Chưa thể sử dụng</td>
                </tr>
                <tr class="table-warning">
                    <td>DEBIT PAY</td>
                    <td>Khách báo muốn thay toán sau</td>

                </tr>
                <tr class="table-success">
                    <td>DEBIT COMPANY</td>
                    <td>Khách công ty thanh toán</td>

                </tr>
                <tr class="table-warning">
                    <td>DEBIT NO SHOW</td>
                    <td>Khách no-show</td>
                </tr>
            </table>
            <div class="img" >
                <p >Bảng tính năng DEBIT</p>
            </div>
            <br />
            <h1>5.3 Tìm kiếm DEBIT</h1>
            <ul>
                <li>Hỗ trợ tìm kiếm theo tháng và theo năm</li>
                <li>Nếu chỉ chọn năm để nguyên dòng tháng thì sẽ tìm nguyên dữ liệu 1 năm</li>
                <li>Nếu cần theo tháng thì chọn năm/ tháng tương ứng.</li>
            </ul>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629049883/Web%20report%20Project/Guider/sum_debit_search_zpf6pb.png"
                    alt="search debit"
                />
                <p >Cách tìm kiếm DEBIT</p>
            </div>
            <ul>
                <li>Hệ thống cũng hỗ trợ lọc theo các tiêu chí ở trên thanh trạng thái</li>
                <li>Ngoài ra phần tìm kiếm cũng hỗ trợ full chức năng ( tìm tên, hóa đơn, ngày tháng, ...)</li>
                <li>Có thể kết hợp cả lọc dữ liệu và tìm kiếm </li>
            </ul>
            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629050080/Web%20report%20Project/Guider/sum_debit_filter_find_y62ldu.png"
                    alt="filter and find debit"
                />
                <p >Lọc dữ liệu và tìm kiếm chi tiết DEBIT</p>
            </div>
            <br />
            <h1>5.4 Xác nhận khách đã thanh toán</h1>
            <p>Khi muốn thanh toán các hóa đơn trong DEBIT</p>
            <p>Chúng ta sẽ check và phần "Debit ?" và xác nhận yêu cầu`</p>
            <p>Trong mục DEBIT này giống kiểu chúng ta theo dõi thực tế, nếu hóa đơn đã thanh toán thì cần vào trong để xác nhận paid đã thanh toán, còn không hệ thống vẫn hiểu hóa đơn này chưa thanh toán và thực hiên nhắc nhở theo qui định</p>
            <p>* Chú ý phần DEBIT CHECK IN sẽ tự được thanh toán nếu ngày nộp sau hôm sau có số hóa đơn này</p>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629050744/Web%20report%20Project/Guider/sum_debit_change_paid_ztmatb.png"
                    alt="change paid status"
                />
                <p >Thay đổi trạng thái thanh toán</p>
            </div>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629050881/Web%20report%20Project/Guider/sum_debit_confirm_eybulf.png"
                    alt="confirm change"
                />
                <p >Xác nhận thay đổi</p>
            </div>

            <div class="img" >
                <img
                    class="img-link"
                    src="https://res.cloudinary.com/dsm20cmen/image/upload/v1629050880/Web%20report%20Project/Guider/sum_debit_changed_paid_j1ixp4.png"
                    alt="changed paid"
                />
                <p >Hệ thống đã chuyển khách về PAID (bỏ theo dõi khách này )</p>
            </div>
        </div >
    );
}

export default GuiderReception5;