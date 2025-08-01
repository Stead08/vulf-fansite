import { composeStories } from "@storybook/nextjs-vite"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import * as stories from "./button.stories"

const { Default, Destructive, Disabled, Small, Large, Icon } = composeStories(stories)

test("renders default button", () => {
  render(<Default />)
  const button = screen.getByRole("button", { name: "Button" })
  expect(button).toBeInTheDocument()
  expect(button).toHaveAttribute("data-slot", "button")
})

test("handles click events", async () => {
  const handleClick = vi.fn()
  render(<Default onClick={handleClick} />)
  const button = screen.getByRole("button")
  await userEvent.click(button)
  expect(handleClick).toHaveBeenCalledTimes(1)
})

test("renders destructive variant", () => {
  render(<Destructive />)
  const button = screen.getByRole("button", { name: "Delete" })
  expect(button).toBeInTheDocument()
  expect(button.className).toContain("bg-destructive")
})

test("respects disabled state", async () => {
  const handleClick = vi.fn()
  render(<Disabled onClick={handleClick} />)
  const button = screen.getByRole("button", { name: "Disabled" })
  expect(button).toBeDisabled()
  await userEvent.click(button)
  expect(handleClick).not.toHaveBeenCalled()
})

test("renders different sizes correctly", () => {
  const { rerender } = render(<Small />)
  let button = screen.getByRole("button", { name: "Small" })
  expect(button.className).toContain("h-8")

  rerender(<Large />)
  button = screen.getByRole("button", { name: "Large" })
  expect(button.className).toContain("h-10")

  rerender(<Icon />)
  button = screen.getByRole("button", { name: "🚀" })
  expect(button.className).toContain("size-9")
})

test("applies custom className", () => {
  render(<Default className="custom-class" />)
  const button = screen.getByRole("button")
  expect(button).toHaveClass("custom-class")
})

test("forwards props correctly", () => {
  render(<Default id="test-button" data-testid="button-test" />)
  const button = screen.getByRole("button")
  expect(button).toHaveAttribute("id", "test-button")
  expect(button).toHaveAttribute("data-testid", "button-test")
})
