import React from 'react';

const IssueItem = ({ issue }) => (
  <div className="issue-item">
    <h3>
      <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
        {issue.title}
      </a>
    </h3>
    <p>ID: {issue.number}</p>
    <p>Autor: {issue.user.login}</p>
    <p>Labels: {issue.labels.map(label => label.name).join(', ')}</p>
  </div>
);

export default IssueItem;
