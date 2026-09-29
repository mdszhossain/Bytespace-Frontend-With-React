import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";

export default function CourseCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("card-data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="w-8/12 mt-10 m-auto grid grid-cols-3 gap-10">
      {cards.map((card, idx) => (
        <Link key={idx} to="/courses/details" className="block">
          <CourseCard
            className="rounded-2xl border-2 border-[#E0E2E4] p-4"
            card={card}
          />
        </Link>
      ))}
    </div>
  );
}
