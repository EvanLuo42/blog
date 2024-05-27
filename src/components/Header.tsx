import {Separator} from "@/components/ui/separator.tsx";
import {ModeToggle} from "@/components/ModeToggle.tsx";
import {NavDropdown, NavMenu} from "@/components/NavigationMenu.tsx";

export function Header() {
  return (
    <>
      <div className="flex flex-row items-center space-x-10 p-3">
        <h1 className="ml-6 text-lg xl:text-xl font-bold">EvanLuo42's Blog</h1>
        <div>
          <NavMenu className="hidden md:block"/>
        </div>
        <div className="absolute right-6 flex flex-row space-x-5">
          <ModeToggle/>
          <NavDropdown className="md:hidden" />
        </div>
      </div>
      <Separator></Separator>
    </>
  )
}