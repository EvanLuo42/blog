import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {AlignRight} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import React from "react";

const routes = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Archives",
    path: "/archives"
  },
  {
    name: "Categories",
    path: "/categories"
  },
  {
    name: "About",
    path: "/about"
  }
]

export function NavMenu({ className }: { className?: string }) {

  function items() {
    return routes.map((route) => (
      <>
        <NavigationMenuItem key={route.name}>
          <a href={route.path}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {route.name}
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </>
    ))
  }

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {items()}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function NavDropdown({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);

  function items() {
    return routes.map((route) => (
      <DropdownMenuItem key={route.name} className="w-full">
        <a href={route.path}>
          {route.name}
        </a>
      </DropdownMenuItem>
    ))
  }

  return (
    <div className={className} onClick={() => {setOpen(!open)}}>
      <DropdownMenu open={open}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <AlignRight className="h-[1.2rem] w-[1.2rem]"/>
            <span className="sr-only">Navigate to Page</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" ref={(ref) =>
          ref?.addEventListener("touchend", (e) => e.preventDefault())}>
          {items()}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}