import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className = "left">
                    <a href="#works" className = "logo"> Link</a>
                    <div className="itemContainer">
                        <Person className = "icon"/>
                        <span>587-889-5824</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className = "icon"/>
                        <span>kevinl7898@gmail.com</span>
                    </div>
                </div>
                
                <div className = "right">
                    this is right
                </div>
            </div>
        </div>
    )
}
