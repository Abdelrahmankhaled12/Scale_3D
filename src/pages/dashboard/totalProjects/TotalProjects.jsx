import './style.scss';
import * as React from 'react';
import { BarChart, BarPlot } from '@mui/x-charts/BarChart';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// Define the available options for time frames and their corresponding frequencies
const timeFrameOptions = ['Last 3mths', 'Last 6mths', 'Last 12mths'];
const frequencyOptionsMap = {
    'Last 3mths': ['daily', 'weekly'],
    'Last 6mths': ['weekly', 'monthly'],
    'Last 12mths': ['monthly'],
};

const TotalProjects = () => {
    const [timeFrame, setTimeFrame] = React.useState('Last 12mths'); // Default time frame
    const [frequency, setFrequency] = React.useState('monthly'); // Default frequency
    const [availableFrequencies, setAvailableFrequencies] = React.useState(frequencyOptionsMap['Last 12mths']); // Default frequencies
    const [filteredData, setFilteredData] = React.useState([]);

    // Update available frequencies when the time frame changes
    React.useEffect(() => {
        if (timeFrame) {
            setAvailableFrequencies(frequencyOptionsMap[timeFrame] || []);
            setFrequency(frequencyOptionsMap[timeFrame][0]); // Default to the first frequency of the new time frame
        }
    }, [timeFrame]);

    // Update chart data based on time frame and frequency
    React.useEffect(() => {
        if (timeFrame && frequency) {
            const data = getDynamicBalanceSheet(timeFrame, frequency);
            setFilteredData(data);
        }
    }, [timeFrame, frequency]);


    return (
        <div className="tatol_projects">
            <div className="top">
                <h2>Total Projects</h2>
                <div className="flexOptions">
                    {/* Time Frame Dropdown */}
                    <div>
                        <Autocomplete
                            value={timeFrame}
                            onChange={(event, newValue) => {
                                setTimeFrame(newValue);
                            }}
                            id="time-frame-dropdown"
                            options={timeFrameOptions}
                            sx={{ width: 200 }}
                            renderInput={(params) => <TextField {...params} label="Time Frame" />}
                        />
                    </div>

                    {/* Frequency Dropdown */}
                    <div>
                        <Autocomplete
                            value={frequency}
                            onChange={(event, newValue) => {
                                setFrequency(newValue);
                            }}
                            id="frequency-dropdown"
                            options={availableFrequencies}
                            sx={{ width: 200 }}
                            renderInput={(params) => <TextField {...params} label="Frequency" />}
                        />
                    </div>
                </div>
            </div>



            {/* Bar Chart */}
            <div className="barChart">
                <div className="statusFrequency">
                    {
                        frequency === "monthly" ?
                            "MONTHS" :
                            frequency === "weekly" ?
                                "Weeks"
                                :
                                "DAYS"

                    }

                </div>
                <BarChart
                    dataset={filteredData}
                    series={
                        frequency === "weekly" ?
                            [
                                { dataKey: 'week1', label: 'Week 1', valueFormatter, color: '#000000' },
                                { dataKey: 'week2', label: 'Week 2', valueFormatter, color: '#000000' },
                                { dataKey: 'week3', label: 'Week 3', valueFormatter, color: '#000000' },
                                { dataKey: 'week4', label: 'Week 4', valueFormatter, color: '#000000' },
                            ]
                            : frequency === "daily" ?
                                [
                                    { dataKey: 'day1', color: '#000000', arcLabel: (item) => `${item.day1}`, },
                                    { dataKey: 'day2', color: '#000000' },
                                    { dataKey: 'day3', color: '#000000' },
                                    { dataKey: 'day4', color: '#000000' },
                                    { dataKey: 'day5', color: '#000000' },
                                    { dataKey: 'day6', color: '#000000' },
                                    { dataKey: 'day7', color: '#000000' },
                                    { dataKey: 'day8', color: '#000000' },
                                    { dataKey: 'day9', color: '#000000' },
                                    { dataKey: 'day10', color: '#000000' },
                                    { dataKey: 'day11', color: '#000000' },
                                    { dataKey: 'day12', color: '#000000' },
                                    { dataKey: 'day13', color: '#000000' },
                                    { dataKey: 'day14', color: '#000000' },
                                    { dataKey: 'day15', color: '#000000' },
                                    { dataKey: 'day16', color: '#000000' },
                                    { dataKey: 'day17', color: '#000000' },
                                    { dataKey: 'day18', color: '#000000' },
                                    { dataKey: 'day19', color: '#000000' },
                                    { dataKey: 'day20', color: '#000000' },
                                    { dataKey: 'day21', color: '#000000' },
                                    { dataKey: 'day22', color: '#000000' },
                                    { dataKey: 'day23', color: '#000000' },
                                    { dataKey: 'day24', color: '#000000' },
                                    { dataKey: 'day25', color: '#000000' },
                                    { dataKey: 'day26', color: '#000000' },
                                    { dataKey: 'day27', color: '#000000' },
                                    { dataKey: 'day28', color: '#000000' },
                                    { dataKey: 'day29', color: '#000000' },
                                    { dataKey: 'day30', color: '#000000' },
                                ]
                                :
                                [
                                    { dataKey: 'value', label: 'Month', valueFormatter, color: '#000000' },
                                ]}
                    xAxis={[{
                        scaleType: 'band',
                        dataKey: 'label',
                        categoryGapRatio: frequency === "weekly" ? .4 : frequency === "daily" ? .2 : .7,
                        barGapRatio: 0.5
                    }]}
                    slotProps={{
                        legend: { hidden: true },
                        tooltip: {
                            formatter: ({ value }) => `$ ${value.toLocaleString()}k`,
                            labelFormatter: ({ label }) => label,
                        },
                    }}
                    height={285}
                    grid={{ horizontal: true }}
                    borderRadius={4}
                />

            </div>

            <div className="date">
                <p className="startDate">2024</p>
                <p className="endDate">2025</p>
            </div>
        </div>
    );
};

