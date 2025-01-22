import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "github-markdown-css"; // Para estilos de Markdown

interface MarkdownViewerProps {
  content: string;
}

function MarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <div className="markdown-container markdown-body border-l-4 pl-4 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <ReactMarkdown
        remarkPlugins={[gfm]} // Adiciona suporte a GFM
        components={{
          img: (props) => (
            <img
              {...props}
              className="w-full h-auto rounded-md" // Imagens ocupam todo o espaço horizontal e têm bordas arredondadas
            />
          ),
          a: (props) => (
            <a
              {...props}
              className="text-blue-600 dark:text-blue-400 underline" // Cor azul para links
            />
          ),
          code: ({ node, inline, className, children, ...props }: any) => {
            return inline ? (
              <code {...props} className={className}>
                {children}
              </code>
            ) : (
              <pre {...props} className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md overflow-x-auto">
                <code className={className}>{children}</code>
              </pre>
            );
          },
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold my-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold my-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-medium my-2">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="my-2">{children}</p> // Adicionando margem para parágrafos
          ),
          table: ({ children }) => (
            <table
              className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 my-4"
            >
              {children}
            </table>
          ),
          th: ({ children }) => (
            <th
              className="border border-gray-300 dark:border-gray-600 p-2 bg-gray-200 dark:bg-gray-700 text-left"
            >
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td
              className="border border-gray-300 dark:border-gray-600 p-2"
            >
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownViewer;