"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

export const SidebarItem = ({
    icon: Icon,
    label,
    href
}:SidebarItemProps) => {

    const pathname = usePathname();
    const router = useRouter();

    const isActive = 
        (pathname === "/" && href === "/") ||
            pathname === href ||
            pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href);
    }
            
    return ( 
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-2 text-sky-500 text-sm font-[500] pl-6 transition-all hover:text-sky-700 hover:bg-sky-700/20",
                isActive && "text-[#776E9A] bg-sky-200/20 hover:text-[#776E9A]"
            )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon 
                    size={22}
                    className={cn(
                        "text-sky-500",
                        isActive && "text-[#776E9A]"
                    )}
                />
                {label}
            </div>
            <div className={cn(
                "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
                isActive && "opacity-100"
            )}/>
        </button>
     );
}
 