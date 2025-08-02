import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import Card from "./index"

const meta = {
  title: "Common/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    excerpt: {
      control: "text",
    },
    date: {
      control: "text",
    },
    image: {
      control: "text",
    },
    href: {
      control: "text",
    },
    tags: {
      control: "object",
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "新アルバム「Schvitz」リリース決定！",
    excerpt:
      "Vulfpeckが2年ぶりとなる新作アルバム「Schvitz」を3月にリリースすることを発表しました。",
    date: "2025-01-15",
    image: "/images/placeholder.svg",
    href: "/news/new-album-release",
    tags: ["アルバム", "リリース"],
  },
}

export const WithoutImage: Story = {
  args: {
    title: "Theo Katzmanソロプロジェクト始動",
    excerpt: "VulfpeckのボーカリストTheo Katzmanが新たなソロプロジェクトを発表。",
    date: "2025-01-05",
    href: "/news/theo-solo-project",
    tags: ["メンバー", "ソロ活動"],
  },
}

export const WithoutTags: Story = {
  args: {
    title: "初の日本ツアー開催が決定",
    excerpt: "待望の日本初上陸！東京・大阪・名古屋での公演が6月に開催されます。",
    date: "2025-01-10",
    image: "/images/placeholder.svg",
    href: "/news/japan-tour",
  },
}

export const MinimalCard: Story = {
  args: {
    title: "シンプルなカード",
    href: "/simple-card",
  },
}

export const LongContent: Story = {
  args: {
    title:
      "非常に長いタイトルが設定されているカードのサンプルです。タイトルが長い場合の表示を確認します。",
    excerpt:
      "これは非常に長い説明文のサンプルです。説明文が長い場合、line-clampによって3行で切り捨てられ、末尾に省略記号が表示されます。このように長いテキストでも適切に表示されることを確認できます。さらに長い文章を追加して、実際の動作を確認しましょう。",
    date: "2025-01-20",
    image: "/images/placeholder.svg",
    href: "/news/long-content",
    tags: ["長文", "サンプル", "テスト", "確認用"],
  },
}

export const GridLayout: Story = {
  args: {
    title: "サンプルカード",
    href: "/sample",
  },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
      <Card
        title="カード1"
        excerpt="グリッドレイアウトでの表示例です。"
        date="2025-01-01"
        image="/images/placeholder.svg"
        href="/card-1"
        tags={["タグ1"]}
      />
      <Card
        title="カード2"
        excerpt="3カラムレイアウトでの表示を確認します。"
        date="2025-01-02"
        image="/images/placeholder.svg"
        href="/card-2"
        tags={["タグ2"]}
      />
      <Card
        title="カード3"
        excerpt="レスポンシブデザインも確認できます。"
        date="2025-01-03"
        image="/images/placeholder.svg"
        href="/card-3"
        tags={["タグ3"]}
      />
    </div>
  ),
}
