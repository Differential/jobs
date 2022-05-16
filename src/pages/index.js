import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import {
  AirplaneLanding,
  AirplaneTakeoff,
  CaretDown,
  CaretRight,
  CircleWavyCheck,
  Coins,
  GlobeStand,
  HandFist,
  Heartbeat,
  HeartStraight,
  IdentificationBadge,
  Laptop,
  Path,
  Sunglasses,
  ThumbsUp,
  TrendUp,
  UsersFour,
  UsersThree,
} from "phosphor-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageSection from "../components/image-section"

import diCareers from "../images/di-careers.svg"

const Rule = () => (
  <div className="w-full max-w-5xl mx-auto px-4">
    <hr />
  </div>
)

const coreValues = [
  {
    name: "Less, but better.",
    description:
      "We focus on getting the right stuff done, not the most stuff.",
    Icon: CircleWavyCheck,
  },
  {
    name: "Entrepreneurial Mindset",
    description:
      "We take ownership and pride in our work and move at startup speed.",
    Icon: IdentificationBadge,
  },
  {
    name: "Grit",
    description: "We are relentless, determined, and dedicated doers.",
    Icon: HandFist,
  },
  {
    name: "Ego-free Communication",
    description:
      "We believe in transparency, asking for help, owning mistakes, and over-sharing.",
    Icon: HeartStraight,
  },
  {
    name: "Do the Right Thing",
    description:
      "We believe in being good people and value integrity & honesty.",
    Icon: ThumbsUp,
  },
  {
    name: "Land the Plane",
    description:
      "We finish tasks, tie up loose ends, and follow up with our to-dos.",
    Icon: AirplaneLanding,
  },
  {
    name: "Invest in People",
    description:
      "We invest in relationships with our co-workers, clients, friends, and family.",
    Icon: UsersThree,
  },
]

const features = [
  {
    name: "Remote-first",
    description:
      "Work from anywhere. You can also enjoy the office in Cincinnati or we’ll pay for you to work from a co-working space.",
    icon: GlobeStand,
  },
  {
    name: "Yearly Gatherings",
    description:
      "We gather in person a few times a year to connect as a team, discuss the future of the company, retreat and co-work.",
    icon: UsersFour,
  },
  {
    name: "Freedom & Flexibility",
    description:
      "We want you to work when it’s most opportune to do good work, and to do your life when it’s most opportune to do your life.",
    icon: Path,
  },
  {
    name: "Coaching & Mentoring",
    description:
      "Every team member has regular access to leadership and a coaching program designed to look at employeement as an alliance.",
    icon: TrendUp,
  },
  {
    name: "Unlimited Vacation",
    description:
      "...and we mean it. Folks are encouraged to disconnect and recharge. We believe time away is essential to doing your best work.",
    icon: Sunglasses,
  },
  {
    name: "Retirement Plans",
    description:
      "Traditional and Roth 401k plans plus company matching. So some day, you won’t have to work.",
    icon: Coins,
  },
  {
    name: "Flexible Stipend",
    description:
      "Buy (and own) the equipment you need to do your job better. Top-of-the line MacBook, office equipment, etc.",
    icon: Laptop,
  },
  {
    name: "Gather Stipend",
    description:
      "We encourage you to gather with others when you can, and we’ll pay for you to spend time together with your team.",
    icon: AirplaneTakeoff,
  },
  {
    name: "Health Stipend",
    description:
      "We offer up to $1k per month in health premium coverage to apply towards plans that work the best for you and your family.",
    icon: Heartbeat,
  },
]

