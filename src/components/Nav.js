export default function Nav({links, idx}) {
    return(
        <nav aria-label="Main Navigation" role="navigation">
            <ul class="top-nav">
                {links.map(link => <li><a class="top-nav" href="#">{link}</a></li>)}
            </ul>
        </nav>
    )
}