export default TotalProjects;

// Helper function to generate dynamic data
export function getDynamicBalanceSheet(timeFrame, frequency) {
    let dataByTimeFrame = {
        'Last 3mths': [
            {
                label: 'NOV',
                value: 150,
                week1: 30,
                week2: 10,
                week3: 80,
                week4: 30,
                day1: 2, day2: 8, day3: 6, day4: 5, day5: 7,
                day6: 3, day7: 10, day8: 4, day9: 6, day10: 5,
                day11: 3, day12: 7, day13: 5, day14: 6, day15: 8,
                day16: 4, day17: 9, day18: 7, day19: 5, day20: 6,
                day21: 4, day22: 8, day23: 3, day24: 7, day25: 5,
                day26: 6, day27: 8, day28: 2, day29: 6, day30: 6
            },
            {
                label: 'DEC',
                value: 200,
                week1: 110,
                week2: 20,
                week3: 40,
                week4: 50,
                day1: 10, day2: 6, day3: 8, day4: 7, day5: 5,
                day6: 9, day7: 12, day8: 4, day9: 10, day10: 6,
                day11: 11, day12: 7, day13: 9, day14: 6, day15: 5,
                day16: 8, day17: 10, day18: 5, day19: 7, day20: 6,
                day21: 9, day22: 8, day23: 6, day24: 7, day25: 10,
                day26: 5, day27: 9, day28: 4, day29: 6, day30: 6
            },
            {
                label: 'JUL',
                value: 120,
                week1: 40,
                week2: 10,
                week3: 50,
                week4: 20,
                day1: 3, day2: 4, day3: 5, day4: 4, day5: 3,
                day6: 6, day7: 5, day8: 4, day9: 6, day10: 3,
                day11: 4, day12: 5, day13: 6, day14: 4, day15: 5,
                day16: 3, day17: 4, day18: 6, day19: 5, day20: 4,
                day21: 6, day22: 5, day23: 3, day24: 4, day25: 6,
                day26: 4, day27: 5, day28: 3, day29: 4, day30: 6
            }
        ]
        ,
        'Last 6mths': [
            { label: 'AUG', value: 130, week1: 10, week2: 30, week3: 40, week4: 50 },
            { label: 'SEP', value: 140, week1: 10, week2: 60, week3: 40, week4: 30 },
            { label: 'OCT', value: 100, week1: 5, week2: 30, week3: 15, week4: 50 },
            { label: 'NOV', value: 150, week1: 30, week2: 10, week3: 80, week4: 30 },
            { label: 'DEC', value: 200, week1: 110, week2: 20, week3: 40, week4: 50 },
            { label: 'JUL', value: 120, week1: 40, week2: 10, week3: 50, week4: 20 },
        ],
        'Last 12mths': [
            { label: 'FEB', value: 110 },
            { label: 'MAR', value: 130 },
            { label: 'APR', value: 120 },
            { label: 'MAY', value: 150 },
            { label: 'JUN', value: 170 },
            { label: 'JUL', value: 120 },
            { label: 'AUG', value: 130 },
            { label: 'SEP', value: 140 },
            { label: 'OCT', value: 100 },
            { label: 'NOV', value: 150 },
            { label: 'DEC', value: 200 },
            { label: 'JAN', value: 90 },
        ],
    };

    const rawData = dataByTimeFrame[timeFrame] || [];

    dataByTimeFrame['Last 3mths'] = dataByTimeFrame['Last 3mths'].map(item => {
        const dailyValue = item.value / 30;
        const days = {};

        for (let i = 1; i <= 30; i++) {
            days[`day${i}`] = dailyValue;
        }

        return {
            ...item,
            ...days,
        };
    });


    // Generate data based on frequency
    if (frequency === 'weekly') {
        return rawData; // Return raw data for monthly frequency
    }

    if (frequency === 'monthly') {
        return rawData; // Return raw data for monthly frequency
    }

    if (frequency === 'daily') {
        return rawData; // Return raw data for monthly frequency
    }

    return []; // Default empty data for unsupported frequencies
}

function valueFormatter(value) {
    return `${value}`;
}