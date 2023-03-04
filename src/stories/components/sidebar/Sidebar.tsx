import { FC, Fragment, ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faGear } from "@fortawesome/free-solid-svg-icons";

import './sidebar.css';

/**
 * TODO: Fixed - Dynamic generate fontawesome icon from list (with Typescript)
**/

const tabList = [
    { name: 'home', icon:'fa-house' },
    { name: 'user', icon:'fa-user' },
    { name: 'settings', icon:'fa-gear' }
];

const menuList = [
    { name: 'sub-menu-item-1', icon:'fa-rocket' },
    { name: 'sub-menu-item-2', icon:'fa-rocket' },
    { name: 'sub-menu-item-3', icon:'rocket' }
];

type HeaderProps = {
    // 0 = home
    // 1 = user
    // 2 = settings
    activeTab: number;
    onTabClicked: (tab: number) => void;
};

const NavHeader: FC<HeaderProps> = ({ activeTab, onTabClicked }) => (
    <header className="sidebar-header-wrapper">
        {tabList.map((tab, index) => (
            <button type='button' className={`${activeTab === index ? 'active' : ''}`} key={tab.name} onClick={ () => onTabClicked(index) }>
                <span>
                    <FontAwesomeIcon icon={faHouse} />
                </span>
            </button>
        ))}
        <div className="underline" style={{ translate: `${activeTab * 100}%0` }}></div>
    </header>
);

type ButtonProps = {
    name: string;
    icon: string;
};

const NavButton: FC<ButtonProps> = ({ name, icon }) => (
    <button type="button">
        <span><FontAwesomeIcon icon={faGear} /></span>
        <span>{ name }</span>
    </button>
);

const Tab = ({
    children,
    isActive,
}: {
    children: ReactNode;
    isActive: boolean;
}) => {
    return <div className={isActive ? 'active' : ''}>{ children }</div>;
}

export const Sidebar = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClicked = (tab: number) => {
        setActiveTab(tab);
    }

    return(
        <aside className="sidebar-wrapper">
            <div className="sidebar-inner">
                <NavHeader activeTab={activeTab} onTabClicked={handleTabClicked} />
                <div className="sidebar-tabs">
                    <Tab isActive={activeTab === 0}>
                        <div>
                            {menuList.map((menuItem, index) => (
                                <NavButton name={menuItem.name} icon={menuItem.icon} key={index} />
                            ))}
                        </div>
                    </Tab>
                    <Tab isActive={activeTab === 1}>
                        <div>
                            <p>activeTab 1</p>
                        </div>
                    </Tab>
                    <Tab isActive={activeTab === 2}>
                        <div>
                            <p>activeTab 2</p>
                        </div>
                    </Tab>
                </div>
            </div>
        </aside>
    )
}