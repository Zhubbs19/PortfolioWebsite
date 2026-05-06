import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeViewer({ code, language = 'csharp', filename }) {
  return (
    <div style={{ borderRadius: '8px', margin: '16px 0', maxWidth: '100%' }}>
      {filename && (
        <div style={{
          background: '#1e1e1e',
          color: '#9cdcfe',
          padding: '6px 16px',
          fontSize: '0.85rem',
          fontFamily: 'monospace',
          borderBottom: '1px solid #333',
          borderRadius: '8px 8px 0 0'
        }}>
          {filename}
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers
        wrapLongLines={true}
        customStyle={{
          margin: 0,
          borderRadius: filename ? '0 0 8px 8px' : '8px',
          fontSize: 'clamp(0.6rem, 1.6vw, 0.875rem)',
          whiteSpace: 'pre-wrap',
        }}
        codeTagProps={{ style: { whiteSpace: 'pre-wrap' } }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeViewer;
