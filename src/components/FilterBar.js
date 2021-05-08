import React from 'react';

function FilterBar() {
    return (
        <div>
             <ul className="list-container container text-center">
                <li className="all-categories-container text-center">all categories</li>
                <li className="list-container-items">animation</li>
                <li className="list-container-items">illustration</li>
                <li className="list-container-items">motion graphics</li>
                <li className="list-container-items">ui/ux</li>
                <li className="list-container-items">graphics design</li>
            </ul>
        </div>
    )
}

export default FilterBar;
