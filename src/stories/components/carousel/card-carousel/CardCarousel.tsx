import { CSSProperties, FC, ReactNode, useState } from 'react';
import './cardCarousel.css';

import image1 from './assets/1.svg';
import image2 from './assets/2.svg';
import image3 from './assets/3.svg';
import image4 from './assets/4.svg';

const pageList = [
    {
        title: "Learning",
        subtitle: "subtitle text",
        image: image1,
    },
    {
        title: "Business Plan",
        subtitle: "subtitle text",
        image: image2,
    },
    {
        title: "Team spirit",
        subtitle: "subtitle text",
        image: image3,
    },
    {
        title: "Success",
        subtitle: "subtitle text",
        image: image4,
    }
]


type PaginationIndicatorsProps = {
    pageCount: number;
    activePage: number;
    onPageClicked: (pageCount: number) => void;
}
const PaginationIndicators: FC<PaginationIndicatorsProps> = ({ pageCount, activePage, onPageClicked }) => (
    <div className="pagination-indicator-wrapper">
        {
            Array.from({length: pageCount}, (item, index) => (
                <button key={index} className={`pagination-indicator-item ${activePage === index ? 'active' : ''}`} onClick={ () => onPageClicked(index) }><span></span></button>
            ))
        }
    </div>
);

const Page = ({
    children,
    isActive
}: {
    children: ReactNode;
    isActive: boolean;
}) => {
    return <li className={`carousel-page-item ${isActive ? 'active' : ''}`}>{ children }</li>
}

export const CardCarousel = () => {
    const PAGE_COUNT = pageList.length;
    const [activePage, setActivePage] = useState<number>(0);

    const handleTabClicked = (pageCount: number) => {
        setActivePage(pageCount);
    }

    const transformStyle:CSSProperties = {
        transform: `translate3d(${activePage === 0 ? activePage : `-${activePage * 100}`}%, 0px, 0px)`
    }

    return(
        <div className="card-carousel-wrapper">
            <ul className="carousel-page-list" style={transformStyle}>
                {
                    pageList.map((pageItem, index) => (
                        <Page isActive={activePage === index} key={index}>
                            <div className="carousel-page-inner">
                                <div className="page-image">
                                    <img src={pageItem.image} />
                                </div>
                                <div className="page-content">
                                    <h1>{ pageItem.title }</h1>
                                    <p>{ pageItem.subtitle }</p>
                                </div>
                            </div>
                        </Page>
                    ))
                }
            </ul>
            <PaginationIndicators pageCount={PAGE_COUNT} activePage={activePage} onPageClicked={handleTabClicked} />
        </div>
    )
}