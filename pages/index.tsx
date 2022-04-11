import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {sanityClient, urlFor} from "../sanity"
import { Item } from '../typings'

interface Props {
  items: [Item]
}

export default function Home({ items }: Props) {
  return (
    <div className="bg-white relative min-h-screen lg:flex overflow-x-hidden">
      <Head>
        <title>Apple Store Online - Apple</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/800px-Apple_logo_grey.svg.png" />
      </Head>

      <div>

      <Header />

        <div className="mt-20 max-w-screen flex flex-col lg:flex-row justify-center space-x-20">

          <div className="md:max-w-2xl flex flex-row justify-center px-10 lg:px-0">
            <h1 className="text-5xl text-gray-500 font-bold">
              <span className="text-zinc-800">Store.</span>
             The best way to buy the products you love.</h1>
          </div>

          <div className="mt-10 lg:mt-0">

          {
            //item-1
          }

            <div className="flex items-center">

              {
                //hold image
              }
              <div>
              <img
                className="w-12 h-12 rounded-full"
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon_AV2?wid=72&hei=72&fmt=jpeg&qlt=90&.v=1638914057000"
                alt="logo" />
              </div>

              {
                //hold-text
              }

              <div className="flex flex-col">

                <h3 className="text-md font-semibold">Need shopping help?</h3>
                <a href="" className="text-blue-400 font-semibold hover:underline">Ask a Specialist</a>

              </div>

            </div>

            {
              //item-2
            }


            <div className="flex items-center">

              {
                //hold image
              }
              <div>
              <img
                className="w-12 h-12 rounded-full"
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon_AV2?wid=72&hei=72&fmt=jpeg&qlt=90&.v=1638914057000"
                alt="logo" />
              </div>

              {
                //hold-text
              }

              <div className="flex flex-col">

                <h3 className="text-md font-semibold">Visit an Apple Store</h3>
                <a href="" className="text-blue-400 font-semibold hover:underline">Find one near you {">"}</a>

              </div>

            </div>

          </div>

        </div>

        {
          //show-items
        }

        <div className="lg:absolute left-0 right-0 flex flex-no-wrap ml-10 lg:pl-20 xl:pl-64 overflow-x-scroll scrollbar-hide scrolling-touch items-start my-10">

          {
            items.map(item => (
              <Link key={item._id} href={`/item/${item.slug.current}`}>
                <div className="flex-none w-40 mr-8 md:pb-4 hover:cursor-pointer">
                <img
                  className="w-72 h-40 rounded-md"
                  src={urlFor(item.mainImage).url()}
                  alt="image" />
                  <p className='mt-5 text-black font-semibold flex justify-center'>{item.title}</p>
                </div>
              </Link>
            ))
          }

        </div>

      {
        //other content
      }
      
      <div className="sm:mt-[20px] lg:mt-[300px] max-w-screen space-x-20 flex justify-center mx-20 lg:mx-0">

        <div className="flex flex-col">
          <h2 className="text-4xl text-gray-500 font-semibold">
          <span className="text-zinc-800">Help is here.</span> Whenever and however you need it.</h2>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-center mt-10 space-x-5 mx-20 lg:mx-0">

        <div className='max-w-lg hover:animate-pops h-96 md:h-auto rounded-lg shadow-xl pb-32 px-10 bg-center bg-no-repeat mb-10 bg-[url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626296836000")]'>
          <div className='max-w-lg pt-10'>
            <h2 className='text-2xl text-zinc-900 font-semibold'>Shop one on one with a Specialist. Online or in store.</h2>
          </div>
        </div>

        <div>

        <div className='max-w-lg hover:animate-pops rounded-lg shadow-xl pb-32 px-10 bg-cover bg-no-repeat mb-10 bg-[url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-apps-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626223748000")]'>
          <div className='max-w-lg pt-10'>
            <h2 className='text-2xl text-zinc-900 font-semibold'>Get to know your new device with a free Personal Session.</h2>
          </div>
        </div>

        <div className='max-w-lg hover:animate-pops rounded-lg shadow-xl pb-16 md:pb-6 lg:pb-32 px-10 bg-cover bg-no-repeat mb-10 bg-[url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-25-genius-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626384443000")]'>
          <div className='max-w-lg pt-10'>
            <h2 className='text-2xl text-zinc-900 font-semibold'>Get expert service and support at the Genius Bar.</h2>
          </div>
        </div>

        </div>


      </div>

      {
        //big-scroll-cards
      }

<div className="mt-10 max-w-screen space-x-20 flex justify-center mx-20 lg:mx-0">

<div className="">
  <h2 className="text-4xl text-gray-500 font-semibold">
  <span className="text-zinc-800">Accessories.</span> Essentials that pair perfectly with your favorite devices.</h2>
</div>

</div>

    <div className="lg:absolute left-0 right-0 flex flex-col lg:flex-row flex-no-wrap ml-10 lg:pl-20 xl:pl-64 overflow-x-scroll scrollbar-hide scrolling-touch items-start my-10 space-x-10">

    <div className='max-w-md flex-none h-[500px] hover:animate-pops rounded-lg shadow-xl pb-32 px-10 bg-center bg-no-repeat mb-10 bg-[url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-new-accessories-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052150646")]'>
          <div className='max-w-md pt-10 space-y-5'>
            <h2 className='text-xl text-zinc-900 font-semibold'>In with the new.</h2>
            <h3 className='text-xl text-zinc-900 font-semibold'>Discover fresh new colors for your favorite accessories.</h3>
          </div>
      </div>

      <div className='max-w-md flex-none h-[500px] hover:animate-pops rounded-lg shadow-xl pb-10 px-10 bg-center bg-no-repeat mb-10 bg-[url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN683?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645997365583")]'>
          <div className='max-w-md pt-10 space-y-5'>
            <h2 className='text-xl text-zinc-900 font-semibold'>iPhone 13 Pro Silicone Case with MagSafe - Nectarine</h2>
            <h3 className='text-lg text-zinc-900 font-semibold'>$49.00</h3>
          </div>
      </div>

      <div className='max-w-md flex-none h-[500px] hover:animate-pops rounded-lg shadow-xl pb-10 px-10 bg-center bg-no-repeat mb-10 bg-[url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6G3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645509710532")]'>
          <div className='max-w-md pt-10 space-y-5'>
            <h2 className='text-xl text-zinc-900 font-semibold'>iPhone SE Silicone Case - Chalk Pink</h2>
            <h3 className='text-lg text-zinc-900 font-semibold'>$35.00</h3>
          </div>
      </div>

      <div className='max-w-md flex-none h-[500px] hover:animate-pops rounded-lg shadow-xl pb-10 px-10 bg-center bg-no-repeat mb-10 bg-[url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN613?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645847133062")]'>
          <div className='max-w-md pt-10 space-y-5'>
            <h2 className='text-xl text-zinc-900 font-semibold'>iPhone 13 Silicone Case with MagSafe - Blue Fog</h2>
            <h3 className='text-lg text-zinc-900 font-semibold'>$49.00</h3>
          </div>
      </div>
      
      <div className='max-w-md flex-none h-[500px] hover:animate-pops rounded-lg shadow-xl pb-10 px-10 bg-center bg-no-repeat mb-10 bg-[url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM0W3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1629865215000")]'>
          <div className='max-w-md pt-10 space-y-5'>
            <h2 className='text-xl text-zinc-900 font-semibold'>iPhone Leather Wallet with MagSafe - Wisteria</h2>
            <h3 className='text-lg text-zinc-900 font-semibold'>$59.00</h3>
          </div>
      </div>

      <div className='max-w-md flex-none h-[500px] hover:animate-pops rounded-lg shadow-xl pb-10 px-10 bg-center bg-no-repeat mb-10 bg-[url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN1L3ref?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645079879837")]'>
          <div className='max-w-md pt-10 space-y-5'>
            <h2 className='text-lg text-zinc-900 font-semibold'>45mm Flamingo Braided Solo Loop - Size 6</h2>
            <h3 className='text-md text-zinc-900 font-semibold'>$99.00</h3>
          </div>
      </div>

      </div>
      
      <div className='lg:mt-[600px] bg-gray-50'>
        <Footer />
      </div>

      </div>

    </div>
  )
}

export const getServerSideProps = async () => {
 const query = `
 *[_type == "post"]{
  _id,
  title,
  author -> {
  name,
  image
},
description,
mainImage,
slug
}
 `

 const items = await sanityClient.fetch(query)

 return {
   props: {
     items
   }
 }
}