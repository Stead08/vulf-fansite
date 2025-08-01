import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { userEvent, within } from "@storybook/test"
import Header from "./Header"

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const MobileMenuOpen: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    const menuButton = canvas.getByLabelText("メニューを開く")
    await userEvent.click(menuButton)
  },
}

export const WithScroll: Story = {
  decorators: [
    (Story: any) => (
      <div style={{ height: "200vh" }}>
        <Story />
        <div style={{ padding: "2rem" }}>
          <p>Scroll down to see sticky header behavior</p>
        </div>
      </div>
    ),
  ],
}