const IndexPage = ({ data }) => {
  React.useEffect(() => {
    var rtscript = document.createElement("script")
    rtscript.type = "text/javascript"
    rtscript.onload = function () {
      var widget = new window.RTWidget({
        companies: [6513],
        detailsMode: "popup",
        language: "en",
        departmentsFilter: [],
        themeVars: {
          primary: "#e27533",
          secondary: "#000",
          text: "#5c6f78",
          textDark: "#37474f",
          fontFamily:
            '"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;',
          baseFontSize: "16px",
        },
        flags: {
          showLocation: true,
          showCountry: true,
          showCity: true,
          groupByLocation: false,
          groupByDepartment: false,
          groupByCompany: false,
        },
      })
    }
    rtscript.src = "https://d10zminp1cyta8.cloudfront.net/widget.js"
    document.body.appendChild(rtscript)
  }, [])
  return (
    <Layout>
      <SEO title="Good People &amp; Meaningful Ideas" />
      <div className="flex flex-col gap-y-20 md:gap-y-40 py-20">
        <div className="mx-auto text-center px-4">
          <img src={diCareers} />
        </div>
        <div className="mx-auto max-w-2xl px-4">
          <div className="text-center">
            <h1 className="mx-auto max-w-xl text-4xl font-semibold text-gray-900 sm:text-5xl md:text-6xl">
              Good people &amp; meaningful ideas
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              <strong className="font-medium text-gray-700">
                We believe in a different kind of company: one that is built for
                the sole benefit of our employees.
              </strong>{" "}
              We know that we (<i>probably</i>) won’t be the last company you’ll
              ever work for, but we dream to be the last kind of company you’ll
              ever <i>want</i> to work for.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#purpose"
                  className="w-full flex items-center justify-center px-4 pr-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-brand md:text-lg"
                >
                  Purpose
                  <CaretDown weight="bold" className="opacity-50 ml-2" />
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-2">
                <a
                  href="#roles"
                  className="w-full flex items-center justify-center px-4 pr-3 py-2 border border-transparent text-base font-medium rounded-md text-brand bg-white hover:bg-gray-50 md:text-lg"
                >
                  Open Positions
                  <CaretRight weight="bold" className="opacity-50 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <ImageSection images={data?.imageSection1?.edges || []} />

        <div className="mx-auto max-w-3xl px-4" id="purpose">
          <div className="md:text-center">
            <h2 className="mx-auto max-w-3xl text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
              We partner with category leaders to launch great digital products.
            </h2>
            <p className="mt-3 max-w-prose mx-auto text-base text-gray-500 font-sans md:mt-5 leading-loose md:max-w-3xl">
              We believe in teaching our clients a better approach to delivering
              digital products. We launch early and iterate continuously. We
              work in 6-week cycles and cool-down for 2 weeks to re-coup and
              plan. We shape work together as a team cross-functionally. We
              target and identify risks early to prepare for them. We
              relentlessly scope-hammer.
              <br />
              <strong className="text-gray-900 pt-2 block">
                You get to do your best work.
              </strong>
            </p>
            <ul className="flex content-center justify-center flex-wrap mt-8 mix-blend-darken">
              {(data?.logos?.edges || []).map(({ node }) => (
                <li key={node.name} className="m-4">
                  <GatsbyImage
                    image={getImage(node)}
                    alt={node.name}
                    loading="eager"
                    objectFit="contain"
                    className={`h-8 max-w-[8rem]`}
                    style={{
                      aspectRatio:
                        node.childImageSharp.original.width /
                        node.childImageSharp.original.height,
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 md:grid md:grid-cols-5">
          <div className="col-span-2">
            <h2 className="mx-auto max-w-3xl text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
              Make products,
              <br />
              grow ventures.
            </h2>
          </div>
          <div className="col-span-3">
            <p className="max-w-prose mx-auto text-base text-gray-500 font-sans mt-5 leading-loose md:mt-0 md:max-w-3xl">
              We’re entrepreneurs at heart. As such, we seek opportunities to
              launch successful ventures around some of the best products we’ve
              shipped. We call these product partnerships: we deploy our sales,
              marketing and support infrastructure while we continue to drive
              the product forward as an in-house venture. For our clients, that
              means we are more then an agency: we are a strategic partner with
              unlimited upside.
              <br />
              <strong className="text-gray-900 pt-2 block">
                For you, that means the variety of agency work, with diverse
                growth potential in multiple budding startups.
              </strong>
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mx-auto grid md:divide-x border-y md:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col p-8 overflow-hidden">
              <div>
                <StaticImage
                  src="../images/apollos.png"
                  width={98}
                  height={28}
                  objectFit="contain"
                  alt="Apollos"
                />
              </div>
              <p className="mt-3 text-base text-gray-500">
                Make connecting with God and community a daily habit. Trusted by
                many of the nation’s leading churches.
              </p>
            </div>

            <div className="flex flex-col p-8 overflow-hidden">
              <div>
                <StaticImage
                  src="../images/ease.png"
                  width={175}
                  height={28}
                  objectFit="contain"
                  alt="Ease"
                />
              </div>
              <p className="mt-3 text-base text-gray-500">
                Predict and solve airport operations problems before they exist
                so that we can create a better experience for air travelers all
                over.
              </p>
            </div>

            <div className="flex flex-col p-8 overflow-hidden">
              <div>
                <StaticImage
                  src="../images/stealth.png"
                  width={91}
                  height={32}
                  objectFit="contain"
                  alt="Stealth Mode"
                />
              </div>
              <p className="mt-3 text-base text-gray-500">
                A proven experience for hosting effective guided learning with
                others. Raised $100 million+ in donations with partners.
              </p>
            </div>
          </div>
        </div>

        <ImageSection images={data?.imageSection2?.edges || []} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Core Values
            </h2>
            <p className="mt-4 text-base text-gray-500">
              These aren’t just things we believe in, they guide all we do in
              service of our mission and one another.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              {coreValues.map(({ name, description, Icon }) => (
                <div key={name} className="relative">
                  <dt>
                    <Icon
                      className="absolute h-6 w-6 text-brand"
                      weight="duotone"
                      aria-hidden="true"
                    />
                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                      {name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-9 text-base text-gray-500">
                    {description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <Rule />

        <div className="max-w-6xl mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="md:text-center">
              <h2 className="mx-auto max-w-3xl text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
                Life at Di.
              </h2>
              <p className="mt-3 max-w-prose mx-auto text-base text-gray-500 font-sans md:mt-5 leading-loose md:max-w-3xl">
                We’re committed to your growth, health, and career.
              </p>
            </div>
          </div>

          <div className="pt-12">
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:gap-8 lg:grid-cols-3">
              {features.map(feature => (
                <div key={feature.name} className="lg:py-4">
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-gray-100 text-brand">
                      <feature.icon
                        className="h-6 w-6"
                        weight="duotone"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mx-auto text-center pt-8">
              <a
                href="https://handbook.differential.com"
                className="rounded-md shadow px-4 pr-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-brand md:text-lg"
              >
                Read the Handbook
              </a>
            </div>
          </div>
        </div>

        <Rule />

        <div
          className="max-w-6xl mx-auto px-4 text-center md:text-left md:grid md:grid-cols-2"
          id="roles"
        >
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl pb-8">
            Open Roles
          </h2>

          <div id="recruitee-careers" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    imageSection1: allFile(
      filter: { relativeDirectory: { eq: "image-section-1" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
    }

    imageSection2: allFile(
      filter: { relativeDirectory: { eq: "image-section-2" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
    }

    logos: allFile(filter: { relativeDirectory: { eq: "logos" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
            original {
              width
              height
            }
          }
          name
        }
      }
    }
  }
`
