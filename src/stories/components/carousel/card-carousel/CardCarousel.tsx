import { FC, ReactNode, useState } from 'react';
import './cardCarousel.css';

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
    return <div className={`carousel-page-item ${isActive ? 'active' : ''}`}>{ children }</div>
}

export const CardCarousel = () => {
    const PAGE_COUNT = 3;
    const [activePage, setActivePage] = useState<number>(0);

    const handleTabClicked = (pageCount: number) => {
        setActivePage(pageCount);
    }

    return(
        <div className="card-carousel-wrapper">
            <div className="carousel-page-wrapper">
                {
                    Array.from({length: PAGE_COUNT}, (item, index) => (
                        <Page isActive={activePage === index}>
                            <div className="carousel-page-inner">
                                <div className="page-image">
                                    <img src={`./${index + 1}.svg`} />
                                </div>
                                <div className="page-content">
                                    {index === 0 && (<h1>Learning</h1>)}
                                    {index === 1 && (<h1>Business Plan</h1>)}
                                    {index === 2 && (<h1>Team spirit</h1>)}
                                </div>
                            </div>
                        </Page>
                    ))
                }
            </div>
            <PaginationIndicators pageCount={PAGE_COUNT} activePage={activePage} onPageClicked={handleTabClicked} />
        </div>
    )
}