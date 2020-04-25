import React from 'react';
import { PortfolioStyled } from './styled';
import Masonry from 'react-masonry-css';
import { Wrapper } from '../../elements/Wrapper';
import { useSelector } from 'react-redux';

// Project images
import AgentPortal from './../../img/portfolio/agent-portal.jpg';
import Bekflix from './../../img/portfolio/bekflix.jpg';
import BestReasonToStudyInAsia from './../../img/portfolio/best-reason-to-study-in-asia.jpg';
import FilmFestival from './../../img/portfolio/film-festival.jpg';
import JoinUganda from './../../img/portfolio/join-uganda.jpg';
import LEI from './../../img/portfolio/LEI.jpg';
import LimkokwingCom from './../../img/portfolio/limkokwing-com.jpg';
import OldPortfolio from './../../img/portfolio/old-portfolio.jpg';
import Starcademy from './../../img/portfolio/starcademy.jpg';
import Starfall from './../../img/portfolio/starfall.jpg';
import Todo from './../../img/portfolio/todo.jpg';
import Tvet from './../../img/portfolio/tvet.jpg';
import { useHeight } from '@ulugbek-dev/windowsize';

export default function Portfolio() {
    const darkMode = useSelector(state => state.darkMode);
    const height = useHeight();
    
    const breakpoints = {
        default: 4,
        1100: 4,
        700: 3,
        500: 2
    };

    const projects = [
        { name: "Film Academy", img: FilmFestival, url: "https://filmacademy.com.my" },
        { name: "Bekflix", img: Bekflix, url: "https://bekflix.now.sh/" },
        { name: "Limkokwing.com", img: LimkokwingCom, url: "https://www.limkokwing.com/page/nation_building" },
        { name: "Limkokwing Join Uganda", img: JoinUganda, url: "https://www.limkokwing.net/uganda-join" },
        { name: "Tvet", img: Tvet, url: "http://www.tvet.co/" },
        { name: "Edustart", img: AgentPortal, url: "https://limkokwing.edustart.co/login" },
        { name: "My old Portfolio", img: OldPortfolio, url: "https://ulugbek-dev.github.io/portfolio" },
        { name: "LEI", img: LEI, url: "https://www.limkokwing.net/english" },
        { name: "Todo App", img: Todo, url: "https://todo-react-nu.now.sh/" },
        { name: "Starcademy", img: Starcademy, url: "https://www.starcademy.co/" },
        { name: "Starfall", img: Starfall, url: "http://starfall-game.com/#home" },
        { name: "Limkokwing 'Best reason to study in asia'", img: BestReasonToStudyInAsia, url: "https://www.limkokwing.net/best-reason-to-study-in-asia" },
    ];

    return (
        <PortfolioStyled length={projects} height={height} darkMode={darkMode}>
            <Wrapper className="wrapper">
                <Masonry
                    breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {projects.map((p, i) => (
                        <div className="item" key={i}>
                            <a href={p.url} target="_blank">
                                <img src={p.img} alt={p.name} />
                                <p>{p.name}</p>
                            </a>
                        </div>
                    ))}
                </Masonry>
            </Wrapper>
        </PortfolioStyled>
    );
}