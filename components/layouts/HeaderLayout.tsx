'use client';

import { IconSun } from "@tabler/icons-react";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function HeaderLayout() {
    return (
        <header className='px-6 py-4 border-gray-300 border-b shadow bg-white/90'>
            <div className="flex items-center justify-between gap-3">
                <Input type="search" placeholder="Search " className="max-w-80 placeholder:text-slate-700" />
                <div className="flex items-center gap-2">
                    <Button variant={"outline"} className="rounded-full size-10">
                        <IconSun className="size-4" />
                    </Button>
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/evilrabbit.png"
                            alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                    </Avatar>
                </div>
            </div>
        </header>
    );
}
