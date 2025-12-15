'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How are sessions delivered?',
      answer: 'All core sessions are delivered online via Zoom, with occasional in-person gatherings or events when possible.',
    },
    {
      question: 'What is the time commitment?',
      answer: 'Expect to invest about 2–3 hours per week, including teaching sessions, group meetings, and personal assignments.',
    },
    {
      question: 'Do participants get a mentor?',
      answer: 'Yes. Every participant receives guidance, encouragement, and accountability from mentors and leaders in the program.',
    },
    {
      question: 'Are assignments required?',
      answer: 'Yes. The assignments are light but practical, designed to help you apply what you are learning in your daily life.',
    },
    {
      question: 'Is this only for Christians?',
      answer:
        'Yes. The Peace Mentorship Program is rooted in biblical principles, Christian discipleship, and spiritual formation.',
    },
  ];

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="section-container max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Have more questions? Start here. You can always reach out by email if you need more clarity.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <article key={item.question} className="card overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left text-sm font-medium text-slate-900"
                >
                  <span>{item.question}</span>
                  <span className="ml-3 text-xl leading-none text-slate-400">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-slate-700 border-t border-slate-100">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center text-sm text-slate-600">
          <p>
            Still wondering if this is for you? Email us at{' '}
            <a href="mailto:pogm22@gmail.com" className="font-semibold text-blue-700 hover:underline">
              pogm22@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
