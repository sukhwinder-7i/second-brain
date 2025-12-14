import { createSignal } from "solid-js";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = createSignal("");

  return (
    <div class="relative w-full">
      <input
        type="text"
        class="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-indigo-500 focus:outline-none"
        placeholder="Search your vault..."
        value={query()}
        onInput={(e) => {
          setQuery(e.currentTarget.value);
          onSearch(e.currentTarget.value);
        }}
      />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;