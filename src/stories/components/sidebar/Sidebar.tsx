import { FC, ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMap, faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import './sidebar.css';

const tabList = [
    { name: 'map', icon: faMap },
    { name: 'message', icon: faEnvelope },
    { name: 'user', icon: faUser }
];

const menuList = [
    { name: 'sub-menu-item-1' },
    { name: 'sub-menu-item-2' },
    { name: 'sub-menu-item-3' }
];

type HeaderProps = {
    // 0 = map
    // 1 = message
    // 2 = user
    activeTab: number;
    onTabClicked: (tab: number) => void;
};

const NavHeader: FC<HeaderProps> = ({ activeTab, onTabClicked }) => (
    <header className="sidebar-header-wrapper">
        {tabList.map((tab, index) => (
            <button type='button' className={`${activeTab === index ? 'active' : ''}`} key={tab.name} onClick={ () => onTabClicked(index) }>
                <span>
                    <FontAwesomeIcon icon={tab.icon} />
                </span>
            </button>
        ))}
        <div className="underline" style={{ translate: `${activeTab * 100}%0` }}></div>
    </header>
);

type ButtonProps = {
    name: string;
};

const NavButton: FC<ButtonProps> = ({ name }) => (
    <button type="button">
        <span>
            <FontAwesomeIcon icon={faAngleRight} />
        </span>
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
                                <NavButton name={menuItem.name} key={index} />
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