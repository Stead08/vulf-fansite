import fs from "fs"
import matter from "gray-matter"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import path from "path"
import mdxComponents from "@/components/mdx-components"

interface MemberPageProps {
  params: Promise<{
    slug: string
  }>
}

interface MemberFrontmatter {
  name: string
  role: string
  birthdate?: string
  birthplace: string
  instruments: string[]
  image: string
}

// メンバーのスラッグ一覧を取得
function getMemberSlugs() {
  const membersDirectory = path.join(process.cwd(), "src/content/members")
  const filenames = fs.readdirSync(membersDirectory)
  return filenames
    .filter(filename => filename.endsWith(".mdx"))
    .map(filename => filename.replace(".mdx", ""))
}

// メンバーのデータを取得
function getMemberData(slug: string) {
  const membersDirectory = path.join(process.cwd(), "src/content/members")
  const fullPath = path.join(membersDirectory, `${slug}.mdx`)

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      frontmatter: data as MemberFrontmatter,
      content,
    }
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  const slugs = getMemberSlugs()
  return slugs.map(slug => ({
    slug,
  }))
}

export async function generateMetadata({ params }: MemberPageProps) {
  const { slug } = await params
  const memberData = getMemberData(slug)

  if (!memberData) {
    return {
      title: "Member Not Found",
    }
  }

  return {
    title: `${memberData.frontmatter.name} | Vulfpeck Members`,
    description: `${memberData.frontmatter.name} - ${memberData.frontmatter.role}`,
  }
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { slug } = await params
  const memberData = getMemberData(slug)

  if (!memberData) {
    notFound()
  }

  const { frontmatter, content } = memberData
  const otherMembers = getMemberSlugs().filter(s => s !== slug)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream-200 to-cream-100 py-16">
        <div className="container">
          <Link
            href="/about/members"
            className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 mb-8 text-sm font-medium"
          >
            <span>←</span>
            <span>メンバー一覧に戻る</span>
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-brown-900 mb-4">
              {frontmatter.name}
            </h1>
            <p className="text-xl text-forest-600 font-medium mb-6">{frontmatter.role}</p>

            <div className="flex flex-wrap gap-4 justify-center text-sm text-brown-600">
              {frontmatter.birthdate && (
                <div>
                  <span className="font-semibold">生年月日:</span> {frontmatter.birthdate}
                </div>
              )}
              <div>
                <span className="font-semibold">出身地:</span> {frontmatter.birthplace}
              </div>
            </div>

            {frontmatter.instruments.length > 0 && (
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {frontmatter.instruments.map((instrument, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-cream-100 text-brown-700 rounded-full text-sm font-medium"
                    >
                      {instrument}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-none">
              <MDXRemote source={content} components={mdxComponents} />
            </div>
          </div>
        </div>
      </section>

      {/* Other Members */}
      {otherMembers.length > 0 && (
        <section className="section-padding bg-cream-50">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-brown-900 text-center mb-8">
              他のメンバー
            </h2>

            <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
              {otherMembers.map(memberSlug => {
                const member = getMemberData(memberSlug)
                if (!member) return null

                return (
                  <Link
                    key={memberSlug}
                    href={`/members/${memberSlug}`}
                    className="card p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-display font-semibold text-brown-900 mb-1">
                      {member.frontmatter.name}
                    </h3>
                    <p className="text-sm text-forest-600">{member.frontmatter.role}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
