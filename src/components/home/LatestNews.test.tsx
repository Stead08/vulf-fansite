import { composeStories } from "@storybook/nextjs-vite"
import { render, screen } from "@testing-library/react"
import { expect, test, vi } from "vitest"
import * as stories from "./LatestNews.stories"

const { Default } = composeStories(stories)

// Mock Next.js Link component
vi.mock("next/link", () => ({
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))

// Mock Card component
vi.mock("@/components/common/Card", () => ({
  default: ({ title, excerpt, date, href, tags }: any) => (
    <article data-testid="news-card">
      <a href={href}>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <time>{date}</time>
        {tags && tags.map((tag: string) => <span key={tag}>{tag}</span>)}
      </a>
    </article>
  ),
}))

test("renders section with correct title and description", () => {
  render(<Default />)

  const heading = screen.getByRole("heading", { name: "最新ニュース", level: 2 })
  expect(heading).toBeInTheDocument()

  const description = screen.getByText(
    "Vulfpeckの最新情報、リリース情報、ライブスケジュールなどをお届けします"
  )
  expect(description).toBeInTheDocument()
})

test("renders all news articles", () => {
  render(<Default />)

  const newsCards = screen.getAllByTestId("news-card")
  expect(newsCards).toHaveLength(3)

  // Check specific articles
  expect(screen.getByText("新アルバム「Schvitz」リリース決定！")).toBeInTheDocument()
  expect(screen.getByText("初の日本ツアー開催が決定")).toBeInTheDocument()
  expect(screen.getByText("Theo Katzmanソロプロジェクト始動")).toBeInTheDocument()
})

test("renders article dates", () => {
  render(<Default />)

  expect(screen.getByText("2025-01-15")).toBeInTheDocument()
  expect(screen.getByText("2025-01-10")).toBeInTheDocument()
  expect(screen.getByText("2025-01-05")).toBeInTheDocument()
})

test("renders article tags", () => {
  render(<Default />)

  expect(screen.getByText("アルバム")).toBeInTheDocument()
  expect(screen.getByText("リリース")).toBeInTheDocument()
  expect(screen.getByText("ライブ")).toBeInTheDocument()
  expect(screen.getByText("日本ツアー")).toBeInTheDocument()
})

test("renders view all news link", () => {
  render(<Default />)

  const viewAllLink = screen.getByRole("link", { name: /すべてのニュースを見る/ })
  expect(viewAllLink).toBeInTheDocument()
  expect(viewAllLink).toHaveAttribute("href", "/news")
})

test("has correct section structure", () => {
  const { container } = render(<Default />)

  const section = container.querySelector("section")
  expect(section).toBeInTheDocument()
  expect(section).toHaveClass("section-padding", "bg-white")
})
