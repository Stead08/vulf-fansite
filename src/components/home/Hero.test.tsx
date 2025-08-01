import { composeStories } from "@storybook/nextjs-vite"
import { render, screen } from "@testing-library/react"
import { expect, test, vi } from "vitest"
import * as stories from "./Hero.stories"

const { Default } = composeStories(stories)

// Mock Next.js components
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />,
}))

vi.mock("next/link", () => ({
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))

test("renders hero section with correct content", () => {
  render(<Default />)

  // Check main title
  const title = screen.getByRole("heading", { name: "VULFPECK", level: 1 })
  expect(title).toBeInTheDocument()

  // Check subtitle
  const subtitle = screen.getByText("ミニマル・ファンクの革命児たち")
  expect(subtitle).toBeInTheDocument()

  // Check description
  const description = screen.getByText(/音楽業界の常識を覆し続ける4人組ファンクバンド/)
  expect(description).toBeInTheDocument()
})

test("renders CTA buttons with correct links", () => {
  render(<Default />)

  const aboutLink = screen.getByRole("link", { name: "バンドについて知る" })
  expect(aboutLink).toBeInTheDocument()
  expect(aboutLink).toHaveAttribute("href", "/about")

  const discographyLink = screen.getByRole("link", { name: "ディスコグラフィーを見る" })
  expect(discographyLink).toBeInTheDocument()
  expect(discographyLink).toHaveAttribute("href", "/discography")
})

test("renders band image with correct attributes", () => {
  render(<Default />)

  const image = screen.getByAltText("Vulfpeck Band")
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute("src", "/images/placeholder.svg")
})

test("renders band member names", () => {
  render(<Default />)

  const memberNames = screen.getByText("Jack Stratton, Theo Katzman, Woody Goss, Joe Dart")
  expect(memberNames).toBeInTheDocument()
})

test("has correct section structure", () => {
  const { container } = render(<Default />)

  const section = container.querySelector("section")
  expect(section).toBeInTheDocument()
  expect(section).toHaveClass(
    "relative",
    "bg-gradient-to-b",
    "from-cream-100",
    "to-cream-200",
    "overflow-hidden"
  )
})
