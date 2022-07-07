import NavInd from "./NavInd";

export default function NavBar({ user = "" }) {
  const navBarTitles = [
    { title: "Home", link: "Some link" },
    { title: "About", link: "Some link" },
    { title: "Sean", link: "Some link" },
    { title: "Name", link: "Some link" },
    { title: "Gay", link: "Some link" },
    { title: "Trans", link: "Some link" },
    { title: "Mad", link: "Some link" },
  ];

  const Breaker = () => {
    return <>Breaker</>;
  };

  return (
    <nav className="">
      {navBarTitles.map(({ title, link }) => (
        <>
          <NavInd title={title} link={link} />
          <Breaker />
        </>
      ))}
    </nav>
  );
}
