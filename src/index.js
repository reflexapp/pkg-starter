import pkg from '../package.json';
import {getNode, GenericPackage, GenericContainer} from "@reflexiv/reflexiv"
const version = pkg.version

const cFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const cName = (d) => {
    var a = d.split("/").pop().replace("pkg-","")
    var n = a.split("-").map((d)=>(cFirst(d)))
    return n.join(" ")
}
const name = cName(pkg.name)

const render = (core, proc) => (container, state) => {
    container.setState(state)
    var div = getNode(container)
    div.innerHTML = "Package Starter Here : " + version
    container.on("resize", () => {
        // TODO with container.width and container.height
    })
    return function() {
        // close function
    }
}
var _state_ = {}
// Make Package Init State as a Parameter
const demo = (state = _state_) => (new GenericPackage(name, version, render, state, []))

// test without services
demo.test = (el) => {
    var core = {}
    var container = new GenericContainer(el)
    render(core)(container, _state_)
}
// TODO add Unit Test Function 
export default demo

