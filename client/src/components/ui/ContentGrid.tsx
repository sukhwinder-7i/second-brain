// filepath: /client/src/components/ContentGrid.tsx
import { For } from "solid-js";
import { Content } from "../types.ts";
import Card from "./Card.jsx";

const ContentGrid = ({ items }: { items: Content[] }) => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <For each={items}>
        {(item) => (
          <Card
            title={item.title}
            url={item.url}
            tags={item.tags}
            type={item.type}
            createdAt={item.createdAt}
          />
        )}
      </For>
    </div>
  );
};

export default ContentGrid;