import { composeStories } from "@storybook/nextjs-vite"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import * as stories from "./Header.stories"

const { Default, Mobile, MobileMenuOpen } = composeStories(stories)

// Mock Next.js Link component
vi.mock("next/link", () => ({
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))

test("renders header with logo", () => {
  render(<Default />)

  const logo = screen.getByRole("link", { name: "Pocket Daké" })
  expect(logo).toBeInTheDocument()
  expect(logo).toHaveAttribute("href", "/")
})

test("renders desktop navigation links", () => {
  render(<Default />)

  const navItems = ["ホーム", "バンド情報", "ディスコグラフィー", "ライブ", "ニュース", "メディア"]
  navItems.forEach(item => {
    const link = screen.getByRole("link", { name: item })
    expect(link).toBeInTheDocument()
  })
})

test("desktop navigation links have correct hrefs", () => {
  render(<Default />)

  const links = [
    { name: "ホーム", href: "/" },
    { name: "バンド情報", href: "/about" },
    { name: "ディスコグラフィー", href: "/discography" },
    { name: "ライブ", href: "/live" },
    { name: "ニュース", href: "/news" },
    { name: "メディア", href: "/media" },
  ]

  links.forEach(({ name, href }) => {
    const link = screen.getByRole("link", { name })
    expect(link).toHaveAttribute("href", href)
  })
})

test("mobile menu button is hidden on desktop", () => {
  render(<Default />)

  const menuButton = screen.getByLabelText("メニューを開く")
  expect(menuButton).toHaveClass("md:hidden")
})

test("mobile menu opens and closes correctly", async () => {
  const user = userEvent.setup()
  render(<Mobile />)

  // Initially mobile menu should be closed
  expect(screen.queryByText("バンド情報")).not.toBeVisible()

  // Click to open menu
  const menuButton = screen.getByLabelText("メニューを開く")
  await user.click(menuButton)

  // Menu should be visible
  const mobileNavItems = screen.getAllByRole("link")
  expect(mobileNavItems.length).toBeGreaterThan(1)

  // Click to close menu
  await user.click(menuButton)

  // Wait for menu to close
  await vi.waitFor(() => {
    expect(screen.queryByText("バンド情報")).not.toBeVisible()
  })
})

test("mobile menu closes when clicking a link", async () => {
  const user = userEvent.setup()
  render(<MobileMenuOpen />)

  // Menu should be open from the story
  await vi.waitFor(() => {
    const aboutLink = screen.getAllByRole("link", { name: "バンド情報" })[1] // Get mobile version
    expect(aboutLink).toBeVisible()
  })

  // Click a navigation link
  const aboutLink = screen.getAllByRole("link", { name: "バンド情報" })[1]
  await user.click(aboutLink)

  // Menu should close
  await vi.waitFor(() => {
    expect(screen.queryAllByRole("link", { name: "バンド情報" })[1]).not.toBeVisible()
  })
})

test("header has sticky positioning", () => {
  const { container } = render(<Default />)

  const header = container.querySelector("header")
  expect(header).toHaveClass("sticky", "top-0", "z-50")
})
