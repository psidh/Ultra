"use client";
import React, { useState } from "react";

// Define the FAQItem interface
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Sample FAQ data
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is the purpose of this community?",
    answer:
      "The community aims to provide a collaborative space for tech enthusiasts to learn, share knowledge, and grow together.",
  },
  {
    id: 2,
    question: "How can I join the community?",
    answer:
      'To join, simply visit the "Join Us" page and fill out the registration form. We look forward to welcoming you!',
  },
  {
    id: 3,
    question: "Are there specific requirements to join?",
    answer:
      "No, the community is open to individuals with varying levels of expertise. Whether you are a beginner or an experienced developer, you are welcome to join and contribute.",
  },
  // Add more FAQ items as needed
];

const FAQSection: React.FC = () => {
  // State to manage the open/closed state of each FAQ item
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Function to toggle the open/closed state of a FAQ item
  const toggleItem = (itemId: number) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(itemId)) {
        // Item is open, close it
        return prevOpenItems.filter((id) => id !== itemId);
      } else {
        // Item is closed, open it
        return [...prevOpenItems, itemId];
      }
    });
  };

  return (
    <div className="">
      <h2 className="border-y-[1px] py-12 border-black px-16 text-4xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="py-16 px-16 w-[65ch]">
        {faqData.map((faq) => (
          <div key={faq.id} className="my-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleItem(faq.id)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span
                className={`transition-transform transform duration-300  ${
                  openItems.includes(faq.id) ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {openItems.includes(faq.id) && (
              <p className="my-2 text-neutral-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
