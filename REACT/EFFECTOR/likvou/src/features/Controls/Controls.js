import React from "react";
import cx from "classnames";
import { createComponent } from "effector-react";

import { VISIBILITY_FILTERS } from "../constants";
import { setFilter, $visibilityFilter } from "./model";

export const Controls = createComponent(
  $visibilityFilter,
  (props, activeFilter) => {
    return (
      <div className="visibility-filters">
        {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
          const currentFilter = VISIBILITY_FILTERS[filterKey];
          return (
            <span
              key={`visibility-filter-${currentFilter}`}
              className={cx(
                "filter",
                currentFilter === activeFilter && "filter--active"
              )}
              onClick={() => setFilter(currentFilter)}
            >
              {currentFilter}
            </span>
          );
        })}
      </div>
    );
  }
);
