'use client';
import { PageContainer } from '@/components/misc';
import Page from '@/components/templates/page'
import Cal from '@calcom/embed-react'

const PageContact = () => {
  return (
    <Page>
      <PageContainer className="h-[44rem] pt-32">
        <Cal config={{ theme: "dark" }} calLink="honeyhexa/15min" />
      </PageContainer>
    </Page>
  )
}

export default PageContact;