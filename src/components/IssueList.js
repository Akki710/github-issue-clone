import React, { useState, useEffect } from "react";
import ListHeader from "./ListHeader";
import SingleIssue from "./SingleIssue";
import ReactPaginate from "react-paginate";

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [pagecount, setpagecount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.github.com/repos/facebook/create-react-app/issues?page=1"
      );
      const data = await res.json();
      console.log("Response ::: ", data);
      setpagecount(pagecount+1)
      setIssues(data);
    };
    fetchData();
  }, [])
  eslint-disable-next-line react-hooks/exhaustive-deps



  const fetchissues = async (currentpage) => {
    const res = await fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues?page=${currentpage}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentpage = data.selected + 1;

    const issuesfromserver = await fetchissues(currentpage);

    setIssues(issuesfromserver);
  };

  return (
    <div className="issueList-container">
      <ListHeader />

      {issues.map((issue) => {
        return <SingleIssue key={issue.id} issue={issue} />;
      })}
      <ReactPaginate
        previousLabel={"<  Previous"}
        nextLabel={"Next  >"}
        breakLabel={"..."}
        pageCount={48}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item-previous"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item-next"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default IssueList;
