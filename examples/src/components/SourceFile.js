import escape from 'escape-html';
import React from 'react';

export default function SourceFile({ src, language }) {
  return (
    <pre><code className={`language-${language}`} dangerouslySetInnerHTML={{__html: escape(src)}}></code></pre>
  );
}

SourceFile.defaultProps = {
  language: 'jsx'
};
