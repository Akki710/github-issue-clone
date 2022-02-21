import React from 'react'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import CodeIcon from '@mui/icons-material/Code';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ForumIcon from '@mui/icons-material/Forum';
import SecurityIcon from '@mui/icons-material/Security';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const Header = () => {
    return (
        <div className="wrap">
            <div className="heading-section">
                <div className="heading-main">
                    <DesktopWindowsIcon />
                    <span>
                        <a href="">facebook</a>
                    </span>/
                    <span>
                        <strong><a href="">create-react-app</a></strong>
                    </span>
                    <span className="btn-oval">Public</span>
                </div>
                <div className="action-btns">
                    <span className="parent">
                        <FavoriteBorderIcon />
                        Sponsor
                    </span>
                    <span className="parent">
                        <span className="child-1">
                            <VisibilityIcon />
                            Watch
                        </span>
                        <span className="child-2">
                            1.9k
                        </span>
                    </span>
                    <span className="parent">
                        <span className="child-1">
                            <StarBorderIcon />
                            Star
                        </span>
                        <span className="child-2">
                            91.5k
                        </span>
                    </span>
                    <span className="parent">
                        <span className="child-1">
                            <SettingsEthernetIcon />
                            Fork
                        </span>
                        <span className="child-2">
                            23.2k
                        </span>
                    </span>
                </div>
            </div>  
            <div className="subheading-section">
                <div className="subheading-child">
                    <span>
                        <CodeIcon />
                    </span>
                    <span>
                        Code
                    </span>
                </div>
                <div className="subheading-child" id="active">
                    <span>
                        <PlayCircleOutlineIcon />
                    </span>
                    <span>
                        Issues
                    </span>
                    <span className="third" >
                        1.1k
                    </span>
                </div>
                <div className="subheading-child">
                    <span>
                        <img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/git-pull-request-512.png" 
                        alt="" style={{height: "20px", width: "20px"}} />
                    </span>
                    <span>
                        Pull Requests
                    </span>
                    <span className="third">
                        1.3k
                    </span>
                </div>
                <div className="subheading-child">
                    <span>
                        <ForumIcon />
                    </span>
                    <span>
                        Discussions
                    </span>
                </div>
                <div className="subheading-child">
                    <span>
                        <PlayCircleOutlineIcon />
                    </span>
                    <span>
                        Actions
                    </span>
                </div>
                <div className="subheading-child">
                    <span>
                        <PlayCircleOutlineIcon />
                    </span>
                    <span>
                        Projects
                    </span>
                    <span className="third">
                        3
                    </span>
                </div>
                <div className="subheading-child">
                    <span>
                        <SecurityIcon />
                    </span>
                    <span>
                        Security
                    </span>
                </div>
                <div className="subheading-child">
                    <span>
                        <ShowChartIcon />
                    </span>
                    <span>
                        Insights
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header


