import { composeStories } from "@storybook/nextjs-vite"
import { render, screen } from "@testing-library/react"
import { expect, test, vi } from "vitest"
import * as stories from "./Footer.stories"

const { Default } = composeStories(stories)

// Mock Next.js Link component
vi.mock("next/link", () => ({
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))

test("renders footer with all sections", () => {
  render(<Default />)

  // Check section headings
  expect(screen.getByRole("heading", { name: "Pocket Daké" })).toBeInTheDocument()
  expect(screen.getByRole("heading", { name: "サイトマップ" })).toBeInTheDocument()
  expect(screen.getByRole("heading", { name: "公式リンク" })).toBeInTheDocument()
})

test("renders about section with description", () => {
  render(<Default />)

  const description = screen.getByText(/Vulfpeckの音楽と活動を日本のファンに向けて発信する/)
  expect(description).toBeInTheDocument()
})

test("renders all sitemap links", () => {
  render(<Default />)

  const sitemapLinks = [
    { name: "ホーム", href: "/" },
    { name: "バンド情報", href: "/about" },
    { name: "ディスコグラフィー", href: "/discography" },
    { name: "ライブ", href: "/live" },
    { name: "ニュース", href: "/news" },
    { name: "メディア", href: "/media" },
  ]

  sitemapLinks.forEach(({ name, href }) => {
    const link = screen.getByRole("link", { name })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", href)
  })
})

test("renders all social links with correct attributes", () => {
  render(<Default />)

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/vulfpeck/" },
    { name: "YouTube", href: "https://www.youtube.com/c/Vulfpeck" },
    { name: "Spotify", href: "https://open.spotify.com/artist/7pXu47GoqSYRajmBCjxdD6" },
    { name: "Twitter", href: "https://twitter.com/vulfpeck" },
  ]

  socialLinks.forEach(({ name, href }) => {
    const link = screen.getByRole("link", { name: new RegExp(name) })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", href)
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer")
  })
})

test("renders copyright information", () => {
  render(<Default />)

  expect(screen.getByText(/© 2025 Pocket Daké/)).toBeInTheDocument()
  expect(screen.getByText(/This is an unofficial fan site/)).toBeInTheDocument()
  expect(screen.getByText(/Vulfpeck and all related logos are trademarks/)).toBeInTheDocument()
})

test("footer has correct structure and styling", () => {
  const { container } = render(<Default />)

  const footer = container.querySelector("footer")
  expect(footer).toBeInTheDocument()
  expect(footer).toHaveClass("bg-cream-200", "mt-auto")
})

test("social links have external link icons", () => {
  render(<Default />)

  const socialSection = screen.getByRole("heading", { name: "公式リンク" }).parentElement
  const svgIcons = socialSection?.querySelectorAll("svg")

  expect(svgIcons).toBeDefined()
  expect(svgIcons?.length).toBe(4) // One for each social link
})
