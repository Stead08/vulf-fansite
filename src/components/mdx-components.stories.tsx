import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'
import mdxComponents from './mdx-components'

// メタ情報
const meta = {
  title: 'Components/MDX',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// Typography展示用のラッパーコンポーネント
const TypographyShowcase = () => {
  const H1 = mdxComponents.h1 as React.FC<React.PropsWithChildren>
  const H2 = mdxComponents.h2 as React.FC<React.PropsWithChildren>
  const H3 = mdxComponents.h3 as React.FC<React.PropsWithChildren>
  const H4 = mdxComponents.h4 as React.FC<React.PropsWithChildren>
  const P = mdxComponents.p as React.FC<React.PropsWithChildren>
  const Strong = mdxComponents.strong as React.FC<React.PropsWithChildren>
  const Em = mdxComponents.em as React.FC<React.PropsWithChildren>

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-600">見出し (Headings)</h2>
        <div className="space-y-4">
          <H1>H1: Vulfpeck - ミニマルファンクの革命</H1>
          <H2>H2: バンドメンバー紹介</H2>
          <H3>H3: Jack Stratton - ドラム、キーボード</H3>
          <H4>H4: 主な使用機材</H4>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-600">段落とテキスト装飾</h2>
        <P>
          Vulfpeckは<Strong>2011年にミシガン大学</Strong>で結成されたアメリカのファンクバンドです。
          彼らの音楽は<Em>ミニマルでありながら非常にグルーヴィー</Em>で、
          世界中のミュージシャンから高い評価を受けています。
        </P>
      </section>
    </div>
  )
}

export const Typography: Story = {
  render: () => <TypographyShowcase />,
}

// リスト展示用コンポーネント
const ListShowcase = () => {
  const UL = mdxComponents.ul as React.FC<React.PropsWithChildren>
  const OL = mdxComponents.ol as React.FC<React.PropsWithChildren>
  const LI = mdxComponents.li as React.FC<React.PropsWithChildren>

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-600">順序なしリスト</h2>
        <UL>
          <LI>Jack Stratton - ドラム、キーボード、プロデューサー</LI>
          <LI>Theo Katzman - ギター、ボーカル</LI>
          <LI>Woody Goss - キーボード</LI>
          <LI>Joe Dart - ベース</LI>
        </UL>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-600">順序付きリスト</h2>
        <OL>
          <LI>Mit Peck (2011)</LI>
          <LI>Vollmilch (2012)</LI>
          <LI>My First Car (2013)</LI>
          <LI>Fugue State (2014)</LI>
          <LI>Thrill of the Arts (2015)</LI>
        </OL>
      </section>
    </div>
  )
}

export const Lists: Story = {
  render: () => <ListShowcase />,
}

// 引用とコード展示用コンポーネント
const QuoteAndCodeShowcase = () => {
  const BlockQuote = mdxComponents.blockquote as React.FC<React.PropsWithChildren>
  const P = mdxComponents.p as React.FC<React.PropsWithChildren>
  const Code = mdxComponents.code as React.FC<React.PropsWithChildren>
  const Pre = mdxComponents.pre as React.FC<React.PropsWithChildren>

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-600">引用 (Blockquote)</h2>
        <BlockQuote>
          <P>
            "音楽において最も重要なのは、演奏しない音だ。" - Jack Stratton
          </P>
        </BlockQuote>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-600">インラインコード</h2>
        <P>
          Vulfpeckの楽曲は<Code>120-130 BPM</Code>のテンポで構成されることが多く、
          <Code>Fender Stratocaster</Code>や<Code>Fender Jazz Bass</Code>などの
          クラシックな楽器が使用されています。
        </P>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-600">コードブロック</h2>
        <Pre>
          <code>{`// Vulfpeck風のグルーヴパターン
const groove = {
  kick:  [1, 0, 0, 0, 1, 0, 0, 0],
  snare: [0, 0, 1, 0, 0, 0, 1, 0],
  hihat: [1, 1, 0, 1, 1, 1, 0, 1]
}`}</code>
        </Pre>
      </section>
    </div>
  )
}

export const QuoteAndCode: Story = {
  render: () => <QuoteAndCodeShowcase />,
}

