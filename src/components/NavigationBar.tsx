import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"

function NavigationBar() {
  return (
    <NavigationMenu className="flex justify-between bg-primary">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>All figures</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>FAQ</NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Contact</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <Input placeholder="Search the shop..." className="" />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default NavigationBar
