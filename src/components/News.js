// import React, {useEffect, useState} from 'react'

// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props)=>{
//     const [articles, setArticles] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [page, setPage] = useState(1)
//     const [totalResults, setTotalResults] = useState(0)
    
//     const capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     } 

//     const updateNews = async ()=> {
//         props.setProgress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=980e68e5e2c8487f9f9261774e103efa&page=${page}&pageSize=${props.pageSize}`; 
//         setLoading(true)
//         let data = await fetch(url);
//         props.setProgress(30);
//         let parsedData = await data.json()
//         props.setProgress(70);
//         setArticles(parsedData.articles)
//         setTotalResults(parsedData.totalResults)
//         setLoading(false)
//         props.setProgress(100);
//     }

//     useEffect(() => {
//         document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
//         updateNews(); 
//         // eslint-disable-next-line
//     }, [])


//     const fetchMoreData = async () => {   
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=980e68e5e2c8487f9f9261774e103efa&page=${page+1}&pageSize=${props.pageSize}`;
//         setPage(page+1) 
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         setArticles(articles.concat(parsedData.articles))
//         setTotalResults(parsedData.totalResults)
//       };
 
//         return (
//             <>
//                 <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
//                 {loading && <Spinner />}
//                 <InfiniteScroll
//                     dataLength={articles.length}
//                     next={fetchMoreData}
//                     hasMore={articles.length !== totalResults}
//                     loader={<Spinner/>}
//                 > 
//                     <div className="container">
                         
//                     <div className="row">
//                         {articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                     </div> 
//                 </InfiniteScroll>
//             </>
//         )
    
// }


// News.defaultProps = {
//     country: 'us',
//     pageSize: 8,
//     category: 'general',
// }

// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// }

// export default News
// import React, {useEffect,useState}from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// const News =(props) => {
//     const[articles,setArticles] = useState([])
//     const[loading,setLoading] =useState(true)
//     const[page,setPage]= useState(1)
//     const[totalResults,setTotalResults] =useState(0)

//     // console.log("hello this is constructor form the news componenct");
   

//   const updatenews =async () =>{
//     // console.log("cdm");
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=980e68e5e2c8487f9f9261774e103efa&page=${page}&pageSize=${props.pageSize} `;
//     // this.setState({ loading: true });
//     setLoading(true)
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     // this.setState({ articles: parsedData.articles, loading: false});
//     console.log(parsedData);
//     setArticles(parsedData.articles)
//     setTotalResults (parsedData.totalResults)
//     setLoading (false)

//   }

//   useEffect(()=>{
//     updatenews();
//     // eslint-disable-next-line
//   },[])
//   const capitalizeFirstLetter=(string) =>{
//     return string.charAt(0).toUpperCase() + string.slice(1)
//   }
//   useEffect(() => {
//     document.title = `${capitalizeFirstLetter(props.category)} - Prime Bulletin`;
//   }, [props.category]);

//   // const handleprevclick = async () => {
//     // console.log("previous")
//     // // console.log("cdm");
//     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=980e68e5e2c8487f9f9261774e103efa&page=${this.state.page-1}&pageSize=${props.pageSize}`;
//     //     this.setState({loading : true});
//     //     let data = await fetch(url);
//     //     let parsedData = await data.json();
//     //     // this.setState({ articles: parsedData.articles, loading: false });
//     //     console.log(parsedData)

//     // this.setState({
//     //   page : this.state.page - 1,
//     //   articles : parsedData.articles,
//     //   loading : false
//     // })
//     // console.log("previous")

//   //   setPage(page-1)
//   //   updatenews();
//   // };

//   // const handlenextclick = async () => {
//     //   console.log("next")
//     //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){

//     //   console.log("next")
//     //   // console.log("cdm");
//     //       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=980e68e5e2c8487f9f9261774e103efa&page=${this.state.page + 1}&pageSize=${props.pageSize}`;

//     //       let data = await fetch(url);
//     //       this.setState({loading : true});
//     //       let parsedData = await data.json();
//     //       // this.setState({ articles: parsedData.articles, loading: false });
//     //       // console.log(parsedData)

//     //   this.setState({
//     //     page : this.state.page + 1,
//     //     articles : parsedData.articles,
//     //     loading : false
//     //   })
//     // }

//   //   setPage(page+1)
//   //   updatenews();
//   // };

//   const fetchMoreData = async () => {
//     // a fake async api call like which sends
//     // 20 more records in 1.5 secs
//     props.setProgress(20);

