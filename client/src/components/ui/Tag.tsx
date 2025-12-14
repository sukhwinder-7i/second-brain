// filepath: /client/src/components/ui/Tag.tsx
const Tag = ({ text, onRemove }: { text: string; onRemove?: () => void }) => {
  return (
    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
      {text}
      {onRemove && (
        <button
          type="button"
          class="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full hover:bg-indigo-200"
          onClick={onRemove}
        >
          <span class="sr-only">Remove tag</span>
          <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag;