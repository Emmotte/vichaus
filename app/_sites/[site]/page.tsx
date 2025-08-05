import { notFound } from 'next/navigation';
import SitePreview from '@/app/site/site-preview';

const MOCK_DB = {
  'nook-on-cook': {
    siteName: 'The Nook on Cook',
    siteDescription: 'Cook St Village, Victoria, British Columbia',
  },
  'another-site': {
    siteName: 'Another Site',
    siteDescription: 'Another Description',   
  },
};

export default function SitePage({ params }: { params: { site: string } }) {
  if (!params.site) {
    notFound();
  }

  const siteData = MOCK_DB[params.site as keyof typeof MOCK_DB];

  if (!siteData) {
    notFound();
  }

  return <SitePreview {...siteData} />;
}