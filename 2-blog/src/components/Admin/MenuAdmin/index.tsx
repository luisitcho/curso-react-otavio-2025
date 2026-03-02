import Link from "next/link";

export function MenuAdmin() {
    return (
        <div className="menu">
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <a href="/" target="_blank">Home</a>
                        </li>
                        <li>
                            <Link href="/admin/post">Posts</Link>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}