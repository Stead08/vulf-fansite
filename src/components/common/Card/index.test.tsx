import { composeStories } from "@storybook/nextjs-vite"
import { render, screen } from "@testing-library/react"
import { expect, test, vi } from "vitest"
import * as stories from "./index.stories"

const { Default, WithoutImage, WithoutTags, MinimalCard, LongContent } = composeStories(stories)

// Mock Next.js components
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />,
}))

vi.mock("next/link", () => ({
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))

test("renders card with all props", () => {
  render(<Default />)

  const title = screen.getByRole("heading", { name: "新アルバム「Schvitz」リリース決定！" })
  expect(title).toBeInTheDocument()

  const excerpt = screen.getByText(/Vulfpeckが2年ぶりとなる新作アルバム/)
  expect(excerpt).toBeInTheDocument()

  const date = screen.getByText("2025-01-15")
  expect(date).toBeInTheDocument()

  const image = screen.getByAltText("新アルバム「Schvitz」リリース決定！")
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute("src", "/images/placeholder.svg")

  const tags = ["アルバム", "リリース"]
  tags.forEach(tag => {
    expect(screen.getByText(tag)).toBeInTheDocument()
  })
})

test("renders card without image", () => {
  render(<WithoutImage />)

  const title = screen.getByRole("heading", { name: "Theo Katzmanソロプロジェクト始動" })
  expect(title).toBeInTheDocument()

  const images = screen.queryAllByRole("img")
  expect(images).toHaveLength(0)
})

test("renders card without tags", () => {
  render(<WithoutTags />)

  const title = screen.getByRole("heading", { name: "初の日本ツアー開催が決定" })
  expect(title).toBeInTheDocument()

  // Check that no tag elements are rendered
  const tagElements = screen.queryAllByText(/タグ/)
  expect(tagElements).toHaveLength(0)
})

test("renders minimal card with only required props", () => {
  render(<MinimalCard />)

  const title = screen.getByRole("heading", { name: "シンプルなカード" })
  expect(title).toBeInTheDocument()

  // No excerpt, date, image, or tags should be present
  expect(screen.queryByText(/説明文/)).not.toBeInTheDocument()
  expect(screen.queryAllByRole("img")).toHaveLength(0)
})

test("card link covers entire card area", () => {
  render(<Default />)

  const link = screen.getByRole("link")
  expect(link).toHaveAttribute("href", "/news/new-album-release")

  // Check for the span that makes the entire card clickable
  const clickableSpan = link.querySelector('span[aria-hidden="true"]')
  expect(clickableSpan).toBeInTheDocument()
  expect(clickableSpan).toHaveClass("absolute", "inset-0")
})

test("long content is truncated properly", () => {
  render(<LongContent />)

  const excerpt = screen.getByText(/これは非常に長い説明文のサンプルです/)
  expect(excerpt).toHaveClass("line-clamp-3")
})

test("date is rendered as time element", () => {
  const { container } = render(<Default />)

  const timeElement = container.querySelector("time")
  expect(timeElement).toBeInTheDocument()
  expect(timeElement).toHaveTextContent("2025-01-15")
})

test("card has correct structure", () => {
  const { container } = render(<Default />)

  const article = container.querySelector("article")
  expect(article).toBeInTheDocument()
  expect(article).toHaveClass("card", "overflow-hidden", "group", "h-full", "flex", "flex-col")
})
