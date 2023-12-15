import { useState } from "react";

export default function Search({ setSearchParams, query }) {
    const [search, setSearch] = useState(query);

    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.value;
        const params = {}

        if (query.length) params.item = query

        setSearchParams(params)
        setSearch(query)
    };

    return (
        <form autoComplete="off" style={{ position: 'relative' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px' }}>
                <path d="M8.8065 7.75792C9.39956 6.95048 9.74988 5.95365 9.74988 4.875C9.74988 2.18261 7.56727 0 4.87488 0C2.18249 0 -0.00012207 2.18261 -0.00012207 4.875C-0.00012207 7.56739 2.18249 9.75 4.87488 9.75C5.95382 9.75 6.95089 9.3995 7.75844 8.80614L7.75779 8.80662C7.77991 8.83661 7.80455 8.86533 7.8317 8.89248L10.7196 11.7803C11.0124 12.0732 11.4873 12.0732 11.7802 11.7803C12.0731 11.4874 12.0731 11.0126 11.7802 10.7197L8.89236 7.83182C8.86521 7.80467 8.83649 7.78004 8.8065 7.75792ZM8.99988 4.875C8.99988 7.15317 7.15305 9 4.87488 9C2.5967 9 0.749878 7.15317 0.749878 4.875C0.749878 2.59683 2.5967 0.75 4.87488 0.75C7.15305 0.75 8.99988 2.59683 8.99988 4.875Z" fill="#949494" />
            </svg>
            <input
                type="search"
                name="search"
                placeholder="Search"
                value={search}
                onChange={handleSearch}
                className="text-white py-[5px] pl-[30px] gap-[6px] border-none rounded-[6px] w-[10vw] min-w-[140px] bg-[#111] border-[1px] border-[#333232]" />
        </form>
    )
}