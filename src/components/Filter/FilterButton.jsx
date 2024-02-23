import { useSelector } from "react-redux";

export default function FilterButton() {
    const filters = useSelector(state => state.filter.filters);
    return (
        <span className="filter-icon rel">
            <div className="filter-length">{filters.length}</div>
            Filter +
        </span>
    )
}