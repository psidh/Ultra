import Link from "next/link";

const blogList = [
  {
    title: "Understanding the Sieve of Eratosthenes",
    date: "2025-04-24",
    slug: "understanding-the-sieve-of-eratosthenes",
  },
];

export default function BlogLandingPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogList.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <div className="cursor-pointer">
                <h2 className="text-2xl font-semibold">{blog.title}</h2>
                <p className="text-gray-500 text-sm mt-2">{blog.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
