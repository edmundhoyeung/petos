export const metadata = {
  title: 'PetOS - All-in-one pet business management system powered by big data and AI',
  description: 'Unlock the full potential of your pet business with PetOS. Our all-in-one pet business management system empowers you to efficiently manage inventory, analyze customer data, streamline store operations, and boost sales performance. Experience the convenience of a comprehensive software solution designed specifically for pet businesses. Try PetOS today and take your pet business to new heights.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Newsletter />
    </>
  )
}
