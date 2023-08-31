import Link from "next/link";

const links = [
  { text: "Home", url: "/" },
  { text: "Sign In", url: "/sign-in" },
  { text: "Sign Up", url: "/sign-up" },
  { text: "Admin", url: "/admin" }
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        {links.map((link) => (
          <Link key={link.text} href={link.url} className="hover:underline">
            {link.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
