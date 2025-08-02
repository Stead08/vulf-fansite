import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 見出し
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-display font-bold text-brown-900 mt-12 mb-6 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-display font-bold text-brown-900 mt-10 mb-5 border-b border-cream-300 pb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-display font-semibold text-brown-800 mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-display font-semibold text-brown-800 mt-6 mb-3">
        {children}
      </h4>
    ),

    // テキスト
    p: ({ children }) => (
      <p className="text-brown-700 mb-6 leading-relaxed text-base md:text-lg">{children}</p>
    ),

    // リスト
    ul: ({ children }) => <ul className="list-none space-y-3 mb-6 text-brown-700">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-3 mb-6 text-brown-700 ml-4">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-forest-600 before:font-bold">
        {children}
      </li>
    ),

    // 強調・装飾
    strong: ({ children }) => <strong className="font-semibold text-brown-900">{children}</strong>,
    em: ({ children }) => <em className="italic text-brown-800">{children}</em>,

    // 引用
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-forest-600 pl-6 py-2 italic text-brown-700 bg-cream-50 my-8 rounded-r-lg">
        {children}
      </blockquote>
    ),

    // コード
    code: ({ children }) => (
      <code className="bg-cream-200 text-brown-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-brown-900 text-cream-100 p-4 rounded-lg overflow-x-auto mb-6">
        {children}
      </pre>
    ),

    // リンク
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-forest-600 hover:text-forest-700 underline underline-offset-2 transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),

    // 区切り線
    hr: () => <hr className="border-t border-cream-300 my-8" />,

    // テーブル
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-cream-300">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-cream-100">{children}</thead>,
    tbody: ({ children }) => (
      <tbody className="bg-white divide-y divide-cream-200">{children}</tbody>
    ),
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => (
      <th className="px-4 py-3 text-left text-sm font-semibold text-brown-900">{children}</th>
    ),
    td: ({ children }) => <td className="px-4 py-3 text-sm text-brown-700">{children}</td>,

    ...components,
  }
}
