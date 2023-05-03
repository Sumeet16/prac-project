import { useEffect, useState } from 'react'
import footer from "../assets/footer.png"
import menuTab from "../assets/menu-tab.png"
import deleteTab from "../assets/delete.png"
import navbar from "../assets/navbar.png"
import script from "../assets/script.png"
import infoIcon from "../assets/info.png"
import profitIcon from "../assets/tick.png"
import "./home.css"
import moment from 'moment';


const home = () => {
    const [resultData, setResultData] = useState([]);
    const [resultDataa, setResultDataa] = useState([]);
    const [date, setDate] = useState(new Date());
    const [Width, setWidth] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [pTotalStake, setpTotalStake] = useState(0);
    const [indexCounter, setindexCounter] = useState(0);
    const [payout, setPayout] = useState(0);
    const [pProfit, setpProfit] = useState(0);
    const [pBalance, setpBalance] = useState(parseInt(localStorage.getItem("balance")));
    const [pWin, setpWin] = useState(0);
    const [points, setPoints] = useState(0);
    const [pRandomNumber, setpRandomNumber] = useState(0);

    let index = 0;
    let randomNumber = 0;
    const tradeValue = parseInt(localStorage.getItem("value"));
    const trade = localStorage.getItem("trade")
    let totalStake = 0;
    let totalPayout = 0;
    let profit = 0;
    let balance = parseInt(localStorage.getItem("balance"));
    let datee = moment().format()
    var dateArray = datee.split('T').join(', ').split('+').join(', ').split(', ');

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        var timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    const _addIt = () => {
        var refNo = parseInt(localStorage.getItem("reference"));
        const clock = new Date();
        const time = `${dateArray[0]} ${clock.toLocaleTimeString()} GMT+0530`;

        const arr = {
            ref: refNo,
            status: "Pending",
            timestamp: time
        }
        const arrr = {
            ref: refNo,
            entry: 2333.234,
            exit: 2333.234,
            profit: 0.09,
            status: "Settled",
            timestamp: time
        }

        setTimeout(() => {
            setTimeout(() => {
                index += 1;
                randomNumber = Math.floor(Math.random() * 10);
                setpRandomNumber(randomNumber)
                refNo = refNo + randomNumber;
                console.log(refNo);
                setindexCounter(index)
                totalStake += tradeValue;
                setpTotalStake(totalStake)
                setIsRunning(true)
                setResultDataa(arr)
                setWidth(50)
                setPoints(50)
                setTimeout(() => {
                    setPoints(0)
                }, 3500);
                setTimeout(() => {
                    setResultDataa(arrr)
                    setWidth(100)
                    setPoints(100)
                    setTimeout(() => {
                        setPoints(0)
                    }, 2000);
                    if (trade == "DIGITDIFF") {
                        totalPayout = totalPayout + tradeValue + (tradeValue * 0.09)
                        setPayout(totalPayout)
                        profit += (tradeValue * 0.09)
                        setpProfit(profit)
                        balance += (tradeValue * 0.09)
                        setpWin(index)
                        setpBalance(balance)
                    }
                    setTimeout(() => {
                        setResultDataa([])
                        setResultData((perv) => [...perv, arrr])
                        setWidth(0)
                        if (index < localStorage.getItem("times")) {
                            _addIt();
                        } else {
                            setIsRunning(false)
                        }
                    }, 1000);
                }, 5000);
            }, 1000);
        }, 1000);
    }

    return (
        <div className="container">
            <img src={navbar} className='navbar' />
            <img src={menuTab} className='menuTab' />
            <div className="middle_section">
                <div className="first-col">
                    <ul>
                        <li>Logic</li>
                        <li>Math</li>
                        <li>Text</li>
                        <li><svg width="0.65rem" height="0.65rem" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <rect width="16" height="16" id="icon-bound" fill="none" /> <polygon points="8,3 16,11 0,11" /> </g>

                        </svg>Advanced</li>
                        <li><svg width="0.65rem" height="0.65rem" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" transform="rotate(180)">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <rect width="16" height="16" id="icon-bound" fill="none" /> <polygon points="8,3 16,11 0,11" /> </g>

                        </svg>Binary</li>
                    </ul>
                </div>
                <div className="second-col">
                    <img src={script} style={{ width: "30%", position: "absolute", top: "20%", left: "15%" }} />
                </div>
            </div>
            <img src={footer} className='footer' />
            <p className="time">{dateArray[0]} {date.toLocaleTimeString()} GMT</p>
            <div className="infobar" style={points == 50 ? { "--points": `0.6rem` } : { "--points": `-4rem` }}>
                <div className="i-bar">
                    <img src={infoIcon} />
                    <p>Bought: Win payout if the last digit of Volatility 10 Index is not {pRandomNumber} after 1 tick. (ID: 411172145448)</p>
                </div>
            </div>
            <div className="infobar short" style={points == 100 ? { "--points": `0.6rem` } : { "--points": `-4rem` }}>
                <div className="profit-bar">
                    <img src={profitIcon} />
                    <p>Profit amount: 0.09</p>
                </div>
            </div>

            <div className="bot_container">
                <div className="summary_box">
                    <p className="title">Summary</p>
                    <div className="btns">
                        <span className="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffff" width="1rem" height="1rem" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" /></svg>
                        </span>
                        <span className="btn">
                            <svg width="1rem" height="1rem" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>close</title>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Combined-Shape" fill="#ffff" transform="translate(91.581722, 91.581722)">
                                        <path d="M298.666667,4.26325641e-14 L328.836556,30.1698893 L194.587,164.418 L328.836556,298.666667 L298.666667,328.836556 L164.418,194.587 L30.1698893,328.836556 L9.9475983e-14,298.666667 L134.248,164.418 L7.10542736e-14,30.1698893 L30.1698893,4.26325641e-14 L164.418,134.248 L298.666667,4.26325641e-14 Z" transform="translate(164.418278, 164.418278) rotate(-360.000000) translate(-164.418278, -164.418278) ">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="play_pause_btn" onClick={_addIt} >
                    <div className="fir_box"></div>
                    <div className="first_box">
                        <svg fill="#000000" width="0.9rem" height="0.9rem" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                            <path d="M175 .024V1920l1570.845-959.927z" fill-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="first_box">
                        <img src={deleteTab} />
                    </div>
                </div>

                <div className="result_box">
                    <div className="first_row">
                        <p className={isRunning ? "light_green_box" : "light_yellow_box"}>{isRunning ? "Bot is running..." : "Bot has stopped."}</p>
                    </div>
                    <div className="second_row">
                        <p className="normal_text">Attempting to Buy</p>
                        <p className="normal_text">Buy succeeded</p>
                        <p className="normal_text">Contract closed</p>
                    </div>
                    <div className="third_row">
                        <div className="progress_bar">
                            <div className="bar" style={{ "--width": `${Width}%` }}></div>
                        </div>
                        <div className="progress_points">{Width == 0 && isRunning ? <div className="animation_dot animate"></div> : <></>}</div>
                        <div className={Width == 0 ? "progress_point" : "progress_points"}>{Width == 50 ? <div className="animation_dot animate"></div> : <></>}</div>
                        <div className={Width == 100 ? "progress_points" : "progress_point"}></div>
                    </div>
                    <div className="fourth_row">
                        <p className="light_yellow_box triangle" style={isRunning ? { visibility: "visible" } : { visibility: "hidden" }}>Buy amount: 1.00</p>
                        <p className="light_yellow_box triangle" style={Width != 0 ? { visibility: "visible" } : { visibility: "hidden" }}>ID: 408217600088</p>
                        <p className="light_yellow_box triangle" style={Width == 100 ? { visibility: "visible" } : { visibility: "hidden" }}>ID: 408217610028</p>
                    </div>
                </div>

                <div className="table_box">
                    <table>
                        <tr>
                            <th>Timestamp</th>
                            <th>Reference</th>
                            <th>Trade Type</th>
                            <th>Entry Spot</th>
                            <th>Exit Spot</th>
                            <th>Buy Price</th>
                            <th>Profit/Loss</th>
                            <th>Status</th>
                        </tr>
                        <tbody>
                            {resultDataa.ref ? <tr>
                                <td>{resultDataa.timestamp}</td>
                                <td>{resultDataa.ref}</td>
                                <td>{localStorage.getItem("trade")}</td>
                                <td>{resultDataa.entry}</td>
                                <td>{resultDataa.exit}</td>
                                <td>{localStorage.getItem("value")}</td>
                                <td>{resultDataa.profit}</td>
                                <td>{resultDataa.status}</td>
                            </tr> : <></>}
                            {resultData.map((elem, index) => {
                                return (
                                    <tr>
                                        <td>{elem.timestamp}</td>
                                        <td>{elem.ref}</td>
                                        <td>{localStorage.getItem("trade")}</td>
                                        <td>{elem.entry}</td>
                                        <td>{elem.exit}</td>
                                        <td>{localStorage.getItem("value")}</td>
                                        <td>{elem.profit}</td>
                                        <td>{elem.status}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="table_box result">
                    <table className='result_table' style={{ overflow: "hidden" }}>
                        <tr>
                            <th>Account</th>
                            <th>No. of runs	</th>
                            <th>Total stake	</th>
                            <th>Total payout	</th>
                            <th>Win</th>
                            <th>Loss</th>
                            <th>Total profit/loss	</th>
                            <th>Balance</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>VRTC3213746</td>
                                <td>{indexCounter}</td>
                                <td>{pTotalStake}.00</td>
                                <td>{payout.toFixed(2)}</td>
                                <td>{pWin}</td>
                                <td>0</td>
                                <td>{pProfit.toFixed(2)}</td>
                                <td>{pBalance.toFixed(2)} USD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="disclaimer">Stopping the bot will prevent further trades. Any ongoing trades will be completed by our system. Please be aware that some completed transactions may not be displayed in the table if the bot is stopped while placing trades. You may refer to the Binary.com statement page for details of all completed transactions.</p>
            </div>
        </div>
    )
}

export default home