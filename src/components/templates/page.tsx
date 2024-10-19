import React from 'react'
import CallToAction from '@/components/organisms/call-to-action'
import Header from '@/components/organisms/header'
import Footer from '@/components/organisms/footer'
import { StructuredData } from '@/components/utils'
import { LOCALBUSINESS_SCHEMA, ORGANISATION_SCHEMA, WEBPAGE_SCHEMA } from '@/content/schemas'

const Page: React.FC<React.PropsWithChildren<{ showCTA?: boolean }>> = ({ children, showCTA = true }) => {
  return (
    <>
      {/* Schema Markups */}
      <StructuredData jsonld={ORGANISATION_SCHEMA} />
      <StructuredData jsonld={WEBPAGE_SCHEMA} />
      <StructuredData jsonld={LOCALBUSINESS_SCHEMA} />

      <Header />

      {/* Main Content */}
      <main>
        {children}
      </main>

      {showCTA ? <CallToAction /> : null}
      <Footer />
    </>
  )
}

export default Page;