// リンク展示用コンポーネント
const LinkShowcase = () => {
  const P = mdxComponents.p as React.FC<React.PropsWithChildren>
  const A = mdxComponents.a as React.FC<React.PropsWithChildren<{ href?: string }>>

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h2 className="text-xl font-bold mb-4 text-gray-600">リンク</h2>
      <P>
        詳しい情報は<A href="/discography">ディスコグラフィーページ</A>をご覧ください。
        また、公式サイトは<A href="https://vulfpeck.com">vulfpeck.com</A>です。
      </P>
    </div>
  )
}

export const Links: Story = {
  render: () => <LinkShowcase />,
}

// テーブル展示用コンポーネント
const TableShowcase = () => {
  const Table = mdxComponents.table as React.FC<React.PropsWithChildren>
  const THead = mdxComponents.thead as React.FC<React.PropsWithChildren>
  const TBody = mdxComponents.tbody as React.FC<React.PropsWithChildren>
  const TR = mdxComponents.tr as React.FC<React.PropsWithChildren>
  const TH = mdxComponents.th as React.FC<React.PropsWithChildren>
  const TD = mdxComponents.td as React.FC<React.PropsWithChildren>

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-600">テーブル</h2>
      <Table>
        <THead>
          <TR>
            <TH>アルバム</TH>
            <TH>リリース年</TH>
            <TH>レーベル</TH>
            <TH>形式</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>Mit Peck</TD>
            <TD>2011</TD>
            <TD>Self-released</TD>
            <TD>EP</TD>
          </TR>
          <TR>
            <TD>Vollmilch</TD>
            <TD>2012</TD>
            <TD>Self-released</TD>
            <TD>EP</TD>
          </TR>
          <TR>
            <TD>The Beautiful Game</TD>
            <TD>2016</TD>
            <TD>Vulf Records</TD>
            <TD>Album</TD>
          </TR>
          <TR>
            <TD>Hill Climber</TD>
            <TD>2018</TD>
            <TD>Vulf Records</TD>
            <TD>Album</TD>
          </TR>
        </TBody>
      </Table>
    </div>
  )
}

export const Table: Story = {
  render: () => <TableShowcase />,
}

// 全要素を組み合わせた展示
const CompleteShowcase = () => {
  const H1 = mdxComponents.h1 as React.FC<React.PropsWithChildren>
  const H2 = mdxComponents.h2 as React.FC<React.PropsWithChildren>
  const H3 = mdxComponents.h3 as React.FC<React.PropsWithChildren>
  const P = mdxComponents.p as React.FC<React.PropsWithChildren>
  const UL = mdxComponents.ul as React.FC<React.PropsWithChildren>
  const LI = mdxComponents.li as React.FC<React.PropsWithChildren>
  const Strong = mdxComponents.strong as React.FC<React.PropsWithChildren>
  const Em = mdxComponents.em as React.FC<React.PropsWithChildren>
  const BlockQuote = mdxComponents.blockquote as React.FC<React.PropsWithChildren>
  const Code = mdxComponents.code as React.FC<React.PropsWithChildren>
  const A = mdxComponents.a as React.FC<React.PropsWithChildren<{ href?: string }>>
  const HR = mdxComponents.hr as React.FC

  return (
    <article className="max-w-4xl mx-auto">
      <H1>Vulfpeck: ミニマルファンクの新時代</H1>
      
      <P>
        <Strong>Vulfpeck</Strong>は、2011年に結成されたアメリカの
        <Em>インストゥルメンタル・ファンクバンド</Em>です。
        彼らの音楽は、<Code>低音質</Code>でありながら高品質という
        独特のアプローチで知られています。
      </P>

      <H2>バンドの特徴</H2>
      
      <UL>
        <LI>ミニマルなアレンジメント</LI>
        <LI>タイトなリズムセクション</LI>
        <LI>ヴィンテージ機材の使用</LI>
        <LI>DIY精神</LI>
      </UL>

      <BlockQuote>
        <P>
          "我々は音楽のケンタッキーフライドチキンを作っている。
          誰もが楽しめるシンプルで美味しいものだ。"
        </P>
      </BlockQuote>

      <HR />

      <H3>関連リンク</H3>
      
      <P>
        詳細は<A href="https://vulfpeck.com">公式サイト</A>をご覧ください。
        また、最新情報は<A href="/news">ニュースページ</A>で更新しています。
      </P>
    </article>
  )
}

export const Complete: Story = {
  render: () => <CompleteShowcase />,
  parameters: {
    docs: {
      description: {
        story: 'MDXコンポーネントを実際の記事のように組み合わせた例です。',
      },
    },
  },
}