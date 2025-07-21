export interface NavigationItem {
  title: string;
  url: string;
  children?: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  {
    title: "Committees",
    url: "/committees/",
  },
  {
    title: "Authors",
    url: "/cfp/",
  },
  {
    title: "Program",
    url: "/program/",
  },
  {
    title: "Registration",
    url: "/registration/",
  },
  {
    title: "Sponsors",
    url: "/sponsors/",
  },
  {
    title: "Past Conferences",
    url: "/past/",
  },
];