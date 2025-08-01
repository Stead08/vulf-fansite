import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import Hero from "./Hero"

const meta = {
  title: "Home/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>

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

export const WithCustomBackground: Story = {
  decorators: [
    (Story: any) => (
      <div style={{ background: "linear-gradient(to bottom, #f5f5f5, #e0e0e0)" }}>
        <Story />
      </div>
    ),
  ],
}