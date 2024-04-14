import React from "react";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import GitUser from "./components/GitUser";
import Spinner from "./components/Spinner";

async function apiResults(search) {
  try{
    const response = await fetch(
      `https://api.github.com/search/users?q=${search}`
    );
    const data = await response.json();
    return data.items || [];
  }
  catch(err){
    console.log(err);
  }
  }

export default function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading,setLoading] = useState(false)

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const results = await apiResults(search);
    setResults(results);
    setLoading(false);
  }
  return (
    <div>
      <div className="app-header">
        <h1>GitFind <i class="fa-brands fa-github"></i></h1>
      </div>
      <div className="hero container">
         <Form onChange={handleSearchChange} onSubmit={handleSubmit} value={search}/>
         <h3 className="text-center my-4">Search Results</h3>
      </div>
      {loading && <Spinner/>}
      <div className="users container-fluid">
          {results.map((acc)=>{
            return (
              <GitUser key={acc.login}
                logo={acc.avatar_url}
                user={acc.html_url}
                username={acc.login}/>
            )
          })}
         </div>
         <div className="footer">
          Designed by <a href="https://github.com/JeremiahRanen7">Jeremiah Ranen R</a>
         </div>
    </div>
  );
}
