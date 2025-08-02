import type { Meta, StoryObj } from "@storybook/react"
import AlbumDetailPage from "@/app/discography/[id]/page"

const meta: Meta<typeof AlbumDetailPage> = {
  title: "Pages/AlbumDetail",
  component: AlbumDetailPage,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/discography/the-beautiful-game",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const TheBeautifulGame: Story = {
  args: {
    params: { id: "the-beautiful-game" },
  },
}

export const ThrillOfTheArts: Story = {
  args: {
    params: { id: "thrill-of-the-arts" },
  },
}

export const FugueState: Story = {
  args: {
    params: { id: "fugue-state" },
  },
}

export const MitPeck: Story = {
  args: {
    params: { id: "mit-peck" },
  },
}

export const NotFound: Story = {
  args: {
    params: { id: "non-existent-album" },
  },
}