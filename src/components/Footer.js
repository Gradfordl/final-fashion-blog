import Nav from "./Nav"
export default function Footer ({links}) {
    return(
        <nav aria-label="Main Navigation" role="navigation">
            <ul class="top-nav">
                {links.map(link => <li><a class="footer-nav" href="#">{link}</a></li>)}
            </ul>
        </nav>
    )
}