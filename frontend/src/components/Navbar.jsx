import { Button } from "@/components/ui/button";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const getLinkClass = (path) => {
        return `px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            location.pathname === path
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`;
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
        await signOut(auth);
        navigate("/auth");
        } catch (error) {
        console.error("Logout error:", error.message);
        }
    };

    return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex h-14 items-center justify-between">
        {/* Left: Logo + Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4 items-center">

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className={getLinkClass("/")}>
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
           

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/dashboard" className={getLinkClass("/dashboard")}>
                  Dashboard
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/map" className={getLinkClass("/map")}>
                  Map
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


           
          </NavigationMenuList>
        </NavigationMenu>


        <div className="flex items-center gap-3">
            {user ? (
            <Button variant="destructive" size="sm" className="border border-red-300 text-red-600" onClick={handleLogout}>
                Logout
            </Button>
            ) : (
            <Button variant="outline" size="sm" onClick={() => navigate("/auth")}>
                Login
            </Button>
            )}
        </div>
      </div>
    </nav>
  );

}

export default Navbar;