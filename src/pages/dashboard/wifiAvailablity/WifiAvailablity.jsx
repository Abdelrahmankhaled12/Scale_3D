import './style.scss'
import { PieChart } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './webUsageStats';

const WifiAvailablity = () => {
    return (
        <div className='wifiAvailablity'>
            <div className="top">
                <div className="title">
                    <p>Stair Survey Projects </p>
                    <h3>Wi-Fi Availablity</h3>
                </div>
                <div className="week">
                    <p>This month</p>
                    <h3>125</h3>
                </div>
            </div>
            <div className="body">
                <div className="wifi">
                    <p>Wi-Fi</p>
                    <span>75</span>
                </div>
                <div className="nonWiFi">
                    <p>Non Wi-Fi</p>
                    <span>50</span>
                </div>
                <div className="pie">
                    <PieChart
                        series={[
                            {
                                arcLabel: (item) => `${item.value}%`,
                                data: desktopOS,
                                valueFormatter,
                            },
                        ]}
                        height={170}
                    />
                </div>

            </div>
        </div>
    )
}

export default WifiAvailablity