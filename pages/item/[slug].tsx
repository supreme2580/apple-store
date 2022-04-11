import { GetStaticProps } from "next"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import {sanityClient, urlFor} from "../../sanity"
import { Item } from "../../typings"

interface Props {
    item: Item
}

export default function Items({item}: Props) {
  return (
    <main className="overflow-x-hidden">
        <Header />

        <div className="flex flex-col md:flex-row max-w-7xl items-center justify-center px-10 lg:space-x-40 mt-14">
            {
                //big picture and item provider name and image
            }
            <div className="flex flex-col">
                <img
                className="w-72 h-72"
                src={urlFor(item.mainImage).url()}
                alt="logo" />
                <div className="flex flex-row items-center justify-center space-x-2">
                    <img
                    className="w-12 h-12 rounded-full"
                    src={urlFor(item.author.image).url()}
                    alt="logo" />
                    <h4 className="text-xl text-zinc-900 font-semibold">{item.author.name}</h4>
                </div>
            </div>
            {
                //info
            }
            <div className="flex flex-col max-w-xl">
                <h2 className="text-4xl text-zinc-900 font-bold text-center">{item.title}</h2>
                <p className="font-semibold text-lg text-zinc-900 mt-5">{item.description}</p>
                <button className="mt-5 p-5 bg-zinc-800 text-gray-300 rounded-3xl text-2xl hover:text-white">
                    Purchase this item for {item.price}</button>
            </div>
        </div>

        <Footer />

    </main>
  )
}

export const getStaticPaths = async () => {
    const query = `
        *[_type == "post"]{
            _id,
            slug {
            current
        }
    }`

  const items = await sanityClient.fetch(query)

  const paths = items.map((item: Item) => ({
    params: {
        slug: item.slug.current
    }
  }))

  return {
      paths,
      fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const query = `
    *[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        author -> {
        name,
        image
      },
      description,
      mainImage,
      price,
      slug
      }`

      const item = await sanityClient.fetch(query, {
          slug: params?.slug
      })

      if (!item) {
        return {
              notFound: true
          }
        }

      return {
          props: {
              item
          },
          revalidate: 60
      }
    
}