import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import IssueList from './components/IssueList';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/repos/facebook/react/issues')
      .then(response => {
        setIssues(response.data);
        setFilteredIssues(response.data);
      })
      .catch(error => console.error('Error fetching issues:', error));
  }, []);

  const handleSearch = searchText => {
    const filtered = issues.filter(issue =>
      issue.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredIssues(filtered);
  };

  return (
    <div className="app">
      <h1>React Issues</h1>
      <SearchBar onSearch={handleSearch} />
      <IssueList issues={filteredIssues} />
    </div>
  );
};

export default App;
