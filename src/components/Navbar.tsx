import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/sign-in" className="hover:underline">
            Sign In
          </Link>
        </li>
        <li>
          <Link href="/sign-up" className="hover:underline">
            Sign Up
          </Link>
        </li>
        <li>
          <Link href="/admin" className="hover:underline">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
