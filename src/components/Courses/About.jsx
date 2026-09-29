import aboutPhoto1 from "../../assets/about-photo-1.png";
import aboutPhoto2 from "../../assets/about-photo-2.png";
import aboutPhoto3 from "../../assets/about-photo-3.png";
import aboutPhoto4 from "../../assets/about-photo-4.png";
export default function About() {
  return (
    <div>
      <div className="pl-50 mt-10 w-6/12">
        <h3 className="text-xl font-bold">Description</h3>
        <p className="mt-5">
          Embark on an enlightening exploration into the world of digital
          creation with our comprehensive course, "Build Digital Assets: A
          Comprehensive Guide." This transformative learning experience invites
          you to delve deep into the intricacies of crafting impactful digital
          content. From laying the groundwork with foundational concepts to
          mastering advanced techniques, this guide is meticulously curated to
          empower you with the skills essential for navigating the dynamic
          landscape of digital asset creation.
        </p>
        <p className="mt-5">
          In the initial modules, you'll establish a solid foundation by
          immersing yourself in the foundational concepts that form the backbone
          of digital asset creation. Understand the fundamental elements that
          constitute compelling digital content and gain proficiency in
          leveraging these elements to communicate effectively in the digital
          realm.
        </p>
        <p className="mt-5">
          As you progress through the course, you'll ascend to higher levels of
          expertise, delving into the nuances of design principles that drive
          impactful creations. Uncover the secrets behind effective visual
          communication, exploring color theory, typography, and layout
          strategies that elevate your digital assets to new heights. Engage in
          hands-on exercises that reinforce your understanding, allowing you to
          apply these principles in practical scenarios.
        </p>
      </div>

      <div className="pl-50 mt-5">
        <h3 className="text-xl font-bold">Sneak Peak</h3>
        <div className="flex items-center gap-5 mt-5">
          <img src={aboutPhoto1} alt="" />
          <img src={aboutPhoto2} alt="" />
          <img src={aboutPhoto3} alt="" />
          <img src={aboutPhoto4} alt="" />
        </div>
      </div>

      <div className="mt-5 pl-50 mb-20">
        <h3 className="text-xl font-bold">Key Points</h3>
        <ul className="mt-5">
          <li>Foundational Concepts</li>
          <li>Design Principle Mastery</li>
          <li>Advanced Techniques in Digital Creation</li>
          <li>Project Showcase and Critique</li>
          <li>Optimizing for Various Platforms</li>
          <li>Digital Asset Management Best Practices</li>
          <li>Monetizatin Strategies</li>
          <li>Capstone Project: Building Your Portfolio</li>
        </ul>
      </div>
    </div>
  );
}
