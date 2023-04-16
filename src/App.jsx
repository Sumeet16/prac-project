import { useState } from 'react'
import './App.css'
import footer from "./assets/footer.png"
import menuBar from "./assets/menu-bar.png"
import menuTab from "./assets/menu-tab.png"
import deleteTab from "./assets/delete.png"
import navbar from "./assets/navbar.png"
import script from "./assets/script.png"

function App() {
  let date = new Date()
  console.log(date);
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
        <div className="second-col"></div>
      </div>
      <img src={footer} className='footer' />

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

        <div className="play_pause_btn">
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
            <p className="light_yellow_box">Bot has stopped.</p>
          </div>
          <div className="second_row">
            <p className="normal_text">Attempting to Buy</p>
            <p className="normal_text">Buy succeeded</p>
            <p className="normal_text">Contract closed</p>
          </div>
          <div className="third_row">
            <div className="progress_bar">
              <div className="bar"></div>
            </div>
            <div className="progress_points"></div>
            <div className="progress_points"><div className="animation_dot animate"></div></div>
            <div className="progress_points"></div>
          </div>
          <div className="fourth_row">
            <p className="light_yellow_box triangle">Buy amount: 1.00</p>
            <p className="light_yellow_box triangle">ID: 408217600088</p>
            <p className="light_yellow_box triangle">ID: 408217610028</p>
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
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
              <tr>
                <td>2023-04-15 02:08:30 GMT+0530</td>
                <td>408217600088</td>
                <td>DIGITDIFF</td>
                <td>6638.483</td>
                <td>6638.483</td>
                <td>1.00</td>
                <td>0.09</td>
                <td>Settled</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table_box result">
          <table className='result_table' style={{overflow: "hidden"}}>
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
                <td>15</td>
                <td>15.00</td>
                <td>16.35</td>
                <td>15</td>
                <td>0</td>
                <td>1.35</td>
                <td>9989.63 USD</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="disclaimer">Stopping the bot will prevent further trades. Any ongoing trades will be completed by our system. Please be aware that some completed transactions may not be displayed in the table if the bot is stopped while placing trades. You may refer to the Binary.com statement page for details of all completed transactions.</p>
      </div>
    </div>
  )
}

export default App;
