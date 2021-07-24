import pkg from '../package.json';
import {getNode, GenericPackage} from "@reflexiv/reflexiv"

const version = pkg.version
const name = pkg.name.split("/").pop()
const render = (core, proc) => (container, state) => {
    container.setState(state)
    var el = container.getElement()
    var div = getNode(el)
    div.innerHTML = "Package Starter Here : " + version 
    container.on("resize", () => {
       //container.width and container.height
    })
    return function(){
       // close function
    }
}

const demo = new GenericPackage(name,version,render,{},[])
export default demo
