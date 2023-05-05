import React, { useState } from 'react'

const info = () => {
    const [Reference, setReference] = useState();
    const [Trade, setTrade] = useState("");
    const [Entry, setEntry] = useState();
    const [Exit, setExit] = useState();
    const [Tick, setTick] = useState();
    const [Balance, setBalance] = useState();
    const [Value, setValue] = useState();
    const [Times, setTimes] = useState();

    const handleSubmit = () => {
        localStorage.setItem("reference", Reference);
        localStorage.setItem("trade", Trade);
        localStorage.setItem("entry", Entry);
        localStorage.setItem("tick", Tick);
        localStorage.setItem("balance", Balance);
        localStorage.setItem("value", Value);
        localStorage.setItem("times", Times);
        localStorage.setItem("exit", Exit);

        alert("Value ADDED")
    }

    return (
        <div style={{display: "flex", flexDirection: "column", margin: "15rem 0rem"}}>
            <label htmlFor="ref">Reference No: </label>
            <input type="text" onChange={(e) => {setReference(e.target.value)}} />
            <label htmlFor="ref">Trade Type: </label>
            <input type="text" onChange={(e) => {setTrade(e.target.value)}} />
            <label htmlFor="ref">Entry Spot: </label>
            <input type="text" onChange={(e) => {setEntry(e.target.value)}} />
            <label htmlFor="ref">Exit Spot: </label>
            <input type="text" onChange={(e) => {setExit(e.target.value)}} />
            <label htmlFor="ref">Tick : </label>
            <input type="text" onChange={(e) => {setTick(e.target.value)}} />
            <label htmlFor="ref">Balance: </label>
            <input type="text" onChange={(e) => {setBalance(e.target.value)}} />
            <label htmlFor="ref">Value: </label>
            <input type="text" onChange={(e) => {setValue(e.target.value)}} />
            <label htmlFor="ref">Times: </label>
            <input type="text" onChange={(e) => {setTimes(e.target.value)}} />
            <button style={{margin: "2rem 0"}} onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default info