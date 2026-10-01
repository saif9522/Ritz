import Logo from "./logo";
import Nav from "./Nav";
import HeroText from "./HeroText";

export default function Header() {
  return (
    <>
    <header className="Header-section absolute top-0 left-0 z-50 w-full" >
      <div className="mx-auto flex h-20 w-full items-center justify-between px-6">
        <Logo />
        <Nav />
      </div>
      <HeroText />
    </header>
  
     
</>
  );
}