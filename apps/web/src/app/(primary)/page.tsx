import ArticlesList from "@/components/articles-list";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className="mx-auto max-w-2xl container px-4">
      <ArticlesList query={query} currentPage={currentPage} />
    </main>
  );
}
