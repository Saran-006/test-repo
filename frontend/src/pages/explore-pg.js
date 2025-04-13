import { Content } from "./elements/content"
import { ExploreTop } from "./elements/explore-top"
import Navbar from "./elements/navbar"
export function Explore(){
    return(
        <div>
        <ExploreTop />
        <Content />
        <Navbar />
        </div>
    )
}