import Nav from "./Nav";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar,
    }
}

export const NavContainer = connect(mapStateToProps, null)(Nav);