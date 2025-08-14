import React, { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
const Categories = ({ cat }) => {
  const { categories } = cat;

  const Catogries = ({ category }) => {
    const [isOpen, SetisOpen] = useState(false);

    const hasOwnChildren =
      category.subcategories && category.subcategories.length > 0;

    const Handle_SetOpen = () => {
      if (hasOwnChildren) {
        SetisOpen((prev) => !prev);
      }
    };

    return (
      <li>
        <div className="flex items-center justify-between px-4 py-2">
          <span>{category.name}</span>

          {hasOwnChildren && (
            <span onClick={Handle_SetOpen}>
              {isOpen == true ? (
                <FaRegMinusSquare className="text-lg" />
              ) : (
                <FaRegPlusSquare className="text-lg" />
              )}
            </span>
          )}
        </div>

        {isOpen && hasOwnChildren && (
          <ul className="ml-6">
            {category.subcategories.map((categoryre) => {
              return <Catogries key={categoryre.id} category={categoryre} />;
            })}
          </ul>
        )}
      </li>
    );
  };

  return (
    <ul className="flex flex-col gap-2 w-full overflow-y-scroll h-[90vh]">
      {categories.map((category) => {
        return <Catogries key={category.id} category={category} />;
      })}
    </ul>
  );
};

export default Categories;
