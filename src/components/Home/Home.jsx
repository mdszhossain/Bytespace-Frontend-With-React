import ClientLogo from "./ClientLogo";
import "./CSS/Home.css";
import Header from "./Header";
import PassionSection from "./PassionSection";

export default function Home() {
  return (
    <div>
      <Header/>
      <ClientLogo/>
      <PassionSection/>
    </div>
  );
}
