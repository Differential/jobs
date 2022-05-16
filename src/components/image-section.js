import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const imageSection = ({ images }) => (
  <ul
    role="list"
    className="flex gap-x-2 gap-y-2 max-w-full justify-center items-center overflow-hidden"
  >
    {images.map(({ node }, i) => (
      <li
        key={node.name}
        className={`relative min-w-[50vw] md:min-w-[30vw] lg:min-w-[22vw]`}
      >
        <div
          className={`aspect-square relative group block rounded-lg bg-gray-100 overflow-hidden`}
        >
          <GatsbyImage
            image={getImage(node)}
            alt={node.name}
            objectFit="cover"
            className="object-cover pointer-events-none mix-blend-darken w-full h-full"
          />
        </div>
      </li>
    ))}
  </ul>
)

export default imageSection
