import { PageContainer } from '@/components/misc'
import { article } from '@/sanity/schemaTypes/article'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import React from 'react'
import Page from '@/components/templates/page'
import { Text } from '@/components/atoms/text'

const PagePrivacy = () => {
  return (
    <Page>
      <div className="bg-gradient-to-b from-black via-blue-800 to-blue-300 border-0 rounded-b-[4rem] overflow-hidden">
        <PageContainer className="flex flex-col justify-center items-left h-96 max-w-xl pr-8 gap-2">
          <Link href="/" className="w-fit flex flex-row items-center gap-2 text-white border border-blue-900 bg-blue-950 tracking-wide rounded-full px-3 py-2 text-xs shadow-xl uppercase"><ArrowLeftIcon className="w-4 h-4" /> LEGAL</Link>
          <Text as="h1" size="5xl" className="text-left font-black tracking-tight uppercase leading-tighter bg-gradient-to-br from-white to-blue-300 text-transparent bg-clip-text drop-shadow-xl w-fit">PRIVACY POLICY&nbsp;</Text>
          {/* <p className="text-neutral-100 text-left text-regular mt-2 drop-shadow-md"> Discover the latest in AI-driven strategies, cutting-edge technology, and innovative solutions designed to elevate your business to new heights. </p> */}
        </PageContainer>
      </div>
      <div className="flex flex-col">
        <div className="border-b border-b-slate-500 w-full m-auto max-w-xl text-white leading-relaxed px-4 py-16 flex flex-col gap-6 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-12 [&>p]:text-md [&>p]:font-normal [&>p]:text-neutral-300 [&>ul>li]:list-disc [&>ul>li]:ml-4 [&>ul>li]:pl-1 [&>ul>li]:mb-2">

          <h2>1. Introduction</h2>
          <p>Welcome to Honey Hexa. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [https://www.honeyhexa.com], use our services, or engage with us in any other way. Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.</p>



          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, etc., that you voluntarily provide to us.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website and services, including IP address, browser type, and usage patterns.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to track activity and store certain information.</li>
          </ul>



          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>To provide, operate, and maintain our services.</li>
            <li>To improve, personalize, and expand our services.</li>
            <li>To communicate with you, including sending updates and promotional materials.</li>
            <li>To analyze usage and trends to enhance user experience.</li>
            <li>To ensure the security and integrity of our services.</li>
          </ul>



          <h2>4. Sharing Your Information</h2>
          <p>We may share your information in the following situations:</p>
          <ul>
            <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our services.</li>
            <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to legal requests.</li>
            <li><strong>Business Transfers:</strong> If we undergo a merger, acquisition, or any form of asset sale, your information may be transferred as part of that transaction.</li>
          </ul>



          <h2>5. Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, loss, destruction, or alteration. However, please be aware that no security measures are impenetrable and we cannot guarantee absolute security.</p>



          <h2>6. Your Rights</h2>
          <p>You have the following rights concerning your personal information:</p>
          <ul>
            <li>The right to access and correct your information.</li>
            <li>The right to request deletion of your information.</li>
            <li>The right to object to or restrict processing of your information.</li>
            <li>The right to withdraw consent at any time, where applicable.</li>
          </ul>
          <p>To exercise these rights, please contact us using the information below.</p>



          <h2>7. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. Your continued use of our services after such changes constitutes your acceptance of the new Privacy Policy.</p>



          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
          <p><strong>Email:</strong> privacy@honeyhexa.com</p>

        </div>
      </div>
    </Page>
  )
}

export default PagePrivacy