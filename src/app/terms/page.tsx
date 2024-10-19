import { PageContainer } from '@/components/misc'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import Page from '@/components/templates/page'
import { Text } from '@/components/atoms/text'
import { Metadata } from 'next'
import { ORIGIN } from '@/constants'

export const metadata: Metadata = {
  title: "Terms -- Our legal conditions | Honey Hexa",
  description: "We serve only for lawful purposes and in accordance with all applicable laws and regulations.",
  metadataBase: new URL(ORIGIN),
  openGraph: {
    images: ['/og-image.png'],
  },
};

const PagePrivacy = () => {
  return (
    <Page>
      <div className="bg-gradient-to-b from-black via-blue-800 to-blue-300 border-0 rounded-b-[4rem] overflow-hidden">
        <PageContainer className="flex flex-col justify-center items-left h-96 max-w-xl pr-8 gap-2">
          <Link href="/" className="w-fit flex flex-row items-center gap-2 text-white border border-blue-900 bg-blue-950 tracking-wide rounded-full px-3 py-2 text-xs shadow-xl uppercase"><ArrowLeftIcon className="w-4 h-4" /> LEGAL</Link>
          <Text as="h1" size="5xl" className="text-left font-black tracking-tight uppercase leading-tighter bg-gradient-to-br from-white to-blue-300 text-transparent bg-clip-text drop-shadow-xl w-fit">TERMS OF SERVICE&nbsp;</Text>
        </PageContainer>
      </div>
      <div className="flex flex-col">
        <div className="border-b border-b-slate-500 w-full m-auto max-w-xl text-white leading-relaxed px-4 py-16 flex flex-col gap-6 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-12 [&>p]:text-md [&>p]:font-normal [&>p]:text-neutral-300 [&>ul>li]:list-disc [&>ul>li]:ml-4 [&>ul>li]:pl-1 [&>ul>li]:mb-2">

          <h2>1. Introduction</h2>
          <p>Welcome to Honey Hexa. By accessing or using our website [https://www.honeyhexa.com] and our services, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully before using our services. If you do not agree with these terms, please do not use our services.</p>



          <h2>2. Services</h2>
          <p>Honey Hexa provides digital services including but not limited to AI-First Strategies, Cutting Edge Tech-Stack solutions, Purpose-built Solutions, and Growth Partner services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.</p>



          <h2>3. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information as required by our services.</li>
            <li>Maintain the confidentiality of your account information and not share it with others.</li>
            <li>Use our services only for lawful purposes and in accordance with all applicable laws and regulations.</li>
            <li>Not interfere with or disrupt our services or servers.</li>
          </ul>


          <h2>4. Intellectual Property</h2>
          <p>All content and materials on our website and services, including but not limited to text, graphics, logos, and software, are the property of Honey Hexa or its licensors and are protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.</p>



          <h2>5. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Honey Hexa shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of our services. Our total liability for any claim arising out of these Terms of Service shall be limited to the amount paid by you for the specific service giving rise to the claim.</p>



          <h2>6. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless Honey Hexa and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney fees, arising out of or related to your use of our services or any violation of these Terms of Service.</p>



          <h2>7. Changes to Terms</h2>
          <p>We may update these Terms of Service from time to time. Any changes will be effective when we post the revised Terms of Service on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms of Service.</p>



          <h2>8. Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>



          <h2>9. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p><strong>Email:</strong> support@honeyhexa.com</p>

        </div>
      </div>

    </Page>
  )
}

export default PagePrivacy