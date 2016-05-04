import React, {StyleSheet, Dimensions} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "hr": {
        "marginBottom": 0
    },
    "row": {
        "marginRight": -16,
        "marginLeft": -16
    },
    "navbar-default": {
        "backgroundColor": "transparent",
        "borderColor": "transparent",
        "marginBottom": 0
    },
    "navbar-default navbar-collapse": {
        "paddingTop": 0,
        "paddingRight": "10%",
        "paddingBottom": 0,
        "paddingLeft": "10%"
    },
    "navbar-default navbar-nav": {
        "fontFamily": "\"db_helvethaica_x55_regular\"",
        "fontSize": 20
    },
    "navbar-default navbar-nav > li > a": {
        "color": "#004b93"
    },
    "navbar-default navbar-nav > li > a:hover": {
        "color": "#004b93"
    },
    "navbar-default navbar-nav > li > a:focus": {
        "color": "#004b93"
    },
    "container-fluid": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "navbar-default navbar-nav > open > a": {
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav > open > a:hover": {
        "backgroundColor": "transparent"
    },
    "navbar-default navbar-nav > open > a:focus": {
        "backgroundColor": "transparent"
    },
    "nav open > a": {
        "backgroundColor": "transparent"
    },
    "nav open > a:hover": {
        "backgroundColor": "transparent"
    },
    "nav open > a:focus": {
        "backgroundColor": "transparent"
    },
    "nav > li": {
        "position": "static",
        "borderBottomWidth": 0,
        "borderBottom": "4px solid #fff",
        "WebkitTransition": "border-bottom 0.1s linear",
        "MozTransition": "border-bottom 0.1s linear",
        "OTransition": "border-bottom 0.1s linear",
        "transition": "border-bottom 0.1s linear"
    },
    "nav > li:hover": {
        "borderBottom": "4px solid #e9252b"
    },
    "dropdown-menu": {
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 70,
        "paddingBottom": 0,
        "paddingLeft": 70,
        "position": "absolute",
        "top": "100%",
        "left": 0,
        "zIndex": 1000,
        "display": "none",
        "float": "left",
        "minWidth": 160,
        "fontSize": 14,
        "textAlign": "left",
        "listStyle": "none",
        "backgroundColor": "#004b93",
        "WebkitBackgroundClip": "padding-box",
        "backgroundClip": "padding-box",
        "border": "none",
        "borderRadius": 0,
        "WebkitBoxShadow": "transparent",
        "boxShadow": "transparent"
    },
    "dropdown-menu li": {
        "float": "left",
        "textAlign": "center"
    },
    "dropdown-menu li a": {
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "fontSize": 20
    },
    "dropdown-menu li a i": {
        "display": "block",
        "fontSize": 35,
        "marginBottom": 20
    },
    "dropdown-menu > li > a": {
        "color": "#ededed"
    },
    "dropdown-menu > li > a:hover": {
        "backgroundColor": "transparent",
        "color": "#d3e1f3"
    },
    "dropdown-menu > li > a:focus": {
        "backgroundColor": "transparent",
        "color": "#d3e1f3"
    },
    "btn-danger": {
        "backgroundColor": "#ed252d",
        "borderColor": "#ef3d44"
    },
    "btn-danger:hover": {
        "backgroundColor": "#ce1119",
        "borderColor": "#dc121a"
    },
    "btn-wide": {
        "paddingLeft": 36,
        "paddingRight": 36
    },
    "btn-default:hover": {
        "color": "#004b93",
        "backgroundColor": "#ffffff",
        "borderColor": "#004b93"
    }
});