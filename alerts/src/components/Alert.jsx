import { useState } from "react";
export default function Alert() {
    const [alerts, setAlerts] = useState([]);
    const closeAlert = (id) => {
        setAlerts((prevAlerts) => {
            const filterArr = prevAlerts.filter((alert) => {
                return alert.id !== id;
            });
            return filterArr;
        });
    };
    const showAlert = (message, type) => {
        const id = new Date().getTime();
        const newAlert = [...alerts, { id, message, type }];
        setAlerts(newAlert);
        setTimeout(() => {
            closeAlert(id);
        }, 5000);
    };
    return (
        <div className="container">
            <div className="alert-container">
                {alerts.map(({ id, message, type }) => {
                    return (
                        <div key={id} className={`alert ${type}`}>
                            {message}{" "}
                            <span onClick={() => closeAlert(id)}>x</span>
                        </div>
                    );
                })}
            </div>
            <div className="btn-container">
                <button onClick={() => showAlert("Success Alert", "success")}>
                    Success Alert
                </button>
                <button onClick={() => showAlert("Warning Alert", "warning")}>
                    Warning Alert
                </button>
                <button onClick={() => showAlert("Info Alert", "info")}>
                    Info Alert
                </button>
                <button onClick={() => showAlert("Error Alert", "error")}>
                    Error Alert
                </button>
            </div>
        </div>
    );
}
