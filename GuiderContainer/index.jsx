import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './guide.css'
import * as guiderApi from '../../api/guider';
GuiderContainer.propTypes = {
};

function GuiderContainer() {
    const paramCheck = window.location.href.includes('report/manual');
    const token = useSelector(state => state.token);
    const [headerSelect, setHeaderSelect] = useState();
    const [menuSelect, setMenuSelect] = useState({});
    const [content, setContent] = useState("");
    const [allDataGuider, setAllData] = useState("");
    const [header, setHeader] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        // console.log("headerSelect", headerSelect)
        setMenuSelect({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })
        if (headerSelect !== 0) setHeaderSelect(0)
        //    dispatch(changeHeader("Home"));
        if (token !== "") {
            updateNote();
        } else if (paramCheck) {
            updateNote();
        }
    }, [token]);

    useEffect(() => {
        const listMenu = Object.keys(content)
        if (listMenu.length > 0) {
            ref.current.innerHTML = content["" + listMenu[menuSelect["" + headerSelect]]];
        }
    }, [content])

    const updateNote = async () => {
        try {
            var response = [];
            if (paramCheck) {
                response = await guiderApi.getAllGuider();
            } else {
                response = await guiderApi.getGuider(token);
            }
            setContent(response.data[0].content);
            setAllData(response.data);
            setHeader(response.data.map(header => {
                return header.name
            }));
        } catch (error) {
            alert("error", error);
        }
        // ref.current.innerHTML = response.data[0].content["Đăng Nhâp"];
    }

    function onMenuClick(value, menu) {
        const newMenu = menuSelect;
        setMenuSelect({
            ...newMenu,
            [headerSelect]: value
        });
        ref.current.innerHTML = content["" + menu];
    }

    const onHeaderClick = async (value, menu) => {
        setHeaderSelect(value);
        setContent(allDataGuider[value].content);
    }

    function renderHeaderList() {
        // const listHeader = Object.keys(header)
        var result = [];
        if (header.length > 0) {
            header.forEach((header, index) => {
                result[index] = <li className={(headerSelect === index ? "active " : "") + " guider-menu_list-item mr-4"} key={index} onClick={() => onHeaderClick(index, header)}>
                    <h1>{header}</h1>
                </li>
            })
        }
        return result;
    }

    function renderMenuList() {
        const listMenu = Object.keys(content);
        var result = [];
        if (listMenu.length > 0) {
            listMenu.forEach((menu, index) => {
                result[index] = <li className={(menuSelect["" + headerSelect] === index ? "active " : "") + " guider-menu_list-item mb-4"} key={index} onClick={() => onMenuClick(index, menu, headerSelect)}>
                    <h1>{menu}</h1>
                </li>
            })
        }
        return result;
    }

    return (
        <div className="guider item-center ">
            <div className="guider-header d-flex">
                <ul className="guider-menu_list d-flex">
                    {renderHeaderList()}
                </ul>
            </div>
            <div className="d-flex" >
                <div className="guider-menu">
                    <ul className="guider-menu_list">
                        {renderMenuList()}
                    </ul>
                </div>
                <div className="guider-content" id="results" ref={ref}></div>
            </div>
        </div>
    );
}
export default GuiderContainer;


