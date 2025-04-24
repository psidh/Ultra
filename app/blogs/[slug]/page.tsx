import { notFound } from "next/navigation";

const postData = {
  title: "Understanding the Sieve of Eratosthenes",
  date: "2025-04-24",
  content: [
    {
      section: "What is the Sieve of Eratosthenes?",
      text: "The Sieve of Eratosthenes is a simple and efficient algorithm used to find all prime numbers up to a certain number `n`. It was invented over 2,000 years ago by the Greek mathematician Eratosthenes. Despite its age, it’s still one of the fastest ways to generate a list of primes up to a limit.",
    },
    {
      section: "How Does It Work?",
      text: "Imagine you have a list of numbers from 2 to `n`. The Sieve works by eliminating the multiples of each prime number starting from 2.",
      steps: [
        "Start with a list of numbers from 2 to `n`.",
        "Pick the first number that hasn’t been marked — it’s a prime.",
        "Cross out all its multiples.",
        "Repeat the process with the next number that hasn’t been crossed out.",
        "Continue until you've processed all numbers up to √`n`.",
      ],
      result: "The numbers that remain unmarked are prime.",
    },
    {
      section: "Example: Find primes up to 30",
      text: "Start with this list: [2, 3, 4, 5, 6, ..., 30]",
      steps: [
        "2 is prime. Cross out 4, 6, 8, ..., 30.",
        "3 is prime. Cross out 6, 9, 12, ..., 30.",
        "The next uncrossed number is 5. Cross out 10, 15, ..., 30.",
        "Keep going...",
      ],
      result: "[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]",
      note: "These are all the primes up to 30.",
    },
    {
      section: "Code in Java",
      code: 'public class Sieve {\n    public static void main(String[] args) {\n        int n = 30;\n        boolean[] isPrime = new boolean[n + 1];\n\n        // Assume all numbers are prime\n        for (int i = 2; i <= n; i++) {\n            isPrime[i] = true;\n        }\n\n        for (int p = 2; p * p <= n; p++) {\n            if (isPrime[p]) {\n                for (int i = p * p; i <= n; i += p) {\n                    isPrime[i] = false;\n                }\n            }\n        }\n\n        // Print prime numbers\n        for (int i = 2; i <= n; i++) {\n            if (isPrime[i]) {\n                System.out.print(i + " ");\n            }\n        }\n    }\n}',
    },
    {
      section: "Why Is It Efficient?",
      text: "You eliminate non-primes in batches (multiples). It runs in O(n log log n) time, which is fast for large `n`.",
    },
    {
      section: "When to Use It",
      text: "Use the Sieve when:",
      uses: [
        "You need all prime numbers up to a fixed limit.",
        "You're solving competitive programming problems related to primes.",
        "You want to precompute primes for other algorithms (like prime factorization).",
      ],
    },
    {
      section: "Conclusion",
      text: "That’s it! Simple, fast, and elegant.",
    },
  ],
};

export default function BlogPage() {
  if (!postData) return notFound();

  return (
    <div className="container max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{postData.date}</p>
      {postData.content.map((section, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold mt-6">{section.section}</h2>
          <p className="mt-2">{section.text}</p>
          {section.steps && (
            <ul className="list-disc pl-5 mt-4">
              {section.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          )}
          {section.result && (
            <p className="mt-2">
              <strong>Result:</strong> {section.result}
            </p>
          )}
          {section.code && (
            <pre className="bg-gray-100 p-4 mt-4 overflow-x-auto">
              <code>{section.code}</code>
            </pre>
          )}
          {section.uses && (
            <ul className="list-disc pl-5 mt-4">
              {section.uses.map((use, idx) => (
                <li key={idx}>{use}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
