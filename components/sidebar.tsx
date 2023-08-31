'use client'

import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import { Home, Plus, Settings } from 'lucide-react'

export const Sidebar = () => {

    const pathname = usePathname()
    const router = useRouter()

    const routes = [
        {
            icon: Home,
            href: "/",
            label: "בית",
            pro: false
        },
        {
            icon: Plus,
            href: "/companion/new",
            label: "חילוף",
            pro: true
        },
        {
            icon: Settings,
            href: "/settings",
            label: "הגדרות",
            pro: false
        },
    ]

    const onNavigate = (url: string, pro: boolean) => {
        return router.push(url)
    }

    return (
        <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
            <div className="flex-1 flex p-3 justify-center">
                <div className="space-y-2">
                    {routes.map((route) => (
                        <div
                            onClick={() => {
                                onNavigate(route.href, route.pro)
                            }}
                            key={route.href}
                            className={cn("text-muted-foreground group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                                pathname === route.href && "bg-primary/10 text-primary"
                            )}>
                            <div className='flex flex-col gap-y-2 items-center flex-1'>
                                <route.icon className='h-5 w-5' />
                                {route.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}