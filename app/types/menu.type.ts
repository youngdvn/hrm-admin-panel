import { TablerIcon } from "@tabler/icons-react";

export type NavItem = {
    label: string;
    href: string;
    icon?: TablerIcon;
};

export type NavGroup = {
    title: string;
    items: NavItem[];
};