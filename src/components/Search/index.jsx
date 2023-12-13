import { redirect } from "react-router-dom";
import { useState } from "react";

export default function Search({ setSearchParams, query }) {
    const [search, setSearch] = useState(query);
    const [data, setData] = useState();

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;

        const query = form.search.value
        const params = {}

        if (query.length) params.post = query 
        // setSearchParams(params)

        return redirect('/')
    };

    return (
        <form onSubmit={handleSearch} autoComplete="off">
            <input type="search" name="search" value={search} onChange={e => setSearch(e.target.value)} className="text-black"/>
            <input type="submit" value='Search'/>
        </form>
    );
}

// function BlogFilter({ setSearchParams, latest, query }) {

//     const [search, setSearch] = useState(query)
//     const [checked, setChecked] = useState(latest)

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const query = form.search.value;
//     const isLatest = form.latest.checked;

//     const params = {};

//     if (query.length) params.post = query;
//     if (isLatest) params.latest = true;

//     setSearchParams(params);
//   };

//   return (
//     <form autoComplete="off" onSubmit={handleSubmit}>
//       <input type="search" name="search" value={search} onChange={e => setSearch(e.target.value)}/>
//       <input type="submit" value="Search" />
//       <label style={{ padding: "0 1rem" }}>
//         <input type="checkbox" name="latest" checked={checked} onChange={e => setChecked(e.target.checked)}/> New only
//       </label>
//     </form>
//   );
// }

// export { BlogFilter };

// import { Link, useSearchParams } from 'react-router-dom';
// import { BlogFilter } from '../components/BlogFilter';

// const Blogpage = () => {
//     const [posts, setPosts] = useState([]);
//     const [searchParams, setSearchParams] = useSearchParams()

//     const query = searchParams.get('post') || ''
//     const latest = searchParams.has('latest')

//     const startFrom = latest ? 80 : 1

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(data => setData(data))
//     }, []);

//     return (
//         <div>
//             <h1>Our news</h1>
//             <BlogFilter setSearchParams={setSearchParams} latest={latest} query={query}/>

//             <Link to="/posts/new">Add new post</Link>
//             {
//                 posts.filter(post => post.title.includes(query) && post.id >= startFrom
//                 ).map(post => (
//                     <Link key={post.id} to={`/posts/${post.id}`}>
//                         <li>{post.title}</li>
//                     </Link>
//                 ))
//             }
//         </div>
//     )
// }

// export {Blogpage}
// import Search from '..'
// const [searchParams, setSearchParams] = useSearchParams()
// const [posts, setPosts] = useState([]);
// const query = searchParams.get('post') || ''
//     return (
//         <>
            
//             <Search setSearchParams={setSearchParams} query={query}/>

//             {
//                 posts.filter(post => post.title.includes(query)
//                 ).map(post => (

//                 ))
//             }
//         </>
//     )
