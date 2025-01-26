// $ Custom hook to filter items based on a key value pair for the project filter buttons.
// $ The hook returns the filtered items, the unique items, and the filter function from the data array passed to it.

import { useState, useEffect } from "react";

const useFilterItems = <T, K extends keyof T>(itemsArray: T[], key: K) => {
  const [items, setItems] = useState<T[]>([]);
  const [uniqueItems, setAllUniqueItems] = useState<(T[K] | "all")[]>([]);

  useEffect(() => {
    // Only set initial items once on first render
    if (itemsArray.length > 0 && items.length === 0) {
      setItems(itemsArray); // Only set initial items when `items` is empty
    }

    const allUniqueValues = [
      "all",
      ...new Set(
        itemsArray
          .map((item) => item[key])
          .filter((value) => value !== undefined)
      ),
    ] as (T[K] | "all")[];

    // setAllUniqueItems(allUniqueValues);
    // Only update unique items if they are different from the current state
    if (JSON.stringify(allUniqueValues) !== JSON.stringify(uniqueItems)) {
      setAllUniqueItems(allUniqueValues);
    }
  }, [itemsArray, key, items.length, uniqueItems]);

  // $ Filter Items based on category selection
  const filterByValue = (value: T[K] | "all") => {
    // $ Reset to original array
    if (value === "all") {
      setItems(itemsArray);
    } else {
      const filteredItems = itemsArray.filter((item) => item[key] === value);
      setItems(filteredItems);
    }
  };

  return { items, uniqueItems, filterByValue };
};

export default useFilterItems;
