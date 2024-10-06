import { Metadata } from 'next';
import { PageContainer } from '@/components/misc';
import Page from '@/components/templates/page'
import Calcom from '@/components/molecules/calcom';
import { ORIGIN } from '@/constants';

export const metadata: Metadata = {
  title: "Contact -- Our Best Support | Honey Hexa",
  description: "Infinite possibilities await with our expert team at your service.",
  metadataBase: new URL(ORIGIN),
  openGraph: {
    images: ['/og-image.png'],
  },
};

const PageContact = () => {
  return (
    <Page>
      <PageContainer className="min-h-[44rem] sm:pt-32">
        <Calcom />
      </PageContainer>
    </Page>
  )
}

export default PageContact;