//     // this.updatenews()
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=980e68e5e2c8487f9f9261774e103efa&page=${page+1}&pageSize=${props.pageSize} `;
//     setPage(page+1)
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     // this.setState({ articles: parsedData.articles, loading: false});

//     props.setProgress(60);
//     setArticles(articles.concat(parsedData.articles))
//     setTotalResults(parsedData.totalResults)
//     // setLoading(false)

//     props.setProgress(100);
//   };

//     return (
//       <div className="container my-3 ">
//         <h2 className="text-center" style={{margin : '35px 0px',marginTop : '90px'}}>Newsmonkey - Top Headlines on {capitalizeFirstLetter(props.category)}</h2>
//         <div className="text-center">{loading && <Spinner />}</div>
//         {/* {this.state.articles.map((element)=>{})} */}
//         <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length !== totalResults}
//           loader={<Spinner />}
//         >
//           {/* !this.state.loading && */}
//           {/* <div className="row"> */}
//           <div className="container">
//             <div className="row">
//               {articles.map((element) => {
//                 return (
//                   <div className="col-md-4" key={element.url}>
//                     <NewsItem
//                       title={element.title ? element.title.slice(0, 45) : ""}
//                       description={
//                         element.description ? element.description : ""
//                       }
//                       imgurl={element.urlToImage}
//                       newsurl={element.url}
//                       author={element.author}
//                       date={element.publishedAt}
//                       source={element.source.name}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>
//         {/* <div className='container d-flex justify-content-between'>
//         <button disabled = {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; Previous</button>
//         <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}> Next &rarr; </button>
//         </div> */}
//       </div>
//     );

// }
// News.defaultProps = {
//   country: "us",
//   pageSize: 8,
//   category: "general",
// };

// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };

// export default News

import React, { useEffect, useState, useCallback } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - Prime Bulletin`;
  }, [props.category]);

  // Format date for API (YYYY-MM-DD)
  const formatDateForAPI = (date) => {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  };

  // Format date for display (Month Day, Year)
  const formatDateForDisplay = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  // Fetch news function
  const fetchNews = useCallback(
    async (pageNumber = 1, reset = false) => {
      setLoading(true);
      let url;

      if (selectedDate) {
        const dateStr = formatDateForAPI(selectedDate);
        url = `https://newsapi.org/v2/everything?q=${props.category}&from=${dateStr}&to=${dateStr}&sortBy=popularity&apiKey=32139aa22c1742ea813924f20528ec7a&page=${pageNumber}&pageSize=${props.pageSize}`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=32139aa22c1742ea813924f20528ec7a&page=${pageNumber}&pageSize=${props.pageSize}`;
      }

      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data); // 👉 debug output

        if (data.status !== "ok") {
          console.error("API Error:", data.message);
          setLoading(false);
          return;
        }

        if (reset) {
          setArticles(data.articles || []);
        } else {
          setArticles((prevArticles) => [
            ...prevArticles,
            ...(data.articles || []),
          ]);
        }

        setTotalResults(data.totalResults || 0);
      } catch (error) {
        console.error("Fetch failed:", error);
      } finally {
        setLoading(false);
      }
    },
    [selectedDate, props.category, props.country, props.pageSize]
  );

  useEffect(() => {
    setPage(1);
    fetchNews(1, true); // reset = true
  }, [fetchNews]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    props.setProgress(20);
    await fetchNews(nextPage, false);
    props.setProgress(100);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setPage(1);
  };

  useEffect(() => {
    if (selectedDate !== null) {
      fetchNews(1, true); // Reset articles when a new date is selected
    }
  }, [selectedDate, fetchNews]);

  return (
    <div className="container my-3">
      {/* Heading */}
      <h2
        className="text-center"
        style={{ marginTop: "90px", marginBottom: "35px" }}
      >
        Prime Bulletin -{" "}
        {selectedDate
          ? `News on ${capitalizeFirstLetter(
              props.category
            )} at ${formatDateForDisplay(selectedDate)}`
          : `Top Headlines ${capitalizeFirstLetter(props.category)}`}
      </h2>

      {/* Date Picker */}
      <div className="text-center mb-4">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Pick a date for news"
          className="form-control"
          maxDate={new Date()}
        />
      </div>

      {/* Loading spinner */}
      <div className="text-center">{loading && <Spinner />}</div>

      {/* News Articles */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description || ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source?.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News;
