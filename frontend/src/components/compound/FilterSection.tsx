import Dropdown from "./Dropdown";

// const [filterValues, setFilterValues] = useState({
//     leaseTiming: '',
//     housemateCount: '',
//     movingIn: ''
// });

// const handleFilterChange = (name: string, value: string) => {
//     setFilterValues(prev => ({ ...prev, [name]: value }));
//     console.log(filterValues);
// };

{/* <FilterSection onFilterChange={handleFilterChange} /> */ }


const FilterSection: React.FC<{ onFilterChange: (filter: string, value: any) => void }> = ({ onFilterChange }) => {
    return <div className="flex flex-row justify-center space-x-6 px-6 flex-wrap">
        {/* selection filters */}
        <div className="flex flex-col flex-auto">
            <span className="text-sm text-[#474747]">
                Preference filters
            </span>
            <div className="flex flex-row flex-1 space-x-4">
                <Dropdown
                    options={["Lease Timing", "Lease Preference"]}
                    onSelect={(value) => onFilterChange('leaseTiming', value)}
                    defaultOption="Lease Timing"
                />
                <Dropdown
                    options={["Today", "This Week", "This Month", "Older"]}
                    onSelect={(value) => onFilterChange('housemateCount', value)}
                    defaultOption="Housemate Count"
                />
            </div>
        </div >
        {/* end selection filters */}

        {/* timeline filters */}
        <div className="flex flex-col flex-auto border-l border-gray-300 pl-2">
            <span className="text-sm text-[#474747]">
                Timeline Filter
            </span>
            <div className="flex flex-row ">
                <Dropdown
                    options={["Today", "This Week", "This Month", "Older"]}
                    onSelect={(value) => onFilterChange('movingIn', value)}
                    defaultOption="Moving in..."
                />
            </div>
        </div>
        {/* end timeline filters */}
    </div >
};

export default FilterSection;