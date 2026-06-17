'use client';

import Link from "next/link";
import {
    HouseIcon,
    FileTextIcon,
    HourglassIcon,
    LayoutDashboardIcon,
    FolderIcon,
    UsersIcon,
    SettingsIcon,
    MenuIcon,
    CircleXIcon,
    PlusIcon,
    LogOutIcon,
} from "lucide-react";
import { useEffect, useState, useTransition } from 'react';
import { usePathname } from "next/navigation";
import { logoutAction } from "@/actions/login/logout-action";

export function MenuAdmin() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    useEffect(() => {
        // Fecha o menu quando a rota mudar (útil para mobile)
        setIsMenuOpen(false);
    }, [pathname]);

    const navClasses = `
        text-slate-100 rounded-lg flex flex-col mb-8 sm:flex-row sm:flex-wrap gap-1
        transition-all duration-300 overflow-hidden sm:overflow-visible
        ${isMenuOpen ? "max-h-96" : "max-h-10"}
    `;

    const linkClasses =
        "[&>svg]:w-[16px] [&>svg]:h-[16px] px-4 flex items-center justify-start gap-2 transition-all duration-200 rounded-lg h-10 shrink-0 border border-slate-800 shadow-sm hover:bg-slate-800 hover:shadow-md";

    const openCloseBtnClasses = `${linkClasses} text-blue-200 italic sm:hidden`;

    function handleLogout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();

        startTransition(async () => {
            await logoutAction();
        });
    }

    return (
        <div className="menu">
            <div className="container">
                <nav
                    className={navClasses}
                    aria-label="Menu administrativo"
                >
                    <button
                        type="button"
                        className={openCloseBtnClasses}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label={isMenuOpen ? "Fechar menu administrativo" : "Abrir menu administrativo"}
                        aria-expanded={isMenuOpen}
                        aria-controls="admin-menu-list"
                        aria-pressed={isMenuOpen}
                    >
                        {!isMenuOpen ? (
                            <>
                                <MenuIcon />
                                Menu
                            </>
                        ) : (
                            <>
                                <CircleXIcon />
                                Fechar
                            </>
                        )}
                    </button>

                    <ul className="flex flex-col sm:flex-row sm:flex-wrap w-full gap-1">
                        <li>
                            <a className={linkClasses} href="/" target="_blank">
                                <HouseIcon />
                                Home
                            </a>
                        </li>

                        {/* <li>
                            <Link className={linkClasses} href="/admin">
                                <LayoutDashboardIcon />
                                Dashboard
                            </Link>
                        </li> */}

                        <li>
                            <Link className={linkClasses} href="/admin/post">
                                <FileTextIcon />
                                Posts
                            </Link>
                        </li>

                        {/* <li>
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
                        </li>  */}

                        <li>
                            <Link className={linkClasses} href='/admin/post/new'>
                                <PlusIcon />
                                Criar post
                            </Link>
                        </li>

                        <li>
                            <a onClick={handleLogout} href='#' className={linkClasses}>
                                {isPending && (
                                    <>
                                        <HourglassIcon />
                                        Aguarde...
                                    </>
                                )}

                                {!isPending && (
                                    <>
                                        <LogOutIcon />
                                        Sair
                                    </>
                                )}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}