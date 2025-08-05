import { notFound } from 'next/navigation';

export default function SitePage({ params }: { params: { site: string } }) {
  if (!params.site) {
    notFound();
  }

  return <div>{params.site}</div>;
}
