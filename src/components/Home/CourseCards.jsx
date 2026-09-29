import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

export default function CourseCards() {
  // state for all the cards
  const [cards, setCards] = useState([]);

  // Fetching all the card's information from the user created json file
  // Here backend API will place on string.
  useEffect(() => {
    fetch("card-data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);


  return (
    <div className="w-8/12 mt-10 m-auto grid grid-cols-3 gap-10">
      {
        cards.map((card, idx) => <CourseCard key={idx} className="rounded-2xl border-2 border-[#E0E2E4] p-4" card={card}/>)
      }
    </div>
  );
}
