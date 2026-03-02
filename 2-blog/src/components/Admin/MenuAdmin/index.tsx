import Link from "next/link";
import {
    HouseIcon,
    FileTextIcon,
    LayoutDashboardIcon,
    FolderIcon,
    UsersIcon,
    SettingsIcon,
} from "lucide-react";

export function MenuAdmin() {
    const navClasses =
        "text-slate-100 rounded-lg flex flex-col mb-8 sm:flex-row sm:flex-wrap";

    const linkClasses =
        "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4 flex items-center justify-start gap-2 transition-all duration-200 rounded-lg h-10 shrink-0 border border-slate-800 shadow-sm hover:bg-slate-800 hover:shadow-md";


    return (
        <div className="menu">
            <div className="container">
                <nav className={navClasses}>
                    <ul className="flex flex-col sm:flex-row sm:flex-wrap w-full gap-1">
                        <li>
                            <a className={linkClasses} href="/" target="_blank">
                                <HouseIcon />
                                Home
                            </a>
                        </li>

                        <li>
                            <Link className={linkClasses} href="/admin">
                                <LayoutDashboardIcon />
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link className={linkClasses} href="/admin/post">
                                <FileTextIcon />
                                Posts
                            </Link>
                        </li>

                        <li>
                            <Link className={linkClasses} href="/admin/categories">
                                <FolderIcon />
                                Categorias
                            </Link>
                        </li>

                        <li>
                            <Link className={linkClasses} href="/admin/users">
                                <UsersIcon />
                                Usuários
                            </Link>
                        </li>

                        <li>
                            <Link className={linkClasses} href="/admin/settings">
                                <SettingsIcon />
                                Configurações
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}