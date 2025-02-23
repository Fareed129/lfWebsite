import { Link } from "wouter";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { user, logoutMutation } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">LINGUA FRANCA</h1>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/courses">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Courses
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/admission">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Admission
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/gallery">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Gallery
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex gap-2">
            {user ? (
              <>
                {user.isAdmin && (
                  <Link href="/admin">
                    <Button variant="outline">Dashboard</Button>
                  </Link>
                )}
                <Button
                  variant="ghost"
                  onClick={() => logoutMutation.mutate()}
                  disabled={logoutMutation.isPending}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/auth">
                <Button>Admin Login</Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-2">
              <Link href="/">
                <a className="px-4 py-2 hover:bg-gray-100 rounded">Home</a>
              </Link>
              <Link href="/about">
                <a className="px-4 py-2 hover:bg-gray-100 rounded">About</a>
              </Link>
              <Link href="/courses">
                <a className="px-4 py-2 hover:bg-gray-100 rounded">Courses</a>
              </Link>
              <Link href="/admission">
                <a className="px-4 py-2 hover:bg-gray-100 rounded">Admission</a>
              </Link>
              <Link href="/gallery">
                <a className="px-4 py-2 hover:bg-gray-100 rounded">Gallery</a>
              </Link>
              <Link href="/contact">
                <a className="px-4 py-2 hover:bg-gray-100 rounded">Contact</a>
              </Link>
              <Link href="/blog">
                <a className="px-4 py-2 hover:bg-gray-100 rounded">Blog</a>
              </Link>
              {user ? (
                <>
                  {user.isAdmin && (
                    <Link href="/admin">
                      <Button variant="outline" className="w-full">Dashboard</Button>
                    </Link>
                  )}
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => logoutMutation.mutate()}
                    disabled={logoutMutation.isPending}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link href="/auth">
                  <Button className="w-full">Admin Login</Button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}