"use client";

import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {ChevronUpDownIcon} from "@heroicons/react/16/solid";
import {CheckIcon} from "@heroicons/react/20/solid";
import {categories} from "../../data";
import type {ICategory} from "../../interfaces";

interface IProps {
  selected: ICategory;
  setSelected: (category: ICategory) => void;
}

export const Select = ({selected, setSelected}: IProps) => {
  const getSafeImage = (url?: string) =>
    url && url.trim() !== "" ? url : "/fallback.png";

  if (!selected || !selected.id || !selected.name) {
    return (
      <div className="p-2 bg-red-100 text-red-700 rounded-md text-sm">
        Invalid category selected.
      </div>
    );
  }

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div>
        <Label className="block text-sm font-medium text-gray-900">
          Category
        </Label>
        <div className="relative mt-2">
          <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 border border-gray-300 focus:outline-none sm:text-sm">
            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
              <img
                alt={selected.name}
                src={getSafeImage(selected.imageURL)}
                onError={(e) => {
                  e.currentTarget.src = "/fallback.png";
                }}
                className="size-5 shrink-0 rounded-full"
              />
              <span className="block truncate">{selected.name}</span>
            </span>
            <ChevronUpDownIcon
              aria-hidden="true"
              className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </ListboxButton>

          <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {categories.map((category) => (
              <ListboxOption
                key={category.id}
                value={category}
                className="group relative cursor-default select-none py-2 pr-9 pl-3 text-gray-900 hover:bg-indigo-100"
              >
                <div className="flex items-center">
                  <img
                    alt={category.name}
                    src={getSafeImage(category.imageURL)}
                    onError={(e) => {
                      e.currentTarget.src = "/fallback.png";
                    }}
                    className="size-5 shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">
                    {category.name}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden">
                  <CheckIcon aria-hidden="true" className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </div>
    </Listbox>
  );
};
