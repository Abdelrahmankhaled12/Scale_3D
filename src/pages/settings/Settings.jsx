// Importing required dependencies and styles
import './style.scss';
import { Animation, StructurePage } from '../../components'; // Layout component
import LinksPagesSetting from './links/LinksPagesSetting'; // Navigation links for settings
import AccountSetting from './accountSetting/AccountSetting'; // Account settings section
import { useEffect, useState } from 'react';
import AccountPreferences from './accountPreferences/AccountPreferences';

/**
 * Settings Component
 * This component represents the settings page, displaying navigation links and corresponding settings content.
 */

const Settings = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const [loadingTime, setLoadingTime] = useState(false);

    useEffect(() => {
        setLoadingTime(true);
        loadingOff();
    }, [selectedTab]);

    const loadingOff = () => {
        setTimeout(() => {
            setLoadingTime(false);
        }, 1000);
    };

    return (
        <StructurePage>
            <div className="settings">
                <div className="container">
                    <div className="content">
                        {/* Navigation Links */}
                        <LinksPagesSetting setSelectedTab={(value) => setSelectedTab(value)} />
                        {/* Settings Content */}

                        {
                            loadingTime ? (
                                <div className="loading">
                                    <Animation />
                                </div>
                            ) : (
                                selectedTab === 0 ? (
                                    <AccountSetting />
                                ) : (
                                    <AccountPreferences />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </StructurePage>
    );
};

export default Settings;
